import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/sections/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTopButton";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

// Configure Inter for your primary sans-serif font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Configure Roboto Mono for your terminal/code font
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono", // This links to your Tailwind 'font-mono'
});

export const metadata: Metadata = {
  title: "Abdus Satter | Frontend Engineering Portal",
  description: "Personal portfolio and engineering portal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="antialiased">
        <SmoothScroll>
          <main id="root">{children}</main>
          <ScrollToTop />
          <Footer />
          <GoogleAnalytics gaId="G-EKGRCZEMYZ" />
        </SmoothScroll>
      </body>
    </html>
  );
}
