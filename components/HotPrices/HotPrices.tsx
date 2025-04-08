"use client";

import React, { useState } from "react";
import Image from "next/image";
import ArrowLeft from "@/public/icons/ArrowLeft.svg";
import ArrowRight from "@/public/icons/ArrowRight.svg";
import Card from "@/components/ProductCard/ProductCard";

interface NewModelProps {
  hotPrices: Product[];
}

const HotPrices: React.FC<NewModelProps> = ({ hotPrices }) => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrevClick = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 4, 0));
  };

  const handleNextClick = () => {
    setStartIndex((prevIndex) => prevIndex + 4);
  };

  return (
    <div className="mx-auto my-10 max-w-screen-xl w-full xs:px-5 sm:w-full md:w-900 lg:w-900 xl:w-1150 2xl:max-w-1150 overflow-hidden">
      <div className="flex justify-between my-5 xs:w-full sm:w-full md:w-900 lg:w-900 xl:w-1150 2xl:max-w-1150">
        <h1 className="font-bold text-4xl">Hot prices</h1>
        <div>
          <button
            className="border border-gray-300 mr-2"
            onClick={handlePrevClick}
          >
            <Image
              src={ArrowLeft}
              alt="arrow left icon"
              width={32}
              height={32}
            ></Image>
          </button>
          <button className="border border-gray-300" onClick={handleNextClick}>
            <Image
              src={ArrowRight}
              alt="arrow right icon"
              width={32}
              height={32}
            ></Image>
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between p-5 gap-4 overflow-x-auto overflow-y-visible">
        {hotPrices
          .filter((hotPrice) => hotPrice.price < 640)
          .slice(startIndex, startIndex + 4)
          .map((hotPrice) => (
            <Card key={hotPrice.id} product={hotPrice} />
          ))}
      </div>
    </div>
  );
};

export default HotPrices;
