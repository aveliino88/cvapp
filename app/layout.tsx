import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "@/styles/global.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/ui/Navbar";
import {
  ClerkProvider,
} from "@clerk/nextjs";
import {dark} from "@clerk/themes";
import Footer from "@/components/ui/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "a3v.pro - My app built with Next.js",
  description: "This is my app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
        <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
        <ClerkProvider
              appearance={{
                baseTheme: dark
              }}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        <Navbar />
        {children}
        <Footer />
        </ThemeProvider>
        </ClerkProvider>
        </body>
    </html>
  );
}