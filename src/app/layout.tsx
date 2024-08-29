'use client'
import ChatProvider from "@/context/contextProvider";
// import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const inter = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"  ] });

// export const metadata: Metadata = {
//   title: "StudentStay",
//   description: "Connect students for comfortable housing",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ChatProvider>
      <body className={inter.className}>{children}</body>
      </ChatProvider> 
    </html>
  );
}
