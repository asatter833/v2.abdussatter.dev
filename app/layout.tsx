import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

// Configure Inter for your primary sans-serif font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans", // This maps to our Tailwind --font-sans
  display: "swap",
});

// Configure Roboto Mono for your terminal/code font
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono", // This maps to our Tailwind --font-mono
  display: "swap",
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
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body className="antialiased">
        <main id="root">{children}</main>
      </body>
    </html>
  );
}
