import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "@heroui/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";

import "./globals.css";

import { Header } from "@/_components/header";

import { ConvexClientProvider } from "./ConvexClientProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chatmarkmap",
  description: "Render ai chat response into visualizable mindmap.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-PLRR7F25NY" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ConvexClientProvider>
          <div
            className="flex h-[100vh] w-full flex-col items-stretch
              overflow-hidden"
          >
            <div className="flex items-center bg-muted p-2">
              <Header />
              <SignedOut>
                <SignInButton>
                  <Button variant="bordered">Sign In</Button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
            {children}
          </div>
        </ConvexClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
