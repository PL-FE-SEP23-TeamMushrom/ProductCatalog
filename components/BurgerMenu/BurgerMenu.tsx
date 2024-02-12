import Image from "next/image";
import Heart from "@/public/icons/Heart.svg";
import ShoppingBag from "@/public/icons/ShoppingBag.svg";

export default function BurgerMenu() {
    return (
    <div className="menu">
        <ul className="flex flex-col space-y-4 items-center mt-6 mb-69 text-secondary-color font-extrabold">
            <li>
                <a href="#" className="">HOME</a>
            </li>
            <li>
                <a href="#" className="">PHONES</a>
            </li>
            <li>
                <a href="#" className="">TABLETS</a>
            </li>
            <li>
                <a href="#" className="">ACCESSORIES</a>
            </li>
        </ul>
        <div className="flex h-16 border-t border-t-1 border-t-elements-color">
            <div className="w-full flex items-center justify-center border-r border-r-1 border-r-elements-color">
            <Image src={Heart} alt="close" />
            </div>
            <div className="w-full flex items-center justify-center">
            <Image src={ShoppingBag} alt="cart" />
            </div>

        </div>
    </div>
    );
}