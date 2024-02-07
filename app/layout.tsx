import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// components
import Card from "./components/ProductCard/ProductCard";
import Footer from "./components/Footer/Footer";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu"; //dla testu tylko

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BurgerMenu />
        <Card />
        <Footer />
        {children}
      </body>
    </html>
  );
}
