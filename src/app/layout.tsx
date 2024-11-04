import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Head from "next/head";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  weight: ["300", "400", "600", "700"], // Multiple font weights
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Windfall Hospitals | Comprehensive Healthcare in Hyderabad",
  description:
    "Windfall International Super Speciality Hospitals (Windfall) in Madhapur, Hyderabad offers world-class medical treatment with advanced facilities and compassionate care, specializing in mother & child care, cardiology, orthopedics, and emergency services.",
  keywords: [
    "Windfall Hospitals",
    "Hyderabad healthcare",
    "cardiology",
    "orthopedics",
    "emergency care",
    "mother & child care",
    "Madhapur hospitals",
  ].join(", "),
  openGraph: {
    title: "Windfall Hospitals - Advanced Medical Care in Hyderabad",
    description:
      "Discover Windfall Hospitals, offering specialized care in Hyderabad. Our hospital provides comprehensive healthcare services including cardiology, orthopedics, and emergency care.",
    url: "https://yourwebsite.com",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Windfall Hospitals | Advanced Healthcare in Hyderabad",
    description:
      "Windfall Hospitals in Madhapur offers specialized medical care. From cardiology to emergency services, experience top-notch healthcare in Hyderabad.",
    site: "@Windfallhospital",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Structured Data (Schema Markup) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hospital",
              name: "Windfall Hospitals",
              description:
                "Windfall International Super Speciality Hospitals (Windfall) in Madhapur, Hyderabad.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Your Hospital Address Here",
                addressLocality: "Madhapur",
                addressRegion: "Hyderabad",
                postalCode: "500081",
                addressCountry: "IN",
              },
              telephone: "+91-XXXXXXXXXX",
              url: "https://yourwebsite.com",
            }),
          }}
        />
      </Head>
      <body className={`${openSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
