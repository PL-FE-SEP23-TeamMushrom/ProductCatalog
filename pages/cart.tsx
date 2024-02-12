import { Inter } from "next/font/google";
import localFont from 'next/font/local';
import "@/app/globals.css";
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

export default function CartPage() {
    return (
      <>
        <Navbar />
        <Cart />
        <Footer />
        </>
    );
}