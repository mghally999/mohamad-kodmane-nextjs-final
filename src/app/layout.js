import "./globals.css";
import Footer from "@/components/Footer";
import TopHeader from "@/components/TopHeader";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FooterFinal from "@/components/FooterFinal";
import { menuData } from "@/data/menuData";
import LanguageProvider from "@/components/LanguageProvider";
import Script from "next/script";

export const metadata = {
  title:
    "Mohamad Kodmane - Dubai Real Estate Expert | Luxury Properties & Investment Advisor",
  description:
    "Mohamad Kodmane - Premier real estate advisor and investment expert in Dubai. Specializing in luxury apartments, villas, penthouses, and commercial properties. Get expert market insights and personalized investment strategies.",
  keywords:
    "Dubai real estate, luxury properties, investment advisor, Mohamad Kodmane, apartments Dubai, villas Dubai, penthouses, commercial real estate, property investment",
  authors: [{ name: "Mohamad Kodmane" }],
  creator: "Mohamad Kodmane",
  publisher: "Mohamad Kodmane Real Estate",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mohamadkodmane.com"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      ar: "/ar",
    },
  },
  openGraph: {
    title: "Mohamad Kodmane - Dubai Real Estate Expert",
    description:
      "Premier real estate advisor and investment expert in Dubai. Luxury properties and investment opportunities.",
    url: "https://mohamadkodmane.com",
    siteName: "Mohamad Kodmane Real Estate",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mohamad Kodmane - Dubai Real Estate Expert",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamad Kodmane - Dubai Real Estate Expert",
    description: "Premier real estate advisor and investment expert in Dubai",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Meta Pixel */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1142170128072969');
              fbq('track', 'PageView');
            `,
          }}
        />

        {/* ✅ Correct favicon from public/logo.jpg */}
        <link rel="icon" href="/logo.jpg" type="image/jpeg" />
        <link rel="shortcut icon" href="/logo.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/logo.jpg" />

        {/* Performance */}
        <link
          rel="preconnect"
          href="https://luxury-real-estate-media.b-cdn.net"
          crossOrigin=""
        />
        <link
          rel="dns-prefetch"
          href="https://luxury-real-estate-media.b-cdn.net"
        />
      </head>
      <body>
        {/* No-script fallback for Pixel */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1142170128072969&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <LanguageProvider>
          <TopHeader />
          {children}
          <FooterFinal menuData={menuData} />
          <Footer />
          <FloatingWhatsApp />
        </LanguageProvider>
      </body>
    </html>
  );
}
