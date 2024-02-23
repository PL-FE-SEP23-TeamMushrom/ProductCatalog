"use client"

import Image from "next/image";
import { FullProductInfo } from "@/lib/types/fullProductInfo";
import { ColorSquare } from "./ColorSquare";
import { CapacityButton } from "./CapacityButton";
import Heart from "@/public/icons/Heart.svg";
import useLocalStorage from "@/hooks/useLocalStorage";

type Props = {
  item:FullProductInfo,
}

export const BuyingSection:React.FC<Props>= ({item})=> {
  const storage = useLocalStorage("CART");

  const {
    id,
    name,
    colorsAvailable,
    color,
    capacityAvailable,
    capacity,
    priceDiscount,
    priceRegular,
    screen,
    resolution,
    processor,
    ram,
  } =item;

  const handleButtonClick = () => {
    storage?.addItemToCart(id);
};

return (
    <div className="">
      <div className="font-semibold text-xs leading-4 text-secondary-color mb-2">
        <h1>Available colors</h1>
      </div>
      <div className="flex">
        {colorsAvailable.map(c=>{return(
          <ColorSquare key={c} color={c} active={c==color} id={id} activeColor={color}/>
        );})}
      </div>
      <hr className="border-t-2 my-6" />
      <div className="font-semibold text-xs leading-4 text-secondary-color mb-2">
        <p>Select capacity</p>
      </div>
      <div className="flex">
      {capacityAvailable.map(c=>{return(
          <CapacityButton key={c} capacity={c} active={c==capacity} id={id} activeCapacity={capacity}/>
        );})}
      </div>
      <hr className="border-t-2 my-6" />
      <div className="flex items-center">
        <p className="text-32 font-extrabold leading-10 text-primary-color">${priceDiscount}</p>
        {(priceDiscount!==priceRegular) 
        && <p className="text-22px font-medium leading-7 text-secondary-color line-through ml-2">${priceRegular}</p>}
      </div>
      <div className="mt-4 flex justify-between">
        <button className="bg-primary-color w-full h-40 text-white mr-2"
        onClick={handleButtonClick}>
          Add to cart
        </button>
        <button className="w-40 h-40 border-2 flex justify-center items-center">
          <Image src={Heart} alt="heart icon" />
        </button>
      </div>
      <div className="flex flex-template-col place-content-between mt-8">
          <div className="text-secondary-color text-xs font-semibold">
            Screen <br />
            Resolution <br />
            Processor <br />
            RAM
          </div>
          <div className="text-right text-primary-color text-xs font-semibold">
            {screen} <br />
            {resolution} <br />
            {processor} <br />
            {ram}
          </div>
      </div>
    </div>
  );
};

