import Image from "next/image";
import Union from "@/public/icons/Union.svg";
import Minus from "@/public/icons/Minus.svg";
import MinusGray from "@/public/icons/MinusGray.svg"; //do zad. localStorage
import Plus from "@/public/icons/Plus.svg";
import MockImage from "@/public/apple-iphone-xs/gold/01.webp";

export default function CartProduct() {
    return (
        <div className="product flex flex-col desktop:flex-row tablet:flex-row tablet:items-center border border-1 desktop:col-span-16 tablet:col-span-full mobile:col-span-full">
        <div className="flex flex-row items-center">
            <div className="close flex justify-center items-center">
                <button className="closeButton justify-center items-center w-4 h-4 mx-6">
                    <Image src={Union} alt="close" width={9} />
                </button>
            </div>
            <div className="productImage relative w-20 h-20 flex justify-center items-center ">
                    <Image src={MockImage} alt="iphone" height={66} />
            </div>
            <p className="w-336 text-sm font-semibold leading-21 mx-6">Apple iPhone 14 Pro 128GB Silver (MQ023)</p>
        </div>
        <div className="flex flex-row items-center">
            <div className="counter flex flex-row">
                <button className="ml-4 tablet:ml-0 border border-1 w-8 h-8 flex justify-center items-center border-icon-color">
                    <Image src={Minus} alt="minus" width={16}/>
                </button>
                <div className="flex justify-center items-center w-8 h-8">
                    <p>1</p>
                </div>
                <button className="border border-1 w-8 h-8 flex justify-center items-center border-icon-color">
                    <Image src={Plus} alt="plus" width={16}/>
                </button>
            </div>
            <div className="w-20 flex justify-end ml-6">
                <p className="price text-22px font-extrabold">$999</p>
            </div>
        </div>
        </div>
    );
}