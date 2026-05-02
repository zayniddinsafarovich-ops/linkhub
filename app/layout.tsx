
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/components/features/AuthProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal Link Hub",
    description: "Your personalized link hub and portfolio",
    };

    export default function RootLayout({
      children,
      }: Readonly<{
        children: React.ReactNode;
        }>) {
              return (
                    <html lang="en">
                              <body className={inter.className}>
                                        <AuthProvider>
                                                      {children}
                                                              </AuthProvider>
                                                                    </body>
                                                                        </html>
              );
              }

    