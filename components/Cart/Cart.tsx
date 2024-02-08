import Image from "next/image";
import ArrowLeft from "@/public/icons/ArrowLeft.svg";
import Close from "@/public/icons/Close.svg";
import Minus from "@/public/icons/Minus.svg";
import Plus from "@/public/icons/Plus.svg";
import MockImage from "@/public/apple-iphone-xs/gold/01.webp";

export default function Cart() {
    return (
        <div>
            <div className="back">
                <button className="flex flex-row">
                    <Image src={ArrowLeft} alt="arrow left" width={16}/>
                    <p> Back</p>
                </button>
            </div>
            <h1>Cart</h1>
            <div className="flex flex-row">
                <div className="product flex flex-row flex justify-center items-center border border-1">
                    <div className="close flex justify-center items-center">
                        <button className="closeButton justify-center items-center">
                            <Image src={Close} alt="close" width={16}/>
                        </button>
                    </div>
                    <div className="productImage w-cartImage h-cartImage relative">
                        <Image src={MockImage} alt="iphone" layout="fill" objectFit="contain" />
                    </div>
                    <p>Apple iPhone 14 Pro 128GB Silver (MQ023)</p>
                    <div className="counter flex flex-row">
                        <button className="border border-1 w-8 h-8 flex justify-center items-center border-icon-color">
                            <Image src={Minus} alt="minus" width={16}/>
                        </button>
                        <p>1</p>
                        <button className="border border-1 w-8 h-8 flex justify-center items-center border-icon-color">
                            <Image src={Plus} alt="plus" width={16}/>
                        </button>
                    </div>
                    <p className="price">$999</p>
                </div>
                <div className="summary flex flex-col flex justify-center items-center border border-1">
                    <p className="total">$2657</p>
                    <p className="totalItems">Total for 3 items</p>
                    <button className="checkoutButton bg-black text-white">Checkout</button>
                </div>
            </div>
        </div>
    );
}