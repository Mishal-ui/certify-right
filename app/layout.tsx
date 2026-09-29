import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://certifyright.com.au"),
  title: {
    default: "Certify Right | NSW Building Certification",
    template: "%s | Certify Right",
  },
  description:
    "NSW building certification services including CDCs, construction certificates, occupation certificates, principal certification, inspections and compliance. Based in Merrylands, serving all of NSW.",
  keywords: [
    "NSW building certification",
    "complying development certificate",
    "CDC NSW",
    "construction certificate",
    "occupation certificate",
    "principal certifier NSW",
    "building inspections NSW",
    "BCA compliance",
    "Merrylands certifier",
    "Western Sydney certifier",
  ],
  authors: [{ name: "Certify Right Pty Ltd" }],
  creator: "Certify Right Pty Ltd",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://certifyright.com.au",
    siteName: "Certify Right",
    title: "Certify Right | NSW Building Certification",
    description:
      "Fast, clear, responsive NSW building certification. CDCs, construction certificates, occupation certificates and more. Serving all of NSW.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Certify Right NSW Building Certification",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Certify Right | NSW Building Certification",
    description:
      "Fast, clear, responsive NSW building certification. CDCs, construction certificates, occupation certificates and more.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
