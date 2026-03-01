import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
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
  title: "ProMakler Digital | Digitale Rendite-Immobilien für Makler",
  description:
    "Wir entwickeln Ihre digitale Rendite-Immobilie. Professionelle Websites für Immobilienmakler mit onOffice & FlowFact Integration.",
  keywords: [
    "Immobilienmakler Website",
    "onOffice Integration",
    "FlowFact Website",
    "Makler Homepage",
    "Immobilien Webdesign",
  ],
  authors: [{ name: "ProMakler Digital" }],
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
    url: "https://makler-websites.immo/",
    siteName: "ProMakler Digital",
    title: "ProMakler Digital | Digitale Rendite-Immobilien für Makler",
    description:
      "Wir entwickeln Ihre digitale Rendite-Immobilie. Professionelle Websites mit onOffice & FlowFact Integration.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProMakler Digital | Digitale Rendite-Immobilien für Makler",
    description:
      "Wir entwickeln Ihre digitale Rendite-Immobilie. Professionelle Websites mit onOffice & FlowFact Integration.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <link rel="canonical" href="https://makler-websites.immo/" />
      </head>
      <body>
        {children}
        {/* <SocialProofTicker /> */}
        <ConsentBanner />
      </body>
    </html>
  );
}
