import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import Footer from "@/components/Footer/Footer";
import BurgerMenu from "@/components/BurgerMenu/BurgerMenu";
import Cart from "@/components/Cart/Cart";
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
        <Cart />
        <BurgerMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
