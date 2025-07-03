import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abu Amar - Software Developer & Digital Creator",
  description:
    "Personal portfolio of Abu Amar - Software Developer and Digital Creator passionate about creating innovative digital solutions.",
  keywords: [
    "Abu Amar",
    "Software Developer",
    "Portfolio",
    "Web Developer",
    "TypeScript",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Abu Amar" }],
  creator: "Abu Amar",
  openGraph: {
    title: "Abu Amar - Software Developer & Digital Creator",
    description:
      "Personal portfolio of Abu Amar - Software Developer and Digital Creator passionate about creating innovative digital solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abu Amar - Software Developer & Digital Creator",
    description:
      "Personal portfolio of Abu Amar - Software Developer and Digital Creator passionate about creating innovative digital solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning className=''>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider defaultTheme='light' storageKey='abuamar-theme'>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
