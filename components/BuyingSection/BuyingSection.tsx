import Image from "next/image";
import { FullProductInfo } from "@/lib/types/fullProductInfo";
import { AboutType } from "../../lib/types/about";
import connectToDatabase from "@/lib/connect";
import { ColorSquare } from "./ColorSquare";
import { CapacityButton } from "./CapacityButton";
import Heart from "@/public/icons/Heart.svg";

type Props = {
  item:FullProductInfo,
}

export const BuyingSection:React.FC<Props>= ({item})=> {
  // const { description } = aboutData as AboutType;

  const {
    id,
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


  const ccc="bg-slate-500";
  const col=`w-4 h-4 rounded-full ${ccc} border border-1 border-elements-color`;
  return (
    <div className="">
      <div className="font-semibold text-xs leading-4 text-secondary-color mb-2">
        <h1>Available colors</h1>
      </div>
      <div className="flex">
        {colorsAvailable.map(c=>{return(
          <ColorSquare key={id} color={c} active={c==color} id={id} activeColor={color}/>
        );})}
      </div>
      <hr className="border-t-2 my-6" />
      <div className="font-semibold text-xs leading-4 text-secondary-color mb-2">
        <p>Select capacity</p>
      </div>
      <div className="flex">
      {capacityAvailable.map(c=>{return(
          <CapacityButton key={id} capacity={c} active={c==capacity} id={id} activeCapacity={capacity}/>
        );})}
      </div>
      <hr className="border-t-2 my-6" />
      <div className="flex items-center">
        <p className="text-32 font-extrabold leading-10 text-primary-color">${priceDiscount}</p>
        {(priceDiscount!==priceRegular) 
        && <p className="text-22px font-medium leading-7 text-secondary-color line-through ml-2">${priceRegular}</p>}
      </div>
      <div className="mt-4 flex justify-between w-208">
        <button className="bg-primary-color w-160 h-40 text-white">
          Add to cart
        </button>
        <button className="w-40 h-40 border-2 flex justify-center items-center">
          <Image src={Heart} alt="heart icon" />
        </button>
      </div>
    </div>
  );
};

