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
  title: "Chai and Buy",
  description:
    "A mini e-commerce store built to sell different I hate copy posters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-amber-100 p-4">
          <div className="max-w-7xl mx-auto ">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">Chai and Buy 🍵</h1>
            </div>
          </div>
        </header>
        <main className="max-w-7xl mx-auto py-10 pb-[calc(10vh+10rem)]">
          {children}
        </main>
      </body>
    </html>
  );
}
