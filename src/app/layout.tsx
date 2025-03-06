import type { Metadata } from "next";
import { dmSans } from "@/assets/fonts/font";
import "./globals.css";

export const metadata: Metadata = {
  title: "Toneop Eats CRM",
  description: "Toneop Eats CRM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className={`antialiased`}>
        {children}
        <p>maiin</p>
      </body>
    </html>
  );
}
