import { Inter } from "next/font/google";
import localFont from 'next/font/local';
import "@/app/globals.css";
import Footer from "@/components/Footer/Footer";
import BurgerMenu from "@/components/BurgerMenu/BurgerMenu";
import {Cart} from "@/components/Cart/Cart";
import Navbar from "@/components/Navbar/Navbar";
import Pagination from "@/components/Pagination/Pagination";
import getProductById from "@/utils/getProductById";
import getAll from "@/utils/getAll";

export default async function CartPage() {
  const data =await getAll();

    return (
      <>
        <Navbar />
        <Cart productsFromServer={data}/>
        <Footer />
        </>
    );
}