import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Ubuntu } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // adjust weights you need
  variable: "--font-ubuntu",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pagsasaka",
  description: "Pagsasaka",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ubuntu.variable}>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        
      >
        {children}
      </body>
    </html>
  );
}
