import type { Metadata } from "next";
import "./globals.css";

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
                            <body className="">
                                      {children}
                                            </body>    </html>  );
                                            }
                                            
              )
          }
          }
      })
}