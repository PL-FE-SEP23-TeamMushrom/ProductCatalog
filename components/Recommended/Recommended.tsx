"use client";

import React, { useState } from "react";
import Image from "next/image";
import ArrowLeft from "icons/ArrowLeft.svg";
import ArrowRight from "icons/ArrowRight.svg";
import { Card } from "components/ProductCard";

interface NewModelProps {
  recommended: Product[];
  itemPrice: number;
}

export const Recommended: React.FC<NewModelProps> = ({
  recommended,
  itemPrice,
}) => {
  const [startIndex, setStartIndex] = useState(0);
  const numberOfMovedProducts = 4
  const squareSize = 32
  const maxDifference = 200

  const handlePrevClick = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - numberOfMovedProducts, 0));
  };

  const handleNextClick = () => {
    setStartIndex((prevIndex) => prevIndex + numberOfMovedProducts);
  };

  return (
    <div className="overflow-hidden">
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl">Recommended</h1>
        <div>
          <button
            className="border border-gray-300 mr-2"
            onClick={handlePrevClick}
          >
            <Image
              src={ArrowLeft}
              alt="arrow left icon"
              width={squareSize}
              height={squareSize}
            ></Image>
          </button>
          <button className="border border-gray-300" onClick={handleNextClick}>
            <Image
              src={ArrowRight}
              alt="arrow right icon"
              width={squareSize}
              height={squareSize}
            ></Image>
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4 overflow-auto">
        {recommended
          .filter(
            (recommended) => Math.abs(itemPrice - recommended.price) < maxDifference,
          )
          .slice(startIndex, startIndex + numberOfMovedProducts)
          .map((recommended) => (
            <Card key={recommended.id} product={recommended} />
          ))}
      </div>
    </div>
  );
};

export default Recommended;
