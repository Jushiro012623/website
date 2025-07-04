import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/styles/global.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

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
      <body className={`${inter.className} overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
