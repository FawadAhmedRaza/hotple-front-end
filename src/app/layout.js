import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/sections/header";

import dynamic from "next/dynamic";
import { AuthProvider } from "@/context/auth/AuthContext";



export const metadata = {
  title: "小红书-您的生活指南",
  description: "小红书-您的生活指南",
};


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className="overflow-x-hidden dark:bg-custom_black bg-dark_primary_label">
        <AuthProvider>
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
