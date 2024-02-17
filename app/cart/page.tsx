
import "@/app/globals.css";
import Cart from "@/components/Cart/Cart";
import getAll from "@/utils/getAll";

export default async function CartPage() {
  const data =await getAll();

    return (
      <>
        <Cart />
      </>
    );
}