"use client"; 

import useLocalStorage from '@/hooks/useLocalStorage';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import ArrowLeftBlack from "@/public/icons/ArrowLeftBlack.svg";
import {CartProduct} from "./CartProduct";
import getProductById from "@/utils/getProductById";
import getOne from "@/utils/getOne";

interface CartItem {
  [productId: string]: number;
}


export default function Cart() {
  const [cart, setCart] = useState<{product:Product, quantity:number}[]>([]);
  const [productsInfo, setProductsInfo] = useState<Product[]>([]);
  const productsArray: CartItem[] = (useLocalStorage('cart')?.getItem());

  

  useEffect(() => {
    // Define a function to fetch data from your GET endpoint
    
    const fetchData = async () => {
      try {
        const response = await fetch(`/api?products=${JSON.stringify(productsArray)}`); // Updated the endpoint to match your API route
        if (response.ok) {
          const responseData = await response.json();
          setProductsInfo(responseData.res); // Updated to set the state directly with the fetched data
          
        } else {
          console.error('Failed to fetch data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []);

  useEffect(() => {
    const mergingData = productsArray.map((item) => {
        const itemId = Object.keys(item)[0];
        const quantity = item[itemId];
        const productData = productsInfo.find((el) => el.itemId === itemId);
        return { product: productData as Product, quantity };
    });

    console.log(mergingData);

    // Set the state with the transformed data
    setCart(mergingData);

}, [productsInfo]);


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
                {cart.map(p=> {return(
                    <CartProduct 
                    key={p.product?.id}
                    product={p.product} 
                    quantity={p.quantity}/>
                )})};
                    <div className="summary flex flex-col flex desktop:justify-center items-center tablet: content-start border border-1 desktop:col-start-17 desktop:row-start-1 tablet:col-span-full tablet:h-192 tablet:pt-6 desktop:pt-0 tablet:mt-4 desktop:mt-0 mobile:col-span-full">
                        {/* <p className="total text-2xl font-extrabold leading-41 desktop:mt-23">${totalCost}</p>
                        <p className="totalItems text-sm font-medium leading-21">Total for {totalCount} items</p> */}
                        <div className="h-96 mt-25 border border-transparent border-t-elements-color flex justify-center items-center">
                            <button className="text-sm desktop:w-320 tablet:w-544 leading-21 font-bold w-320 h-48 checkoutButton bg-black text-white">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        );
}




