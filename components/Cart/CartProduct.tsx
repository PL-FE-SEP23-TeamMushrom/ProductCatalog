import React, { Dispatch, SetStateAction } from 'react';
import Image from "next/image";
import Union from "@/public/icons/Union.svg";
import Minus from "@/public/icons/Minus.svg";
import Plus from "@/public/icons/Plus.svg";
import useLocalStorage from '@/hooks/useLocalStorage';
import Link from 'next/link';

type Props = {
    index: number,
    product: Product,
    quantity: number,
    setCart: Dispatch<SetStateAction<{
        product: Product;
        quantity: number;
    }[]>>
};

export const CartProduct: React.FC<Props> =({index, product, quantity, setCart}) => {

    const storage = useLocalStorage('CART');
    
    const phoneimage = '/' + product?.image

    const handleAddClick = () => {
        setCart(prev => {
            const arr = [...prev]
            arr[index] = {...arr[index], quantity: arr[index].quantity + 1}
          
          return arr 
          })

        storage?.addItemToCart(product?.itemId as string);
    };
    
    const handleMinusClick = () => {
        setCart(prev => {
            const arr = [...prev]
            arr[index] = {...arr[index], quantity: arr[index].quantity - 1}
          
          return arr 
          })

        storage?.reduceItemFromCart(product?.itemId as string);
    };

    const handleDeleteClick = () => {
        setCart(prev => {
            const arr = [...prev];
            arr.splice(index, 1);
            
            return arr;
        });

        storage?.removeItemFromCart(product?.itemId as string);
    };
    
    

    return (
        <div className="product flex flex-col desktop:flex-row tablet:flex-row tablet:items-center border border-1 desktop:col-span-16 tablet:col-span-full mobile:col-span-full justify-between">
        <div className="flex flex-row items-center">
            
            <div className="close flex justify-center items-center">
                <button className="closeButton justify-center items-center w-4 h-4 mx-6"
                >
                    <Image src={Union} alt="close" width={9} onClick={handleDeleteClick} />
                </button>
            </div>
            <Link href={`${product.category}/${product.itemId}`} className="productImage relative w-20 h-20 flex justify-center items-center ">
                <Image src={phoneimage} alt="iphone" height={66} width={50} />
            </Link>
                <Link href={`${product.category}/${product.itemId}`} className="w-auto text-sm font-semibold leading-21 mx-6">{product?.name}</Link>
            
        </div>
        <div className="flex flex-row items-center mr-5">
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
