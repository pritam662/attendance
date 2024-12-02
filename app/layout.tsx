import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { ReduxProvider } from "@/redux/provider";

import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AutoWhat Attendance",
  description: "AutoWhat Attendance Management Dashboard and Chatbot.", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-bg_primary`}>
        <ReduxProvider>
          {children}
          <Toaster />
        </ReduxProvider>
      </body>
    </html>
  );
}
