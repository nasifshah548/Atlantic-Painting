import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Atlantic Painting | Professional Painters in Nova Scotia",
  description:
    "Atlantic Painting provides expert residential and commercial painting services across Nova Scotia. Interior and exterior painting with clean, reliable, and high-quality results.",
  keywords: [
    "Painter in Nova Scotia",
    "Painter in Halifax",
    "Interior painting Nova Scotia",
    "Exterior painting Halifax",
    "Commercial painting Nova Scotia",
  ],
  openGraph: {
    title: "Atlantic Painting | Professional Painters in Nova Scotia",
    description:
      "Trusted residential and commercial painting services in Nova Scotia. Get your free quote today.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        {/* Structured Data Schema */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PaintingContractor",
            name: "Atlantic Painting",
            image: "https://yourdomain.com/logo.png",
            url: "https://yourdomain.com",
            telephone: "+1-902-555-1234",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Halifax",
              addressRegion: "NS",
              addressCountry: "CA",
            },
            areaServed: {
              "@type": "State",
              name: "Nova Scotia",
            },
            description:
              "Professional residential and commercial painting services in Nova Scotia.",
          })}
        </Script>

        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
