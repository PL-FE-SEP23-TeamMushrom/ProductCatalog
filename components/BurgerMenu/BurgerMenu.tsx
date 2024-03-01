import Image from "next/image";
import Heart from "icons/Heart.svg";
import ShoppingBag from "icons/ShoppingBag.svg";
import Link from "next/link";

export default function BurgerMenu() {

  return (
    <div className="menu">
      <ul className="flex flex-col space-y-4 items-center mt-6 mb-69 text-secondary-color font-extrabold">
        <li>
          <Link href={"/"}>
            HOME
          </Link>
        </li>
        <li>
          <Link href={"/phones?page=1"}>
            PHONES
          </Link>
        </li>
        <li>
          <Link href={"/tablets?page=1"}>
            TABLETS
          </Link>
        </li>
        <li>
          <Link href={"/accessories?page=1"}>
            ACCESSORIES
          </Link>
        </li>
      </ul>
      <div className="flex h-16 border-t border-t-1 border-t-elements-color">
        <div className="w-full flex items-center justify-center border-r border-r-1 border-r-elements-color">
          <Link href={"/favourites"}>
            <Image src={Heart} alt="close" />
          </Link>
        </div>
        <div className="w-full flex items-center justify-center">
          <Link href={"/cart"}>
            <Image src={ShoppingBag} alt="cart" />
          </Link>
        </div>
      </div>
    </div>
  );
}
