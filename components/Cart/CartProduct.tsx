import React from 'react';
import Image from "next/image";
import Union from "@/public/icons/Union.svg";
import Minus from "@/public/icons/Minus.svg";
import Plus from "@/public/icons/Plus.svg";
import useLocalStorage from '@/hooks/useLocalStorage';

type Props = {
        key: string,
        product: Product,
        quantity: number,
};

export const CartProduct: React.FC<Props> =({product, quantity}) => {

    const storage = useLocalStorage('cart');
    
    const phoneimage = '/' + product?.image
    
    const handleAddClick = () => {
        storage?.addItemToCart(product?.itemId as string);
    };

    const handleMinusClick = () => {
        storage?.reduceItemFromCart(product?.itemId as string);
    };

    return (
        <div className="product flex flex-col desktop:flex-row tablet:flex-row tablet:items-center border border-1 desktop:col-span-16 tablet:col-span-full mobile:col-span-full">
        <div className="flex flex-row items-center">
            <div className="close flex justify-center items-center">
                <button className="closeButton justify-center items-center w-4 h-4 mx-6"
                >
                    <Image src={Union} alt="close" width={9} />
                </button>
            </div>
            <div className="productImage relative w-20 h-20 flex justify-center items-center ">
                    <Image src={phoneimage} alt="iphone" height={66} width={50} />
            </div>
            <p className="w-336 text-sm font-semibold leading-21 mx-6">{product?.name}</p>
        </div>
        <div className="flex flex-row items-center">
            <div className="counter flex flex-row">
                <button className="ml-4 tablet:ml-0 border border-1 w-8 h-8 flex justify-center items-center border-icon-color" 
                onClick={handleMinusClick}>
                    <Image src={Minus} alt="minus" width={16}/>
                </button>
                <div className="flex justify-center items-center w-8 h-8">
                    <p>{quantity}</p>
                </div>
                <button className="border border-1 w-8 h-8 flex justify-center items-center border-icon-color"
                onClick={handleAddClick}>
                    <Image src={Plus} alt="plus" width={16}/>
                </button>
            </div>
            <div className="w-20 flex justify-end ml-6">
                <p className="price text-22px font-extrabold">${product?.price}</p>
            </div>
        </div>
        </div>
    );
}
