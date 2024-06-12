import "./globals.css";

import dynamic from "next/dynamic";
import { AuthProvider } from "@/context/auth/AuthContext";



import { ThemeProvider } from "@/providers/theme-provider";
import MainLayout from "@/layouts/main-layout";

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
            <MainLayout>
              {children}
            </MainLayout>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
