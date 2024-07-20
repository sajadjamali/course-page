import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

const myFont = localFont({
  src: [
    {
      path: '../../public/assets/fonts/Vazir.woff'
    },
    {
      path: '../../public/assets/fonts/Vazir.ttf'
    }
  ]
})

export const metadata: Metadata = {
  title: "course page",
  description: "course page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${myFont.className} bg-slate-100 px-20`}>{children}</body>
    </html>
  );
}
