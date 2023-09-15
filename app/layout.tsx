import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTopButton from "./BacktoTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sunshine",
  description: "The Councelling Cell of IIT Hyderabad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <BackToTopButton />
      </body>
    </html>
  );
}
