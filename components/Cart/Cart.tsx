import connectToDatabase from "@/lib/connect";
import Image from "next/image";
import ArrowLeftBlack from "@/public/icons/ArrowLeftBlack.svg";
import {CartProduct} from "./CartProduct";
import { useState,useEffect } from "react";
import getProductById from "@/utils/getProductById";
import getOne from "@/utils/getOne";

export default function Cart() {
const [cart,setCart] =useState<{product:Product,quantity:number}[]>([]);

useEffect(() => {
    const loadProducts = async () => {
      
    let localCart='{}';
    if (typeof window !== 'undefined') {
    // Perform localStorage action
    localCart = JSON.parse(localStorage.getItem("localCart") || '{}');

  }

    const products:{product:Product,quantity:number}[] = [];

    for (const [key, value] of Object.entries(localCart)) {
        // const product = await getProductById(Number(key));
        //const accessory = await getOne("accessories", key);
        const db = await connectToDatabase();

        // if (product !== null) {
        // products.push({product,quantity:Number(value),});
        // }
    }

      setCart(products);
    };

    loadProducts();
  }, []);

const changeQuantity = (id:number,by:number) => {
    const cartCopy = cart.map(p=> {
        return {product:p.product,
        quantity: p.product.id===id?p.quantity+by:p.quantity};
    }).filter(p=>p.quantity>0); 

    const newLocalCart: { [id: string]: number } = {};
    for (const p of cart) {
        newLocalCart[p.product.id]=p.quantity;
    }
    localStorage.setItem("localCart",JSON.stringify(newLocalCart));

    setCart(cartCopy);
}

// const db = await connectToDatabase();

let localCart='{}';
if (typeof window !== 'undefined') {
    // Perform localStorage action
    localCart = JSON.parse(localStorage.getItem("localCart") || '{}');

  }

const products:{product:Product,quantity:number}[] = [];

for (const [key, value] of Object.entries(localCart)) {
    // const product = await db
    // .collection<Product>("products")
    // .findOne({id: Number(key)});
    // const product = await getProductById(Number(key));

    // if (product !== null) {
    // products.push({product,quantity:Number(value),});
    // }
}

let totalCount = 0;
let totalCost = 0;

for (const p of products) {
    totalCount += p.quantity;
    totalCost += p.product.price;
}

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
            {products.map(p=> {return(
                <CartProduct 
                key={p.product.id}
                name={p.product.name} 
                price={p.product.price}
                quantity={p.quantity}
                changeQuantity={changeQuantity}/>
            )})};
                <div className="summary flex flex-col flex desktop:justify-center items-center tablet: content-start border border-1 desktop:col-start-17 desktop:row-start-1 tablet:col-span-full tablet:h-192 tablet:pt-6 desktop:pt-0 tablet:mt-4 desktop:mt-0 mobile:col-span-full">
                    <p className="total text-2xl font-extrabold leading-41 desktop:mt-23">${totalCount}</p>
                    <p className="totalItems text-sm font-medium leading-21">Total for {totalCost} items</p>
                    <div className="h-96 mt-25 border border-transparent border-t-elements-color flex justify-center items-center">
                        <button className="text-sm desktop:w-320 tablet:w-544 leading-21 font-bold w-320 h-48 checkoutButton bg-black text-white">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

