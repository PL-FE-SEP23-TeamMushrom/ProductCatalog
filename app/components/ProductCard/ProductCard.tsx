import Image from "next/image";
import MockImage from "../../../public/apple-iphone-xs/gold/01.webp";
import Heart from "../../../public/icons/Heart.svg";

export default function Card() {
  return (
    <div className="card w-208 h-506 flex flex-col items-center p-4 border-2 border-gray-200 rounded-lg">
      <div className="w-full h-196 mt-4 relative">
        <Image src={MockImage} alt="iphone" layout="fill" objectFit="contain" />
      </div>
      <h2 className="mt-4 mb-2">Apple iPhone Xs 64GB Silver (iMT9G2FS/A)</h2>
      <div className="flex w-full">
        <span className="font-bold">$799</span>
        <span className="ml-2 line-through text-gray-400">$899</span>
      </div>
      <div className="flex justify-between w-full mt-2">
        <div className="text-gray-500">
          <p>Screen</p>
          <p>Capacity</p>
          <p>RAM</p>
        </div>
        <div className="font-bold">
          <p>5.8” OLED</p>
          <p>64 GB</p>
          <p>4 GB</p>
        </div>
      </div>
      <div className="mt-4 flex justify-between w-full">
        <button className="bg-gray-700 text-white px-4 p-2">Add to cart</button>
        <button className="w-40 border-2 flex justify-center items-center">
          <Image src={Heart} alt="heart icon" />
        </button>
      </div>
    </div>
  );
}
