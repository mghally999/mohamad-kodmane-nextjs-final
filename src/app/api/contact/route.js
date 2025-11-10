import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  console.log("📧 API Route Called");

  try {
    const formData = await request.json();
    console.log("📝 Form Data Received:", formData);

    // Determine form type based on the data structure
    const formType = determineFormType(formData);
    console.log("🔍 Form Type Detected:", formType);

    // Validate required fields based on form type
    const validationResult = validateFormData(formData, formType);
    if (!validationResult.isValid) {
      console.log("❌ Validation Failed:", validationResult.message);
      return NextResponse.json(
        {
          success: false,
          message: validationResult.message,
        },
        { status: 400 }
      );
    }

    console.log("✅ Form validation passed");

    // Email configuration with debugging
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      debug: true, // Enable debug output
      logger: true, // Log to console
    });

    console.log("🔧 Transporter configured");

    // Verify connection configuration
    try {
      console.log("🔌 Testing SMTP connection...");
      await transporter.verify();
      console.log("✅ SMTP Server is ready to send emails");
    } catch (verifyError) {
      console.error("❌ SMTP connection failed:", verifyError);
      return NextResponse.json(
        {
          success: false,
          message:
            "Email service configuration error. Please check your email settings.",
          error: "EMAIL_CONFIG_ERROR",
          details: verifyError.message,
        },
        { status: 500 }
      );
    }

    // Send email based on form type
    console.log("📤 Sending email for form type:", formType);
    const emailResult = await sendFormEmail(transporter, formData, formType);

    if (!emailResult.success) {
      console.error("❌ Email sending failed:", emailResult.error);
      throw new Error(emailResult.error);
    }

    console.log("✅ Email sent successfully");

    return NextResponse.json(
      {
        success: true,
        message: getSuccessMessage(formType),
        data: {
          formType: formType,
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
        error: error.message || "SERVER_ERROR",
      },
      { status: 500 }
    );
  }
}

// Helper function to determine form type
function determineFormType(data) {
  if (data.firstName && data.lastName && data.project) {
    return "PROJECT_FORM";
  } else if (data.name && data.phone && !data.interest) {
    return "MINI_CALLBACK_FORM";
  } else if (data.name && data.phone && data.interest) {
    return "CALLBACK_FORM";
  }
  return "UNKNOWN_FORM";
}

// Helper function to validate form data
function validateFormData(data, formType) {
  const validations = {
    CALLBACK_FORM: {
      required: ["name", "phone", "interest"],
      message: "Please fill in name, phone, and investment interest",
    },
    MINI_CALLBACK_FORM: {
      required: ["name", "phone"],
      message: "Please fill in name and phone number",
    },
    PROJECT_FORM: {
      required: ["firstName", "lastName", "phone", "email", "project"],
      message:
        "Please fill in all required fields: first name, last name, phone, email, and project",
    },
  };

  const validation = validations[formType];
  if (!validation) {
    return { isValid: false, message: "Invalid form type" };
  }

  const missingFields = validation.required.filter((field) => !data[field]);
  if (missingFields.length > 0) {
    return { isValid: false, message: validation.message };
  }

  return { isValid: true };
}

// Helper function to get success message
function getSuccessMessage(formType) {
  const messages = {
    CALLBACK_FORM:
      "Thank you! Mohamad Kodmani will contact you within 15 minutes.",
    MINI_CALLBACK_FORM:
      "Thank you! Our investment team will call you back within 15 minutes.",
    PROJECT_FORM:
      "Thank you for your interest! Our luxury property specialist will contact you within 24 hours.",
  };
  return (
    messages[formType] ||
    "Thank you for your submission! We'll contact you shortly."
  );
}

// Helper function to send appropriate email based on form type
async function sendFormEmail(transporter, data, formType) {
  const emailFunctions = {
    CALLBACK_FORM: sendCallbackEmail,
    MINI_CALLBACK_FORM: sendMiniCallbackEmail,
    PROJECT_FORM: sendProjectInquiryEmail,
  };

  const emailFunction = emailFunctions[formType] || sendGenericEmail;
  return await emailFunction(transporter, data);
}

// Email for Callback Form (with interest)
async function sendCallbackEmail(transporter, data) {
  const adminMailOptions = {
    from: `"Mohamad Kodmani Website" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL,
    replyTo: process.env.EMAIL_USER,
    subject: `🎯 New Investment Inquiry - ${data.name}`,
    html: generateCallbackEmailHTML(data),
  };

  console.log("📧 Sending callback email to:", process.env.ADMIN_EMAIL);
  await transporter.sendMail(adminMailOptions);
  return { success: true };
}

// Email for Mini Callback Form
async function sendMiniCallbackEmail(transporter, data) {
  const adminMailOptions = {
    from: `"Mohamad Kodmani Website" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL,
    replyTo: process.env.EMAIL_USER,
    subject: `📞 Callback Request - ${data.name}`,
    html: generateMiniCallbackEmailHTML(data),
  };

  console.log("📧 Sending mini callback email to:", process.env.ADMIN_EMAIL);
  await transporter.sendMail(adminMailOptions);
  return { success: true };
}

// Email for Project Inquiry Form
async function sendProjectInquiryEmail(transporter, data) {
  const adminMailOptions = {
    from: `"Mohamad Kodmani Website" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL,
    replyTo: data.email || process.env.EMAIL_USER,
    subject: `🏢 Project Inquiry - ${data.project} - ${data.firstName} ${data.lastName}`,
    html: generateProjectInquiryEmailHTML(data),
  };

  console.log("📧 Sending project inquiry email to:", process.env.ADMIN_EMAIL);
  await transporter.sendMail(adminMailOptions);
  return { success: true };
}

// Generic email fallback
async function sendGenericEmail(transporter, data) {
  const adminMailOptions = {
    from: `"Mohamad Kodmani Website" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL,
    replyTo: process.env.EMAIL_USER,
    subject: `📝 New Website Inquiry`,
    html: generateGenericEmailHTML(data),
  };

  console.log("📧 Sending generic email to:", process.env.ADMIN_EMAIL);
  await transporter.sendMail(adminMailOptions);
  return { success: true };
}

// HTML Email Templates
function generateCallbackEmailHTML(data) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <style>
            body { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; }
            .container { border: 2px solid #d7b46a; border-radius: 16px; overflow: hidden; }
            .header { background: #000000; color: #d7b46a; padding: 30px; text-align: center; }
            .content { padding: 30px; }
            .badge { background: #d7b46a; color: #000000; padding: 10px 20px; border-radius: 20px; display: inline-block; font-weight: bold; margin-bottom: 20px; }
            .info-grid { display: grid; gap: 10px; margin: 20px 0; }
            .info-item { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee; }
            .action-box { background: rgba(215, 180, 106, 0.1); padding: 20px; border-radius: 8px; border-left: 4px solid #d7b46a; margin: 20px 0; }
            .footer { background: #000000; color: #d7b46a; padding: 20px; text-align: center; font-size: 12px; }
            .button { background: #d7b46a; color: #000000; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block; margin: 5px; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>NEW INVESTMENT INQUIRY</h1>
                <p>Mohamad Kodmani Real Estate</p>
            </div>
            
            <div class="content">
                <div class="badge">🎯 Priority Lead</div>
                
                <div class="info-grid">
                    <div class="info-item">
                        <strong>Name:</strong>
                        <span>${data.name}</span>
                    </div>
                    <div class="info-item">
                        <strong>Phone:</strong>
                        <span>${data.phone}</span>
                    </div>
                    <div class="info-item">
                        <strong>Investment Interest:</strong>
                        <span>${getInterestLabel(data.interest)}</span>
                    </div>
                </div>
                
                <div class="action-box">
                    <strong>⏰ 15-Minute Response Required</strong><br>
                    Please contact this potential investor immediately.
                </div>
                
                <div style="text-align: center; margin-top: 25px;">
                    <a href="https://wa.me/${
                      process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
                    }?text=Hi%20${encodeURIComponent(
    data.name
  )}%2C%20I%27m%20following%20up%20on%20your%20interest%20in%20${encodeURIComponent(
    getInterestLabel(data.interest)
  )}%20investment%20opportunities." 
                       class="button" style="background: #25D366; color: white;">
                        📱 WhatsApp Now
                    </a>
                    <a href="tel:${data.phone}" class="button">
                        📞 Call Directly
                    </a>
                </div>
            </div>
            
            <div class="footer">
                <p>© 2024 Mohamad Kodmani Real Estate Brokerage</p>
            </div>
        </div>
    </body>
    </html>
  `;
}

function generateMiniCallbackEmailHTML(data) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <style>
            body { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; }
            .container { border: 2px solid #d7b46a; border-radius: 16px; overflow: hidden; }
            .header { background: #000000; color: #d7b46a; padding: 30px; text-align: center; }
            .content { padding: 30px; }
            .badge { background: #d7b46a; color: #000000; padding: 10px 20px; border-radius: 20px; display: inline-block; font-weight: bold; margin-bottom: 20px; }
            .info-grid { display: grid; gap: 10px; margin: 20px 0; }
            .info-item { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee; }
            .action-box { background: rgba(215, 180, 106, 0.1); padding: 20px; border-radius: 8px; border-left: 4px solid #d7b46a; margin: 20px 0; }
            .footer { background: #000000; color: #d7b46a; padding: 20px; text-align: center; font-size: 12px; }
            .button { background: #d7b46a; color: #000000; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block; margin: 5px; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>CALLBACK REQUEST</h1>
                <p>Mohamad Kodmani Investment Team</p>
            </div>
            
            <div class="content">
                <div class="badge">📞 Immediate Callback Required</div>
                
                <div class="info-grid">
                    <div class="info-item">
                        <strong>Name:</strong>
                        <span>${data.name}</span>
                    </div>
                    <div class="info-item">
                        <strong>Phone:</strong>
                        <span>+971 ${data.phone}</span>
                    </div>
                </div>
                
                <div class="action-box">
                    <strong>⏰ 15-Minute Response Guarantee</strong><br>
                    Client is expecting a callback within 15 minutes.
                </div>
                
                <div style="text-align: center; margin-top: 25px;">
                    <a href="tel:+971${data.phone}" class="button">
                        📞 Call +971 ${data.phone}
                    </a>
                </div>
            </div>
            
            <div class="footer">
                <p>© 2024 Mohamad Kodmani Real Estate Brokerage</p>
            </div>
        </div>
    </body>
    </html>
  `;
}

function generateProjectInquiryEmailHTML(data) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <style>
            body { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; }
            .container { border: 2px solid #d7b46a; border-radius: 16px; overflow: hidden; }
            .header { background: #000000; color: #d7b46a; padding: 30px; text-align: center; }
            .content { padding: 30px; }
            .badge { background: #d7b46a; color: #000000; padding: 10px 20px; border-radius: 20px; display: inline-block; font-weight: bold; margin-bottom: 20px; }
            .info-grid { display: grid; gap: 10px; margin: 20px 0; }
            .info-item { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee; }
            .action-box { background: rgba(215, 180, 106, 0.1); padding: 20px; border-radius: 8px; border-left: 4px solid #d7b46a; margin: 20px 0; }
            .footer { background: #000000; color: #d7b46a; padding: 20px; text-align: center; font-size: 12px; }
            .button { background: #d7b46a; color: #000000; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block; margin: 5px; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>PROJECT INQUIRY</h1>
                <p>Luxury Property Consultation</p>
            </div>
            
            <div class="content">
                <div class="badge">🏢 High-Value Lead</div>
                
                <div class="info-grid">
                    <div class="info-item">
                        <strong>Name:</strong>
                        <span>${data.firstName} ${data.lastName}</span>
                    </div>
                    <div class="info-item">
                        <strong>Phone:</strong>
                        <span>+971 ${data.phone}</span>
                    </div>
                    <div class="info-item">
                        <strong>Email:</strong>
                        <span>${data.email}</span>
                    </div>
                    <div class="info-item">
                        <strong>Project:</strong>
                        <span>${data.project}</span>
                    </div>
                    <div class="info-item">
                        <strong>Unit Type:</strong>
                        <span>${data.unitType || "Not specified"}</span>
                    </div>
                    <div class="info-item">
                        <strong>Contact Method:</strong>
                        <span>${getContactMethodLabel(
                          data.contactMethod
                        )}</span>
                    </div>
                </div>
                
                <div class="action-box">
                    <strong>Preferred Contact:</strong> ${getContactMethodLabel(
                      data.contactMethod
                    )}<br>
                    <strong>Response Time:</strong> Within 24 hours
                </div>
                
                <div style="text-align: center; margin-top: 25px;">
                    ${
                      data.contactMethod === "whatsapp"
                        ? `<a href="https://wa.me/${
                            process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
                          }?text=Hi%20${encodeURIComponent(
                            data.firstName
                          )}%2C%20I%27m%20following%20up%20on%20your%20inquiry%20about%20${encodeURIComponent(
                            data.project
                          )}." 
                         class="button" style="background: #25D366; color: white;">
                          📱 WhatsApp Now
                      </a>`
                        : ""
                    }
                      
                    ${
                      data.contactMethod === "phone"
                        ? `<a href="tel:+971${data.phone}" class="button">
                          📞 Call +971 ${data.phone}
                      </a>`
                        : ""
                    }
                      
                    ${
                      data.contactMethod === "email"
                        ? `<a href="mailto:${data.email}" class="button">
                          ✉️ Email ${data.email}
                      </a>`
                        : ""
                    }
                </div>
            </div>
            
            <div class="footer">
                <p>© 2024 Mohamad Kodmani Real Estate Brokerage</p>
            </div>
        </div>
    </body>
    </html>
  `;
}

function generateGenericEmailHTML(data) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <style>
            body { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; }
            .container { border: 2px solid #d7b46a; border-radius: 16px; overflow: hidden; }
            .header { background: #000000; color: #d7b46a; padding: 30px; text-align: center; }
            .content { padding: 30px; }
            .footer { background: #000000; color: #d7b46a; padding: 20px; text-align: center; font-size: 12px; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>NEW WEBSITE INQUIRY</h1>
            </div>
            
            <div class="content">
                <pre style="background: #f8f9fa; padding: 20px; border-radius: 8px; font-family: Arial, sans-serif; white-space: pre-wrap;">
${JSON.stringify(data, null, 2)}
                </pre>
            </div>
            
            <div class="footer">
                <p>© 2024 Mohamad Kodmani Real Estate Brokerage</p>
            </div>
        </div>
    </body>
    </html>
  `;
}

// Helper functions
function getInterestLabel(interest) {
  const labels = {
    "off-plan": "🏗️ Off-Plan Properties",
    ready: "🏢 Ready Properties",
    portfolio: "📊 Portfolio Building",
    consultation: "🎯 Expert Consultation",
  };
  return labels[interest] || interest;
}

function getContactMethodLabel(method) {
  const labels = {
    phone: "📞 Phone Call",
    email: "✉️ Email",
    whatsapp: "💬 WhatsApp",
  };
  return labels[method] || method;
}
