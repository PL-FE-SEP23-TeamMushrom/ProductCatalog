"use client";

import React, { useState, useEffect } from "react";
import Card from "@/components/ProductCard/ProductCard";

interface SortingProps {
  phones: Product[];
}

const Sorting: React.FC<SortingProps> = ({ phones }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [sortedPhones, setSortedPhones] = useState(phones);
  const [startIndex, setStartIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [sortBy, setSortBy] = useState("newest");

  useEffect(() => {
    sortPhones(sortBy);
  }, [phones, sortBy]);

  useEffect(() => {
    setStartIndex(0);
  }, [pageSize]);

  const sortPhones = (criteria: string) => {
    const sorted = sortPhonesByCriteria([...phones], criteria);
    setSortedPhones(sorted);
  };

  const sortPhonesByCriteria = (phones: Product[], criteria: string) => {
    switch (criteria) {
      case "newest":
        return phones.sort((a, b) => b.year - a.year);
      case "priceLowToHigh":
        return phones.sort((a, b) => a.price - b.price);
      case "priceHighToLow":
        return phones.sort((a, b) => b.price - a.price);
      default:
        return phones;
    }
  };

  const handlePageClick = (pageIndex: number) => {
    setStartIndex(pageIndex * pageSize);
    setSelectedIndex(pageIndex);
  };

  const totalPages = Math.ceil(sortedPhones.length / pageSize);

  return (
    <div className="mx-auto">
      <div className="flex justify-start m-4">
        <div className="mr-2">Sort by:</div>
        <div className="border border-gray-300 mr-4 inline-block">
          <select
            id="sortBy"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="newest">Newest</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
          </select>
        </div>
        <div className="mr-2">Items on page:</div>
        <div className="border border-gray-300 inline-block">
          <select
            id="pageSize"
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            <option value={8}>8</option>
            <option value={16}>16</option>
            <option value={32}>32</option>
          </select>
        </div>
      </div>
      <div className="grid justify-center">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
          {sortedPhones
            .slice(startIndex, startIndex + pageSize)
            .map((phone) => (
              <Card key={phone.id} product={phone} />
            ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {[...Array(totalPages)].map((_, pageIndex) => (
          <button
            key={pageIndex}
            className={`border border-gray-300 mr-2 p-2 ${
              selectedIndex === pageIndex ? "bg-black text-white" : ""
            }`}
            onClick={() => handlePageClick(pageIndex)}
          >
            {pageIndex + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sorting;
