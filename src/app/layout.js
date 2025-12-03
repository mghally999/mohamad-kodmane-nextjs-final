// src/app/layout.jsx
"use client"; // ADD THIS - makes it a client component

import "./globals.css";
import Footer from "@/components/Footer";
import TopHeader from "@/components/TopHeader";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FooterFinal from "@/components/FooterFinal";
import { menuData } from "@/data/menuData";
import LanguageProvider from "@/components/LanguageProvider";
import Script from "next/script";
import { usePathname } from "next/navigation"; // ADD THIS

// Move metadata to a separate file or use generateMetadata
// Since we're now a client component, metadata needs to be handled differently

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Now this works

  return (
    <html lang="en">
      <head>
        {/* ✅ Title and meta tags as JSX elements */}
        <title>
          Mohamad Kodmane - Dubai Real Estate Expert | Luxury Properties &
          Investment Advisor
        </title>
        <meta
          name="description"
          content="Mohamad Kodmane - Premier real estate advisor and investment expert in Dubai. Specializing in luxury apartments, villas, penthouses, and commercial properties. Get expert market insights and personalized investment strategies."
        />
        <meta
          name="keywords"
          content="Dubai real estate, luxury properties, investment advisor, Mohamad Kodmane, apartments Dubai, villas Dubai, penthouses, commercial real estate, property investment"
        />
        <meta name="author" content="Mohamad Kodmane" />
        <meta name="creator" content="Mohamad Kodmane" />
        <meta name="publisher" content="Mohamad Kodmane Real Estate" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Mohamad Kodmane - Dubai Real Estate Expert"
        />
        <meta
          property="og:description"
          content="Premier real estate advisor and investment expert in Dubai. Luxury properties and investment opportunities."
        />
        <meta property="og:url" content="https://mohamadkodmane.com" />
        <meta property="og:site_name" content="Mohamad Kodmane Real Estate" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Mohamad Kodmane - Dubai Real Estate Expert"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mohamad Kodmane - Dubai Real Estate Expert"
        />
        <meta
          name="twitter:description"
          content="Premier real estate advisor and investment expert in Dubai"
        />
        <meta name="twitter:image" content="/og-image.jpg" />

        {/* Robots */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        {/* Canonical */}
        <link rel="canonical" href="https://mohamadkodmane.com" />

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

          {/* Hide footer on ALL developer pages (including slugs) */}
          {!pathname?.startsWith("/developers") && (
            <FooterFinal menuData={menuData} />
          )}

          {/* Hide FloatingWhatsApp too if you want */}
        </LanguageProvider>
      </body>
    </html>
  );
}
