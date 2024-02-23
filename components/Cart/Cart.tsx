"use client"; 

import useLocalStorage from '@/hooks/useLocalStorage';
import { useState, useEffect, useCallback } from 'react';
import {CartProduct} from "./CartProduct";
import { Back } from '@/components/Back';
import { Modal } from '@/components/Modal';

interface CartItem {
  [productId: string]: number;
}

export default function Cart() {
  const storage = useLocalStorage('CART');

  const [cart, setCart] = useState<{ product: Product, quantity: number }[]>([]);
  const productsArray: CartItem[] = useLocalStorage('CART')?.getItem();
  const stringifiedProducts = JSON.stringify(productsArray)
  const [totalCost, setTotalCost] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [ifCheckout,setIfCheckout] =useState(false);

  const fetchData = useCallback(async() => {
    try {
      const response = await fetch(`/api?products=${stringifiedProducts}`);
      if (response.ok) {
        const responseData = await response.json();
        merger(responseData.res)
      } else {
        console.error('Failed to fetch data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }}, [stringifiedProducts])

  useEffect(() => {

      fetchData();

  }, [fetchData]);


  function merger(productsInfo: Product[]) {
    const mergingData = productsArray.map((item) => {
      const itemId = Object.keys(item)[0];
      const quantity = item[itemId];
      const productData = productsInfo.find((el) => el.itemId === itemId);
      return { product: productData as Product, quantity };
    });

    setCart(mergingData)
  }

  useEffect(() => {

    const total = cart.reduce((acc, cartItem) => {
      const subtotal = cartItem.product.price * cartItem.quantity;
      return acc + subtotal;
  }, 0);

    setTotalCost(total)

    const count = cart.reduce((acc, cartItem) => {
      return acc + cartItem.quantity;
  }, 0);

    setTotalCount(count)

  }, [cart]);


const checkoutButtonHandler = () => {
  if (storage) {
    for (const c in cart) {
      storage.removeItemFromCart(c);
    }
    setCart([]);
    setTotalCost(0);
    setTotalCount(0);
    setIfCheckout(true);
  }
}
  return (
            <div className="">
              {ifCheckout && <Modal />}
                    <Back />
                <h1 className="col-span-full desktop:text-5xl tablet:text-5xl mobile:text-l desktop:leading-56 tablet:leading-56 mt-4 mb-8 mobile: leading-41">Cart</h1>
                <div className="grid grid-cols-1 auto-rows-1 gap-gap desktop:grid-cols-17 tablet:grid-cols-1 mobile:grid-cols-1">
                {cart.length !== 0 && cart.map((p, index)=> {return(
                    <CartProduct 
                    key={p.product?.id}
                    index={index}
                    product={p.product} 
                    quantity={p.quantity}
                    setCart={setCart}/>
                )})};
                    <div className="summary flex flex-col flex desktop:justify-center items-center tablet:content-start border border-1 desktop:col-start-17 desktop:row-start-1 desktop:row-end-3 tablet:col-span-1 tablet:h-192 tablet:pt-6 desktop:pt-0 tablet:mt-4 desktop:mt-0 mobile:col-span-full">
                        <p className="total text-2xl font-extrabold leading-41 desktop:mt-23">${totalCost}</p>
                        <p className="totalItems text-sm font-medium leading-21">Total for {totalCount} items</p>
                        <div className="h-96 mt-25 border border-transparent border-t-elements-color flex justify-center items-center">
                            <button className="text-sm desktop:w-320 tablet:w-544 leading-21 font-bold w-320 h-48 checkoutButton bg-black text-white"
                            onClick={checkoutButtonHandler}>Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        );
}




