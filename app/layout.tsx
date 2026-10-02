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
    default: "Certify Right | Professional Bookkeeping & Accounting",
    template: "%s | Certify Right",
  },
  description:
    "Professional bookkeeping, accounting and financial support for your business. 20+ years experience. Flexible hourly and monthly plans. Oracle, SAP, QuickBooks, Xero and more.",
  keywords: [
    "professional bookkeeping",
    "accounting services",
    "financial reporting",
    "management accounts",
    "bookkeeper",
    "accounting support",
    "QuickBooks bookkeeping",
    "Xero bookkeeping",
    "small business accounting",
    "cost control",
  ],
  authors: [{ name: "Certify Right" }],
  creator: "Certify Right",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://certifyright.com.au",
    siteName: "Certify Right",
    title: "Certify Right | Professional Bookkeeping & Accounting",
    description:
      "Professional bookkeeping, accounting and financial support. 20+ years experience. Flexible hourly and monthly plans.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Certify Right Professional Bookkeeping & Accounting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Certify Right | Professional Bookkeeping & Accounting",
    description:
      "Professional bookkeeping, accounting and financial support. 20+ years experience. Flexible plans.",
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
