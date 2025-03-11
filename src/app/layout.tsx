import type { Metadata } from "next";
import { dmSans } from "@/assets/fonts/font";
import "./globals.css";
import ReduxProvider from "@/store/provider";
import { Text } from "@/components/common";

export const metadata: Metadata = {
  title: "Toneop Eats CRM",
  description: "Toneop Eats CRM",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className={`antialiased`}>
        <ReduxProvider>
          {children}
          <Text variant="p">main</Text>
        </ReduxProvider>
      </body>
    </html>
  );
};

export default RootLayout;
