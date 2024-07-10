import Feedback from "@/components/feedback/feedback";
import { Providers } from "@/store/providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { relative } from "path";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web3 Developer Jobs",
  description: "Find your next web3 developer job ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
    <html lang="en">
      <body className={inter.className}>
        {children}
        <div id='feedbackPortal' />
        <div id='subscriptionPortal'/>
      </body>
      </html>
    </Providers>
  );
}
