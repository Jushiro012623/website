import type { Metadata } from "next";
import '@/styles/global.css'
import { inter } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Ivan Macabontoc",
  description: "Ivan Macabontoc Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`_app ${inter.className} overflow-x-hidden bg-gradient-to-r from-black to-black-600`}>
        {children}
      </body>
    </html>
  );
}
