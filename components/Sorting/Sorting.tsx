"use client";

import React, { useState, useEffect, useLayoutEffect } from "react";
import { Card } from "@/components/ProductCard";
import CardSkeleton from "../CardSkeleton/CardSkeleton";

interface SortingProps {
  products: Product[];
}

const Sorting: React.FC<SortingProps> = ({ products }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [sortedProducts, setSortedProducts] = useState<Product[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const [pageSize, setPageSize] = useState(8);
  const [sortBy, setSortBy] = useState("newest");

  useLayoutEffect(() => {
    sortproducts(sortBy);
  }, [products, sortBy]);

  useEffect(() => {
    setStartIndex(0);
  }, [pageSize]);

  const sortproducts = (criteria: string) => {
    const sorted = sortProductsByCriteria([...products], criteria);
    setSortedProducts(sorted);
  };

  const sortProductsByCriteria = (products: Product[], criteria: string) => {
    switch (criteria) {
      case "newest":
        return products.sort((a, b) => b.year - a.year);
      case "priceLowToHigh":
        return products.sort((a, b) => a.price - b.price);
      case "priceHighToLow":
        return products.sort((a, b) => b.price - a.price);
      default:
        return products;
    }
  };

  const handlePageClick = (pageIndex: number) => {
    setStartIndex(pageIndex * pageSize);
    setSelectedIndex(pageIndex);
  };

  const totalPages = Math.ceil(sortedProducts.length / pageSize);

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
          {sortedProducts.length === 0 &&
            Array.from(Array(pageSize), (_, i) => <CardSkeleton key={i} />)
          }
          {sortedProducts.length > 0 &&
            sortedProducts.slice(startIndex, startIndex + pageSize)
            .map((product) => (
              <Card key={product.id} product={product} />
            ))}
        </div>
      </div>
      <div className="flex justify-center mt-8">
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
