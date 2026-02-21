import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "../globals.css";
import ConsentBanner from "@/components/ConsentBanner";
import SocialProofTicker from "@/components/SocialProofTicker";

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://makler-websites.immo"),
  title: "ProMakler Agrar | Websites für Agrar-, Forst- und Landgutmakler",
  description:
    "Spezialisierte Websites für Immobilienmakler im Agrarbereich. Ackerland, Forstimmobilien, Landgüter – digital optimal vermarktet mit onOffice & Agrar-CRM Integration.",
  keywords: [
    "Agrarmakler Website",
    "Forstimmobilien Makler",
    "Ackerland kaufen",
    "Landgut Makler",
    "Landwirtschaft Immobilien",
    "Hofstelle verkaufen",
    "Erbpacht Makler",
    "Bodenmarkt digital",
  ],
  authors: [{ name: "ProMakler Agrar" }],
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
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://makler-websites.immo/agrar",
    siteName: "ProMakler Agrar",
    title: "ProMakler Agrar | Websites für Agrar-, Forst- und Landgutmakler",
    description:
      "Spezialisierte Websites für Immobilienmakler im Agrarbereich. Ackerland, Forstimmobilien, Landgüter – digital optimal vermarktet.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProMakler Agrar | Websites für Agrar-, Forst- und Landgutmakler",
    description:
      "Spezialisierte Websites für Immobilienmakler im Agrarbereich. Ackerland, Forstimmobilien, Landgüter – digital optimal vermarktet.",
  },
};

export default function AgrарLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <link rel="canonical" href="https://makler-websites.immo/agrar" />
        <style>{`
          :root {
            --navy: #1a3028;
            --navy-dark: #0f1e18;
            --anthrazit: #2d3632;
            --anthrazit-light: #3d4640;
            --blueprint: #1e3d2a;
          }
          .nav.scrolled {
            background: rgba(15, 30, 24, 0.98);
          }
          .nav {
            background: linear-gradient(to bottom, rgba(15, 30, 24, 0.95) 0%, rgba(15, 30, 24, 0) 100%);
          }
        `}</style>
      </head>
      <body>
        {children}
        <SocialProofTicker />
        <ConsentBanner />
      </body>
    </html>
  );
}
