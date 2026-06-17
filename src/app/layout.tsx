import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { siteUrl } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MScom.one | A/L Commerce and Business Studies Classes",
    template: "%s | MScom.one"
  },
  description: "Sri Lankan A/L Commerce and Business Studies tuition platform with online and physical classes.",
  keywords: ["A/L Commerce", "Business Studies", "Sri Lanka tuition", "MScom.one", "online classes"],
  icons: {
    icon: "/favicon.png"
  },
  openGraph: {
    title: "MScom.one",
    description: "A/L Commerce and Business Studies classes for Sri Lankan students.",
    url: siteUrl,
    siteName: "MScom.one",
    locale: "en_LK",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "MScom.one",
    description: "A/L Commerce and Business Studies tuition in Sri Lanka."
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable} overflow-x-hidden`}>
      <body className="font-sans antialiased overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
