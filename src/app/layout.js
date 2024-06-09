import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/sections/header";


export const metadata = {
  title: "小红书-您的生活指南",
  description: "小红书-您的生活指南",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>
        <Header />
        {children}
      </body>
    </html>
  );
}
