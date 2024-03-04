"use client";

import React, { useState } from "react";
import Image from "next/image";
import ArrowLeft from "icons/ArrowLeft.svg";
import ArrowRight from "icons/ArrowRight.svg";
import { Card } from "components/ProductCard";

interface NewModelProps {
  newModels: Product[];
}

const NewModels: React.FC<NewModelProps> = ({ newModels }) => {
  const [startIndex, setStartIndex] = useState(0);
  const numberOfMovedProducts = 4
  const squareSize = 32

  const handlePrevClick = () => {
  setStartIndex((prevIndex) => {
    if (prevIndex === 0) {
      return newModels.length - numberOfMovedProducts;
    } else {
      return Math.max(prevIndex - numberOfMovedProducts, 0);
    }
  });
};

const handleNextClick = () => {
  setStartIndex((prevIndex) => {
    if (prevIndex + numberOfMovedProducts >= newModels.length) {
      return 0;
    } else {
      return prevIndex + numberOfMovedProducts;
    }
  });
};

  return (
    <div className="mx-auto my-10 max-w-screen-xl w-full xs:px-5 sm:w-full md:w-900 lg:w-900 xl:w-1150 2xl:max-w-1150 overflow-hidden ">
      <div className="flex justify-between my-5 xs:w-full sm:w-full md:w-900 lg:w-900 xl:w-1150 2xl:max-w-1150">
        <h1 className="font-bold text-4xl">Brand new models</h1>
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
      <div className="flex items-center justify-between gap-4 overflow-auto">
        {newModels.slice(startIndex, startIndex + numberOfMovedProducts).map((newModel) => (
          <Card key={newModel.id} product={newModel} />
        ))}
      </div>
    </div>
  );
};

export default NewModels;
