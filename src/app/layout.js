import "./globals.css";
import Footer from "@/components/Footer";
import TopHeader from "@/components/TopHeader";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FooterFinal from "@/components/FooterFinal";
import { menuData } from "@/data/menuData";
import LanguageProvider from "@/components/LanguageProvider";

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
        <link rel="icon" href="/logo.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/logo.jpg" />
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
