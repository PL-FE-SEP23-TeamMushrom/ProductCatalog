import Image from "next/image";
import ArrowLeftBlack from "@/public/icons/ArrowLeftBlack.svg";
// import Close from "@/public/icons/Close.svg";
import Union from "@/public/icons/Union.svg";
import Minus from "@/public/icons/Minus.svg";
import Plus from "@/public/icons/Plus.svg";
import MockImage from "@/public/apple-iphone-xs/gold/01.webp";

export default function Cart() {
    return (
        <div className="">
            <div className="back col-span-full">
                <button className="flex flex-row">
                    <Image src={ArrowLeftBlack} alt="arrow left" width={16}/>
                    <p className="text-xs text-secondary-color font-700 ml-1">Back</p>
                </button>
            </div>
            <h1 className="col-span-full desktop:text-5xl tablet:text-5xl mobile:text-l desktop:leading-56 tablet:leading-56 mt-4 mb-8 mobile: leading-41">Cart</h1>
            <div className="col-span-full flex flex-row grid desktop:grid-cols-desktop desktop:auto-rows-desktop tablet:auto-rows-tablet mobile:auto-rows-mobile tablet:grid-cols-tablet mobile:grid-cols-mobile gap-gap">
                <div className="product flex flex-row items-center border border-1 desktop:col-span-16 tablet:col-span-full mobile:col-span-full">
                    <div className="close flex justify-center items-center">
                        <button className="closeButton justify-center items-center w-4 h-4 mx-6">
                            <Image src={Union} alt="close" width={9} />
                        </button>
                    </div>
                    <div className="productImage relative w-20 h-20 flex justify-center items-center ">
                            <Image src={MockImage} alt="iphone" height={66} />
                    </div>
                    <p className="w-336 text-sm font-semibold leading-21 mx-6">Apple iPhone 14 Pro 128GB Silver (MQ023)</p>
                    <div className="counter flex flex-row">
                        <button className="border border-1 w-8 h-8 flex justify-center items-center border-icon-color">
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
                <div className="product flex flex-row items-center border border-1 desktop:col-span-16 tablet:col-span-full mobile:col-span-full">
                    <div className="close flex justify-center items-center">
                        <button className="closeButton justify-center items-center w-4 h-4 mx-6">
                            <Image src={Union} alt="close" width={9} />
                        </button>
                    </div>
                    <div className="productImage relative w-20 h-20 flex justify-center items-center ">
                            <Image src={MockImage} alt="iphone" height={66} />
                    </div>
                    <p className="w-336 text-sm font-semibold leading-21 mx-6">Apple iPhone 14 Pro 128GB Silver (MQ023)</p>
                    <div className="counter flex flex-row">
                        <button className="border border-1 w-8 h-8 flex justify-center items-center border-icon-color">
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
                <div className="summary flex flex-col flex desktop:justify-center items-center tablet: content-start border border-1 desktop:col-start-17 desktop:row-start-1 tablet:col-span-full tablet:h-192 tablet:pt-6 desktop:pt-0 tablet:mt-4 desktop:mt-0 mobile:col-span-full">
                    <p className="total text-2xl font-extrabold leading-41 desktop:mt-23">$2657</p>
                    <p className="totalItems text-sm font-medium leading-21">Total for 3 items</p>
                    <div className="h-96 mt-25 border border-transparent border-t-elements-color flex justify-center items-center">
                        <button className="text-sm desktop:w-320 tablet:w-544 leading-21 font-bold w-320 h-48 checkoutButton bg-black text-white">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
}