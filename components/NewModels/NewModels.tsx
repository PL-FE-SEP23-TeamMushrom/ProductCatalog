"use client";

import React, { useState } from "react";
import Image from "next/image";
import ArrowLeft from "@/public/icons/ArrowLeft.svg";
import ArrowRight from "@/public/icons/ArrowRight.svg";
import Card from "@/components/ProductCard/ProductCard";

interface NewModelProps {
  newModels: Product[];
}

const NewModels: React.FC<NewModelProps> = ({ newModels }) => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrevClick = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 4, 0));
  };

  const handleNextClick = () => {
    setStartIndex((prevIndex) => prevIndex + 4);
  };

  return (
    <div className="mx-auto my-5 sm:w-full xs:px-5 sm:px-15 md:w-full lg:w-1100 xl:w-1150">
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl">Brand new models</h1>
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
      <div className="flex items-center gap-4">
        {newModels.slice(startIndex, startIndex + 4).map((newModel) => (
          <Card key={newModel.id} product={newModel} path={'phones'} />
        ))}
      </div>
    </div>
  );
};

export default NewModels;