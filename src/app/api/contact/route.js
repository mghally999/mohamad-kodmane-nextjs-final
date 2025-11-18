import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Translation dictionaries
const translations = {
  en: {
    callback: {
      subject:
        "Thank you for your callback request - Mohamad Kodmani Real Estate",
      title: "Thank You for Your Interest",
      greeting: "Dear",
      message: "We have received your callback request for",
      contactTime:
        "Mohamad Kodmani will contact you within 15 minutes at the phone number you provided.",
      regards: "Best regards,",
      signature: "Mohamad Kodmani Real Estate Brokerage",
      footer:
        "This is an automated message. Please do not reply to this email.",
    },
    project: {
      subject:
        "Thank you for your interest in {project} - Mohamad Kodmani Real Estate",
      title: "Thank You for Your Luxury Property Inquiry",
      greeting: "Dear",
      message: "We have received your inquiry for",
      project: "Project",
      contactTime:
        "Our luxury property specialist will contact you within 24 hours using your preferred contact method:",
      regards: "Best regards,",
      signature: "Mohamad Kodmani Real Estate Brokerage",
      footer:
        "This is an automated message. Please do not reply to this email.",
    },
  },
  ar: {
    callback: {
      subject: "شكراً لطلبك للاتصال - محمد قضماني للعقارات",
      title: "شكراً لاهتمامك",
      greeting: "عزيزي/عزيزتي",
      message: "لقد استلمنا طلبك للاتصال بخصوص",
      contactTime:
        "سيقوم محمد قضماني بالاتصال بك خلال 15 دقيقة على رقم الهاتف الذي قدمته.",
      regards: "مع أطيب التحيات،",
      signature: "محمد قضماني للوساطة العقارية",
      footer: "هذه رسالة آلية. يرجى عدم الرد على هذا البريد الإلكتروني.",
    },
    project: {
      subject: "شكراً لاهتمامك بمشروع {project} - محمد قضماني للعقارات",
      title: "شكراً لاستفسارك عن العقارات الفاخرة",
      greeting: "عزيزي/عزيزتي",
      message: "لقد استلمنا استفسارك حول",
      project: "المشروع",
      contactTime:
        "سيقوم مستشار العقارات الفاخرة بالاتصال بك خلال 24 ساعة باستخدام طريقة الاتصال المفضلة لديك:",
      regards: "مع أطيب التحيات،",
      signature: "محمد قضماني للوساطة العقارية",
      footer: "هذه رسالة آلية. يرجى عدم الرد على هذا البريد الإلكتروني.",
    },
  },
};

// Contact method labels
const contactMethodLabels = {
  en: {
    phone: "Phone Call",
    email: "Email",
    whatsapp: "WhatsApp",
  },
  ar: {
    phone: "مكالمة هاتفية",
    email: "بريد إلكتروني",
    whatsapp: "واتساب",
  },
};

// Interest labels
const interestLabels = {
  en: {
    "off-plan": "Off-Plan Properties",
    ready: "Ready Properties",
    portfolio: "Portfolio Building",
    consultation: "Expert Consultation",
  },
  ar: {
    "off-plan": "العقارات قيد الإنشاء",
    ready: "العقارات الجاهزة",
    portfolio: "بناء المحفظة الاستثمارية",
    consultation: "استشارة خبراء",
  },
};

export async function POST(request) {
  console.log("📧 API Route Called - Production");

  try {
    const formData = await request.json();
    console.log("📝 Form Data Received:", formData);

    // Determine form type and validate accordingly
    const formType = determineFormType(formData);
    console.log("🔍 Form Type:", formType);

    // Validate based on form type
    const validation = validateFormData(formData, formType);
    if (!validation.isValid) {
      return NextResponse.json(
        {
          success: false,
          message: validation.message,
        },
        { status: 400 }
      );
    }

    console.log("✅ Form validation passed");

    // Create email transporter with PRODUCTION settings
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      connectionTimeout: 60000,
      greetingTimeout: 60000,
      socketTimeout: 60000,
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Send emails + push to respond.io - PARALLEL execution
    let respondIoResult;
    let emailResults = [];

    try {
      // Run respond.io and emails in parallel for better performance
      [respondIoResult, emailResults] = await Promise.allSettled([
        // 1. Respond.io (most important - run first)
        sendToRespondIO(formData, formType.toLowerCase()),

        // 2. Emails (run in parallel)
        (async () => {
          try {
            if (formType === "CALLBACK_FORM") {
              return await Promise.allSettled([
                sendCallbackEmailToAdmin(transporter, formData),
                sendAutoReplyToUser(transporter, formData, "callback"),
              ]);
            } else if (formType === "PROJECT_FORM") {
              return await Promise.allSettled([
                sendProjectEmailToAdmin(transporter, formData),
                sendAutoReplyToUser(transporter, formData, "project"),
              ]);
            } else {
              return await Promise.allSettled([
                sendGenericEmail(transporter, formData),
              ]);
            }
          } catch (emailError) {
            console.error("❌ Email processing failed:", emailError);
            return [];
          }
        })(),
      ]);

      // Log results
      if (respondIoResult.status === "fulfilled" && respondIoResult.value) {
        console.log("✅ Respond.io contact created & tagged successfully");
      } else {
        console.log("❌ Respond.io failed");
      }

      if (emailResults.status === "fulfilled") {
        emailResults.value?.forEach((result, index) => {
          if (result.status === "fulfilled") {
            console.log(`✅ Email ${index + 1} sent successfully`);
          } else {
            console.error(
              `❌ Email ${index + 1} failed:`,
              result.reason?.message
            );
          }
        });
      }
    } catch (error) {
      console.error("❌ Main processing failed:", error);
    }

    // Return success response regardless of email/respond.io results
    return NextResponse.json(
      {
        success: true,
        message: getSuccessMessage(formType, formData.locale),
        data: {
          formType: formType,
          respondIoSuccess: !!respondIoResult?.value,
          ...formData,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ API Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Server error. Please try again later or contact us directly.",
      },
      { status: 500 }
    );
  }
}

/* ------------------------------------------------------------------
   RESPOND.IO INTEGRATION (PRODUCTION FIXED)
------------------------------------------------------------------- */

// Format phone number to E.164 standard
function formatPhoneNumber(phone) {
  if (!phone) return null;

  const cleaned = phone.replace(/\D/g, "");

  if (cleaned.startsWith("971") && cleaned.length === 12) {
    return cleaned;
  }

  if (cleaned.startsWith("+971") && cleaned.length === 13) {
    return cleaned.substring(1);
  }

  if (cleaned.startsWith("0") && cleaned.length === 10) {
    return `971${cleaned.substring(1)}`;
  }

  if (cleaned.startsWith("5") && cleaned.length === 9) {
    return `971${cleaned}`;
  }

  return `971${cleaned}`;
}

// Create contact AND apply website-lead tag in respond.io - PRODUCTION FIXED
async function sendToRespondIO(data, formType) {
  const token = process.env.RESPONDIO_TOKEN;

  if (!token) {
    console.log("❌ Respond.io token missing in production");
    return null;
  }

  // Validate token in production
  if (typeof token !== "string" || !token.startsWith("eyJ")) {
    console.log("❌ Invalid Respond.io token format in production");
    return null;
  }

  // Build identifier - either email or phone
  let identifier;
  if (data.email) {
    identifier = `email:${data.email.trim().toLowerCase()}`;
    console.log(`📧 Using email identifier: ${identifier}`);
  } else if (data.phone) {
    const formattedPhone = formatPhoneNumber(data.phone);
    if (formattedPhone) {
      identifier = `phone:+${formattedPhone}`;
      console.log(`📞 Using phone identifier: ${identifier}`);
    } else {
      console.log("❌ Invalid phone number format");
      return null;
    }
  } else {
    console.log("❌ No phone or email provided for respond.io");
    return null;
  }

  // Prepare contact data
  const contactData = {
    firstName: data.firstName || data.name || "Website Lead",
    lastName: data.lastName || "",
    phone: data.phone ? `+${formatPhoneNumber(data.phone)}` : null,
    email: data.email ? data.email.trim().toLowerCase() : null,
    language: data.locale === "ar" ? "ar" : "en",
    countryCode: "AE",
  };

  // Clean null values for production
  Object.keys(contactData).forEach((key) => {
    if (
      contactData[key] === null ||
      contactData[key] === "" ||
      contactData[key] === undefined
    ) {
      delete contactData[key];
    }
  });

  const contactUrl = `https://api.respond.io/v2/contact/${encodeURIComponent(
    identifier
  )}`;
  const tags = ["website-lead"];

  console.log("📤 Creating contact in respond.io (Production):", {
    identifier,
    hasFirstName: !!contactData.firstName,
    hasPhone: !!contactData.phone,
    hasEmail: !!contactData.email,
    formType,
  });

  try {
    // STEP 1: Create or update contact with production timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const contactResponse = await fetch(contactUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token.trim()}`,
      },
      body: JSON.stringify(contactData),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    const contactResponseText = await contactResponse.text();
    console.log(`📡 Contact API Response: ${contactResponse.status}`);

    let contactCreated = false;

    if (contactResponse.ok) {
      console.log("✅ Contact created/updated successfully");
      contactCreated = true;
    } else if (contactResponse.status === 403) {
      console.log("ℹ️ Contact already exists - proceeding to tag");
      contactCreated = true;
    } else {
      console.error(
        `❌ Contact creation failed: ${contactResponse.status} - ${contactResponseText}`
      );
      return null;
    }

    // STEP 2: Apply website-lead tag with production timeout
    if (contactCreated) {
      const tagUrl = `${contactUrl}/tag`;
      console.log("🏷️ Applying website-lead tag in production");

      const tagController = new AbortController();
      const tagTimeoutId = setTimeout(() => tagController.abort(), 10000);

      const tagResponse = await fetch(tagUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token.trim()}`,
        },
        body: JSON.stringify(tags),
        signal: tagController.signal,
      });

      clearTimeout(tagTimeoutId);

      const tagResponseText = await tagResponse.text();
      console.log(`📡 Tag API Response: ${tagResponse.status}`);

      if (tagResponse.ok) {
        console.log("✅ website-lead tag applied successfully in production");
        return {
          success: true,
          identifier,
          tags: tags,
        };
      } else {
        console.error(
          `❌ Tag application failed: ${tagResponse.status} - ${tagResponseText}`
        );
        return {
          success: true,
          identifier,
          tags: [],
          tagError: true,
        };
      }
    }

    return null;
  } catch (error) {
    if (error.name === "AbortError") {
      console.error("❌ Respond.io request timeout in production");
    } else {
      console.error("❌ Network error contacting respond.io:", error.message);
    }
    return null;
  }
}

/* ------------------------------------------------------------------
   FORM TYPE / VALIDATION / HELPERS
------------------------------------------------------------------- */

function determineFormType(data) {
  if (data.name && data.phone && data.interest) {
    return "CALLBACK_FORM";
  }
  if (data.firstName && data.lastName && data.project) {
    return "PROJECT_FORM";
  }
  return "UNKNOWN_FORM";
}

function validateFormData(data, formType) {
  if (formType === "CALLBACK_FORM") {
    if (!data.name || !data.phone || !data.interest) {
      return {
        isValid: false,
        message:
          "Please fill in all required fields: name, phone, and investment interest",
      };
    }
    if (data.phone.replace(/\D/g, "").length < 9) {
      return { isValid: false, message: "Please enter a valid phone number" };
    }
  } else if (formType === "PROJECT_FORM") {
    if (
      !data.firstName ||
      !data.lastName ||
      !data.phone ||
      !data.email ||
      !data.project
    ) {
      return { isValid: false, message: "Please fill in all required fields" };
    }
    if (data.phone.replace(/\D/g, "").length < 9) {
      return { isValid: false, message: "Please enter a valid phone number" };
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return { isValid: false, message: "Please enter a valid email address" };
    }
  } else {
    return { isValid: false, message: "Invalid form submission" };
  }

  return { isValid: true };
}

function getSuccessMessage(formType, locale = "en") {
  const messages = {
    en: {
      CALLBACK_FORM:
        "Thank you! Mohamad Kodmani will contact you within 15 minutes.",
      PROJECT_FORM:
        "Thank you for your interest! Our luxury property specialist will contact you within 24 hours.",
    },
    ar: {
      CALLBACK_FORM: "شكراً لك! سيتواصل محمد قضماني معك خلال 15 دقيقة.",
      PROJECT_FORM:
        "شكراً لاهتمامك! سيتواصل معك مستشار العقارات الفاخرة خلال 24 ساعة.",
    },
  };

  const lang = locale === "ar" ? "ar" : "en";
  return (
    messages[lang][formType] ||
    "Thank you for your submission! We'll contact you shortly."
  );
}

/* ------------------------------------------------------------------
   EMAIL SENDING FUNCTIONS (FULL HTML TEMPLATES)
------------------------------------------------------------------- */

async function sendCallbackEmailToAdmin(transporter, data) {
  try {
    const formattedPhone = formatPhoneNumber(data.phone);
    const userLocale = data.locale || "en";
    const isRTL = userLocale === "ar";

    const adminTranslations = {
      en: {
        subject: "New Callback Request - Mohamad Kodmani Real Estate",
        title: "New Callback Request",
        priority: "⏰ High Priority - Callback Required Within 15 Minutes",
        clientName: "Client Name:",
        phoneNumber: "Phone Number:",
        investmentInterest: "Investment Interest:",
        userLanguage: "User Language:",
        submissionTime: "Submission Time:",
        callClient: "📞 Call Client",
        whatsapp: "💬 WhatsApp",
        brokerage: "Mohamad Kodmani Real Estate Brokerage",
        submittedThrough:
          "This request was submitted through the website callback form",
      },
      ar: {
        subject: "طلب اتصال جديد - محمد قضماني للعقارات",
        title: "طلب اتصال جديد",
        priority: "⏰ أولوية عالية - مطلوب اتصال خلال 15 دقيقة",
        clientName: "اسم العميل:",
        phoneNumber: "رقم الهاتف:",
        investmentInterest: "مجال الاهتمام:",
        userLanguage: "لغة المستخدم:",
        submissionTime: "وقت الإرسال:",
        callClient: "📞 اتصل بالعميل",
        whatsapp: "💬 واتساب",
        brokerage: "محمد قضماني للوساطة العقارية",
        submittedThrough: "تم إرسال هذا الطلب عبر نموذج الاتصال في الموقع",
      },
    };

    const t = adminTranslations[userLocale] || adminTranslations.en;
    const userLanguage = userLocale === "ar" ? "Arabic 🇦🇪" : "English 🇺🇸";

    const emailHtml = `
<!DOCTYPE html>
<html lang="${userLocale}" dir="${isRTL ? "rtl" : "ltr"}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${t.subject}</title>
</head>
<body style="font-family: ${
      isRTL ? "Arial, Tahoma, sans-serif" : "Arial, sans-serif"
    }; max-width: 600px; margin: 0 auto; background: #f8f9fa; color: #333; line-height: 1.6; text-align: ${
      isRTL ? "right" : "left"
    };">
    <div style="background: #ffffff; border-radius: 12px; overflow: hidden; margin: 20px auto; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <div style="background: #1a1a1a; color: #d4af37; padding: 25px; text-align: center; border-bottom: 4px solid #d4af37;">
            <h1 style="margin: 0; font-size: 22px; font-weight: bold;">${
              t.title
            }</h1>
            <p style="margin: 8px 0 0 0;">Mohamad Kodmani Real Estate</p>
        </div>
        
        <div style="padding: 25px;">
            <div style="background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 8px; padding: 15px; margin: 20px 0; text-align: center; font-weight: bold;">
                ${t.priority}
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #d4af37;">
                <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e9ecef;">
                    <span style="font-weight: bold; color: #1a1a1a; min-width: 140px;">${
                      t.clientName
                    }</span>
                    <span style="color: #495057; text-align: ${
                      isRTL ? "left" : "right"
                    };">${data.name}</span>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e9ecef;">
                    <span style="font-weight: bold; color: #1a1a1a; min-width: 140px;">${
                      t.phoneNumber
                    }</span>
                    <span style="color: #495057; text-align: ${
                      isRTL ? "left" : "right"
                    };">+${formattedPhone}</span>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e9ecef;">
                    <span style="font-weight: bold; color: #1a1a1a; min-width: 140px;">${
                      t.investmentInterest
                    }</span>
                    <span style="color: #495057; text-align: ${
                      isRTL ? "left" : "right"
                    };">${getInterestLabel(data.interest, userLocale)}</span>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e9ecef;">
                    <span style="font-weight: bold; color: #1a1a1a; min-width: 140px;">${
                      t.userLanguage
                    }</span>
                    <span style="color: #495057; text-align: ${
                      isRTL ? "left" : "right"
                    };">${userLanguage}</span>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 10px 0;">
                    <span style="font-weight: bold; color: #1a1a1a; min-width: 140px;">${
                      t.submissionTime
                    }</span>
                    <span style="color: #495057; text-align: ${
                      isRTL ? "left" : "right"
                    };">${new Date().toLocaleString("en-US", {
      timeZone: "Asia/Dubai",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })}</span>
                </div>
            </div>
            
            <div style="text-align: center; margin: 20px 0;">
                <a href="tel:+${formattedPhone}" style="background: #d4af37; color: #1a1a1a; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: bold; display: inline-block; margin: 5px; font-size: 14px;">
                    ${t.callClient}
                </a>
                <a href="https://wa.me/${formattedPhone}?text=Hi%20${encodeURIComponent(
      data.name
    )}%2C%20I'm%20Mohamad%20Kodmani%20following%20up%20on%20your%20callback%20request%20for%20${encodeURIComponent(
      getInterestLabel(data.interest, userLocale)
    )}." 
                   style="background: #25D366; color: white; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: bold; display: inline-block; margin: 5px; font-size: 14px;">
                    ${t.whatsapp}
                </a>
            </div>
        </div>
        
        <div style="background: #1a1a1a; color: #d4af37; padding: 15px; text-align: center; font-size: 12px; border-top: 1px solid #333;">
            <p style="margin: 0;">${t.brokerage}</p>
            <p style="margin: 8px 0 0 0;">${t.submittedThrough}</p>
        </div>
    </div>
</body>
</html>
    `;

    const mailOptions = {
      from: `"Mohamad Kodmani Real Estate" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: t.subject,
      html: emailHtml,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log("✅ Callback admin email sent");
    return result;
  } catch (error) {
    console.error("❌ Callback admin email failed:", error.message);
    throw error;
  }
}

async function sendProjectEmailToAdmin(transporter, data) {
  try {
    const formattedPhone = formatPhoneNumber(data.phone);

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Project Inquiry</title>
</head>
<body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa; color: #333; line-height: 1.6;">
    <div style="background: #ffffff; border-radius: 12px; overflow: hidden; margin: 20px auto; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <div style="background: #1a1a1a; color: #d4af37; padding: 25px; text-align: center; border-bottom: 4px solid #d4af37;">
            <h1 style="margin: 0; font-size: 22px; font-weight: bold;">New Project Inquiry</h1>
            <p style="margin: 8px 0 0 0;">Mohamad Kodmani Real Estate</p>
        </div>
        
        <div style="padding: 25px;">
            <div style="background: #e7f3ff; border: 1px solid #b3d9ff; border-radius: 8px; padding: 15px; margin: 20px 0; text-align: center;">
                🏢 Project Inquiry - Response Required Within 24 Hours
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #d4af37;">
                <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e9ecef;">
                    <span style="font-weight: bold; color: #1a1a1a; min-width: 140px;">Client Name:</span>
                    <span style="color: #495057; text-align: right;">${
                      data.firstName
                    } ${data.lastName}</span>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e9ecef;">
                    <span style="font-weight: bold; color: #1a1a1a; min-width: 140px;">Phone Number:</span>
                    <span style="color: #495057; text-align: right;">+${formattedPhone}</span>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e9ecef;">
                    <span style="font-weight: bold; color: #1a1a1a; min-width: 140px;">Email:</span>
                    <span style="color: #495057; text-align: right;">${
                      data.email
                    }</span>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e9ecef;">
                    <span style="font-weight: bold; color: #1a1a1a; min-width: 140px;">Project:</span>
                    <span style="color: #495057; text-align: right;">${
                      data.project
                    }</span>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e9ecef;">
                    <span style="font-weight: bold; color: #1a1a1a; min-width: 140px;">Unit Type:</span>
                    <span style="color: #495057; text-align: right;">${
                      data.unitType || "Not specified"
                    }</span>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e9ecef;">
                    <span style="font-weight: bold; color: #1a1a1a; min-width: 140px;">Contact Method:</span>
                    <span style="color: #495057; text-align: right;">${getContactMethodLabel(
                      data.contactMethod,
                      "en"
                    )}</span>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 10px 0;">
                    <span style="font-weight: bold; color: #1a1a1a; min-width: 140px;">Submission Time:</span>
                    <span style="color: #495057; text-align: right;">${new Date().toLocaleString(
                      "en-US",
                      {
                        timeZone: "Asia/Dubai",
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      }
                    )}</span>
                </div>
            </div>
            
            <div style="text-align: center; margin: 20px 0;">
                ${
                  data.contactMethod === "whatsapp"
                    ? `<a href="https://wa.me/${formattedPhone}?text=Hi%20${encodeURIComponent(
                        data.firstName
                      )}%2C%20I'm%20Mohamad%20Kodmani%20following%20up%20on%20your%20inquiry%20about%20${encodeURIComponent(
                        data.project
                      )}." 
                     style="background: #25D366; color: white; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: bold; display: inline-block; margin: 5px; font-size: 14px;">
                     💬 WhatsApp Client
                  </a>`
                    : ""
                }
                
                ${
                  data.contactMethod === "phone"
                    ? `<a href="tel:+${formattedPhone}" style="background: #d4af37; color: #1a1a1a; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: bold; display: inline-block; margin: 5px; font-size: 14px;">
                     📞 Call Client
                  </a>`
                    : ""
                }
                
                ${
                  data.contactMethod === "email"
                    ? `<a href="mailto:${data.email}" style="background: #d4af37; color: #1a1a1a; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: bold; display: inline-block; margin: 5px; font-size: 14px;">
                     ✉️ Email Client
                  </a>`
                    : ""
                }
                
                <a href="tel:+971566665560" style="background: #d4af37; color: #1a1a1a; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: bold; display: inline-block; margin: 5px; font-size: 14px;">
                    📞 Call Office
                </a>
            </div>
        </div>
        
        <div style="background: #1a1a1a; color: #d4af37; padding: 15px; text-align: center; font-size: 12px; border-top: 1px solid #333;">
            <p style="margin: 0;">Mohamad Kodmani Real Estate Brokerage</p>
            <p style="margin: 8px 0 0 0;">This inquiry was submitted through the website project form</p>
        </div>
    </div>
</body>
</html>
    `;

    const mailOptions = {
      from: `"Mohamad Kodmani Real Estate" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `Project Inquiry - ${data.project} - ${data.firstName} ${data.lastName}`,
      html: emailHtml,
      replyTo: data.email,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log("✅ Project admin email sent");
    return result;
  } catch (error) {
    console.error("❌ Project admin email failed:", error.message);
    throw error;
  }
}

async function sendAutoReplyToUser(transporter, data, formType) {
  try {
    const userLocale = data.locale || "en";
    const isRTL = userLocale === "ar";
    const t = translations[userLocale][formType];
    const formattedPhone = formatPhoneNumber(data.phone);

    let subject, title, message, details, userEmail;

    if (formType === "callback") {
      subject = t.subject;
      title = t.title;
      message = `${t.greeting} ${data.name},<br><br>${
        t.message
      } <strong>${getInterestLabel(data.interest, userLocale)}</strong>.`;
      details = `
        <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #d4af37;">
          <div style="margin-bottom: 8px;"><strong>${
            isRTL ? "الاسم:" : "Name:"
          }</strong> ${data.name}</div>
          <div style="margin-bottom: 8px;"><strong>${
            isRTL ? "رقم الهاتف:" : "Phone:"
          }</strong> +${formattedPhone}</div>
          <div><strong>${
            isRTL ? "مجال الاهتمام:" : "Interest:"
          }</strong> ${getInterestLabel(data.interest, userLocale)}</div>
        </div>
      `;
      userEmail = data.email;
    } else {
      subject = t.subject.replace("{project}", data.project);
      title = t.title;
      message = `${t.greeting} ${data.firstName},<br><br>${t.message} <strong>${data.project}</strong>.`;
      details = `
        <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #d4af37;">
          <div style="margin-bottom: 8px;"><strong>${
            isRTL ? "الاسم:" : "Name:"
          }</strong> ${data.firstName} ${data.lastName}</div>
          <div style="margin-bottom: 8px;"><strong>${
            isRTL ? "رقم الهاتف:" : "Phone:"
          }</strong> +${formattedPhone}</div>
          <div style="margin-bottom: 8px;"><strong>${
            isRTL ? "البريد الإلكتروني:" : "Email:"
          }</strong> ${data.email}</div>
          <div style="margin-bottom: 8px;"><strong>${t.project}:</strong> ${
        data.project
      }</div>
          ${
            data.unitType
              ? `<div style="margin-bottom: 8px;"><strong>${
                  isRTL ? "نوع الوحدة:" : "Unit Type:"
                }</strong> ${data.unitType}</div>`
              : ""
          }
          <div><strong>${
            isRTL ? "طريقة التواصل المفضلة:" : "Preferred Contact:"
          }</strong> ${getContactMethodLabel(
        data.contactMethod,
        userLocale
      )}</div>
        </div>
      `;
      userEmail = data.email;
    }

    if (!userEmail) {
      console.log("No email provided for auto-reply");
      return;
    }

    const emailHtml = `
<!DOCTYPE html>
<html lang="${userLocale}" dir="${isRTL ? "rtl" : "ltr"}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${subject}</title>
</head>
<body style="font-family: ${
      isRTL ? "Arial, Tahoma, sans-serif" : "Arial, sans-serif"
    }; max-width: 600px; margin: 0 auto; background: #f8f9fa; color: #333; line-height: 1.6; text-align: ${
      isRTL ? "right" : "left"
    };">
    <div style="background: #ffffff; border-radius: 12px; overflow: hidden; margin: 20px auto; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <div style="background: #1a1a1a; color: #d4af37; padding: 30px; text-align: center; border-bottom: 4px solid #d4af37;">
            <h1 style="margin: 0; font-size: 24px; font-weight: bold;">${title}</h1>
            <p style="margin: 8px 0 0 0; opacity: 0.9;">Mohamad Kodmani Real Estate</p>
        </div>
        
        <div style="padding: 30px;">
            <div style="margin-bottom: 25px; font-size: 16px; color: #555;">
                ${message}
                ${details}
            </div>
            
            <div style="background: #fff9e6; border: 1px solid #ffeaa7; border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center;">
                <p style="margin: 0; font-size: 15px; font-weight: bold;">${
                  t.contactTime
                }</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef;">
                <p style="margin: 0 0 8px 0;">${t.regards}</p>
                <p style="margin: 0; font-weight: bold; color: #d4af37;">${
                  t.signature
                }</p>
                <p style="margin: 15px 0 0 0; font-size: 14px; color: #666;">${
                  t.footer
                }</p>
            </div>
        </div>
        
        <div style="background: #1a1a1a; color: #d4af37; padding: 20px; text-align: center; font-size: 12px; border-top: 1px solid #333;">
            <p style="margin: 0;">${t.signature}</p>
            <p style="margin: 8px 0 0 0;">${
              isRTL
                ? "هذه الرسالة أرسلت تلقائياً"
                : "This is an automated message"
            }</p>
        </div>
    </div>
</body>
</html>
    `;

    const mailOptions = {
      from: `"Mohamad Kodmani Real Estate" <${process.env.EMAIL_USER}>`,
      to: userEmail,
      subject: subject,
      html: emailHtml,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log("✅ Auto-reply email sent");
    return result;
  } catch (error) {
    console.error("❌ Auto-reply email failed:", error.message);
    throw error;
  }
}

async function sendGenericEmail(transporter, data) {
  try {
    const mailOptions = {
      from: `"Mohamad Kodmani Real Estate" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "New Website Inquiry",
      html: `<pre>${JSON.stringify(data, null, 2)}</pre>`,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log("✅ Generic email sent");
    return result;
  } catch (error) {
    console.error("❌ Generic email failed:", error.message);
    throw error;
  }
}

// Helper functions
function getInterestLabel(interest, locale = "en") {
  return interestLabels[locale]?.[interest] || interest;
}

function getContactMethodLabel(method, locale = "en") {
  return contactMethodLabels[locale]?.[method] || method;
}

export async function OPTIONS(request) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
