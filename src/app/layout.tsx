import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "shota",
  description: "shota's portfolio.",
  icons: [{ rel: "icon", url: "/mountain-sun-solid.svg", type: "image/svg+xml" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" data-theme="light" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <head>
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" rel="stylesheet" />
          <link href="https://cdn.jsdelivr.net/npm/daisyui@4.12.19/dist/full.min.css" rel="stylesheet" type="text/css" />
      </head>
      <body>
        <div className="h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center bg-[url('https://picsum.photos/1920/1080?random')]">
          {children}
        </div>
      </body>
    </html>
  );
}
