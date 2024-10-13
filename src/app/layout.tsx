import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'POS System',
  description: 'Simple POS system for restaurant',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body className={inter.className}>
       <div className="h-screen flex">
          <Sidebar />
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}

import Sidebar from "./layouts/Sidebar";