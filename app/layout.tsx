import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import Footer from "@/components/Footer/Footer";
import BurgerMenu from "@/components/BurgerMenu/BurgerMenu"; //dla testu tylko
import Navbar from "@/components/navigation/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <BurgerMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
