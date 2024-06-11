import "./globals.css";

import dynamic from "next/dynamic";
import { AuthProvider } from "@/context/auth/AuthContext";



import { ThemeProvider } from "@/providers/theme-provider";
import Header from "@/sections/header";
import SideBar from "@/sections/side-bar";
import BottomBar from "@/sections/bottom-bar";

export const metadata = {
  title: "小红书-您的生活指南",
  description: "小红书-您的生活指南",
};


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className="overflow-x-hidden dark:bg-custom_black bg-dark_primary_label">
        <AuthProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
        >
          <Header /> 
          <SideBar />
          <div className="lg:!pl-64  ">
            {children}
          </div>
          <BottomBar />
        </ThemeProvider>
          </AuthProvider>
      </body>
    </html>
  );
}
