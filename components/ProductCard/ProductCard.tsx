"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Heart from "@/public/icons/Heart.svg";
import RedHeart from "@/public/icons/RedHeart.svg";
import Link from "next/link";
import useLocalStorage from "@/hooks/useLocalStorage";
import { Loader } from "@/components/Loader";

interface CardProps {
  product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
  const [added, setAdded] = useState(false);
  let {
    category,
    itemId,
    name,
    fullPrice,
    price,
    screen,
    capacity,
    ram,
    image,
  } = product;
  const [faovrite, setFavotire] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const storage = useLocalStorage("CART");
  const favorites = useLocalStorage("FAVORITES");
  image = "/" + image;

  useEffect(() => {
    const check = favorites?.getItem();
    if (check.includes(itemId)) {
      setFavotire(true);
    }
  }, []);

  const handleButtonClick = () => {
    setAdded(true);
    storage?.addItemToCart(itemId);
  };

  useEffect(() => {
    if (added) {
      const timeout = setTimeout(() => setAdded(false), 3000);
    }
  }, [added]);

  const handleWhiteHeartClick = () => {
    favorites?.addFavoriteToStorage(itemId);
    setFavotire(true);
  };

  const handleRedHeartClick = () => {
    favorites?.removeFavoriteFromStorage(itemId);
    setFavotire(false);
  };

  return (
    <div className="card relative w-272 h-506 flex flex-col items-center p-4 border-2 border-gray-200 rounded-lg transition-transform duration-300 transform-gpu hover:scale-105 hover:shadow-lg z-10">
      <Link key={itemId} href={`/${category}/${itemId}`}>
        <div className="w-208 h-196 mt-4 relative">
          {loading && <Loader />}
          <Image
            src={image}
            onLoadingComplete={() => setLoading(false)}
            alt="iphone"
            layout="fill"
            objectFit="contain"
          />
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
        {added ? (
          <button className="border w-160 h-40 text-green">
            Added to cart
          </button>
        ) : (
          <button
            className="bg-gray-700 w-160 h-40 text-white"
            onClick={handleButtonClick}
          >
            Add to cart
          </button>
        )}

        {!faovrite && (
          <button
            className="w-40 h-40 border-2 flex justify-center items-center"
            onClick={handleWhiteHeartClick}
          >
            <Image src={Heart} alt="heart icon" />
          </button>
        )}
        {faovrite && (
          <button
            className="w-40 h-40 border-2 flex justify-center items-center"
            onClick={handleRedHeartClick}
          >
            <Image src={RedHeart} alt="heart icon" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
