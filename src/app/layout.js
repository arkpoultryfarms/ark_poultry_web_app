import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

// Font setup (optional)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.arkpoultry.com"), // Your production URL
  title: {
    default: "ArkPoultry | Sustainable Poultry Farming",
    template: "%s | ArkPoultry",
  },
  description:
    "ArkPoultry champions sustainable poultry farming practices in Nigeria, providing high-quality poultry products and expert services.",
  keywords: [
    "ArkPoultry",
    "poultry farming",
    "sustainable agriculture",
    "organic poultry",
    "Oyo State poultry",
    "Nigeria farming",
  ],
  authors: [{ name: "ArkPoultry Team", url: "https://www.arkpoultry.com" }],
  creator: "ArkPoultry",
  publisher: "ArkPoultry Ltd",
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  alternates: {
    canonical: "https://www.arkpoultry.com",
  },
  openGraph: {
    type: "website",
    url: "https://www.arkpoultry.com",
    title: "ArkPoultry | Sustainable Poultry Farming",
    description:
      "Discover ArkPoultry’s commitment to sustainable poultry production in Nigeria.",
    siteName: "ArkPoultry",
    images: [
      {
        url: "https://www.arkpoultry.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ArkPoultry sustainable farming",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@arkpoultry",
    creator: "@arkpoultry",
    title: "ArkPoultry | Sustainable Poultry Farming",
    description:
      "ArkPoultry promotes eco-friendly poultry practices and quality farming solutions.",
    images: ["https://www.arkpoultry.com/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ArkPoultry",
    url: "https://www.arkpoultry.com",
    logo: "https://www.arkpoultry.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+2349151151788",
      contactType: "Customer Service",
      areaServed: "NG",
      availableLanguage: "English",
    },
    sameAs: [
      "https://facebook.com/arkpoultry",
      "https://instagram.com/arkpoultry",
      "https://twitter.com/arkpoultry",
    ],
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Preconnect for fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* Structured Data (SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
