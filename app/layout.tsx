import type { Metadata } from "next";
import localFont from "next/font/local";
import { inter } from "./ui/fonts";
import { lusitana } from "./ui/fonts";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "NextJS Dashboard website",
  description: "NextJS Dashboard website - made by Hassan RJ",
  metadataBase: new URL('https://nextjs-dashboard-hassanrj.vercel.app'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${lusitana.className} ${inter.className} ${geistMono.variable} antialiased`}
      >
        
        {children}
      </body>
    </html>
  );
}
