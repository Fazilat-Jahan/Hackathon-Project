import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";



export const metadata: Metadata = {
  title: "SHOP.CO",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
