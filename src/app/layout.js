import "./globals.css";
import Footer from "../components/Footer";
import TopHeader from "@/components/TopHeader";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FooterFinal from "@/components/FooterFinal";
import { menuData } from "@/data/menuData"; // Import your menuData

export const metadata = {
  title: "Dubai Real Estate Experts | Market Insights & Investment Strategies",
  description:
    "Expert analysis and proven investment strategies for Dubai real estate. Achieve 15-45% returns with our data-driven market insights and premium property opportunities.",
  keywords:
    "Dubai real estate, property investment, off-plan properties, rental yields, luxury properties, market analysis",
  authors: [{ name: "Mohamad Kodmane" }],
  openGraph: {
    title:
      "Dubai Real Estate Experts | Market Insights & Investment Strategies",
    description:
      "Expert analysis and proven investment strategies for Dubai real estate.",
    type: "website",
    locale: "en_AE",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/logo.jpg" />
        {/* Preconnect to Bunny CDN for faster image TTFB */}
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
        <TopHeader />
        {children}
        <FooterFinal menuData={menuData} />
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
