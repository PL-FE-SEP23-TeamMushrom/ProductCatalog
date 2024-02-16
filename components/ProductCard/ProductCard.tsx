"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Heart from "@/public/icons/Heart.svg";
import Link from "next/link";
import useLocalStorage from "@/hooks/useLocalStorage";

interface CardProps {
  product: Product,
  path?: string,
}

const Card: React.FC<CardProps> = ({ product, path }) => {
  let pathname = usePathname()
  let { itemId, name, fullPrice, price, screen, capacity, ram, image } = product;
  const storage = useLocalStorage('cart');
  image = '/' + image;

  if (path) {
    pathname += path;
  }

  const handleButtonClick = () => {
    storage.addItem(itemId);
};



  return (
    <div className="card w-272 h-506 flex flex-col items-center p-4 border-2 border-gray-200 rounded-lg">
      <Link key={itemId} href={`${pathname}/${itemId}`}>
        <div className="w-208 h-196 mt-4 relative">
          <Image src={image} alt="iphone" layout="fill" objectFit="contain" />
        </div>
        <h2 className="mt-4 mb-2 w-208 h-48">{name}</h2>
        <div className="flex w-208">
          <span className="font-bold text-lg">{`$${price}`}</span>
          <span className="ml-2 line-through text-gray-400 text-lg">{`$${fullPrice}`}</span>
        </div>
        <hr className="w-208 mt-2 mb-2" />
        <div className="flex justify-between w-208 mt-2">
          <div className="text-gray-500">
            <p>Screen</p>
            <p>Capacity</p>
            <p>RAM</p>
          </div>
          <div className="font-bold text-right">
            <p>{screen}</p>
            <p>{capacity}</p>
            <p>{ram}</p>
          </div>
        </div>
      </Link>
      <div className="mt-4 flex justify-between w-208">
        <button className="bg-gray-700 w-160 h-40 text-white" onClick={handleButtonClick}>
          Add to cart
        </button>
        <button className="w-40 h-40 border-2 flex justify-center items-center">
          <Image src={Heart} alt="heart icon" />
        </button>
      </div>
    </div>
  );
};

export default Card;
