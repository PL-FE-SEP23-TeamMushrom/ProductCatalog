"use client";

import { useState, ReactNode } from "react";
import { useRouter } from "next/navigation";
import React from "react";

interface PaginationProps {
  children: ReactNode;
}

export default function Pagination({ children }: PaginationProps) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;
  const childrenArray = React.Children.toArray(children);
  const totalPages = Math.ceil(childrenArray.length / itemsPerPage);

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    router.push(`/phones/${pageNumber}`);
  };

  const renderPageNumbers = () => {
    return Array.from({ length: totalPages }, (_, index) => (
      <button key={index} onClick={() => handleClick(index + 1)}>
        {index + 1}
      </button>
    ));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(currentPage * itemsPerPage, childrenArray.length);
  const paginatedChildren = childrenArray.slice(startIndex, endIndex);

  return (
    <>
      <div className="flex justify-center">
        <div className="grid xxl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4 p-4">
          {paginatedChildren.map((child, index) => (
            <div key={index}>{child}</div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">{renderPageNumbers()}</div>
    </>
  );
}
