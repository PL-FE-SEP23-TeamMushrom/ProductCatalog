import { Inter } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import BurgerMenu from "@/components/BurgerMenu/BurgerMenu";
import Cart from "@/components/Cart/Cart";
import Navbar from "@/components/navigation/Navbar";
import Pagination from "@/components/Pagination/Pagination";

const inter = Inter({ subsets: ["latin"] });
const mont = localFont({ src: [
    {
      path: '../public/fonts/Mont.otf',
      weight: '600',
    },
    {
      path: '../public/fonts/Mont.otf',
      weight: '800',
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <Navbar />
        <Cart />
        <BurgerMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
