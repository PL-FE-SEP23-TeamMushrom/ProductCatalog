"use client";

import { useState, ReactNode } from "react";
import { useSearchParams } from 'next/navigation'
import React from "react";
import Link from "next/link";

interface PaginationProps {
  children: ReactNode;
  grid?: boolean
}

export default function Pagination({ children, grid = true }: PaginationProps) {
  const searchParams = useSearchParams()
  
  const [currentPage, setCurrentPage] = useState<number>(+(searchParams?.get('page') || 1));

  const itemsPerPage = 16;
  const childrenArray = React.Children.toArray(children);
  const totalPages = Math.ceil(childrenArray.length / itemsPerPage);


  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    return Array.from({ length: totalPages }, (_, index) => (
      <Link  href={`?page=${index + 1}`} key={index} onClick={() => handleClick(index + 1)}>
        {index + 1}
      </Link>
    ));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(currentPage * itemsPerPage, childrenArray.length);
  const paginatedChildren = childrenArray.slice(startIndex, endIndex);

  return (
    <>
      <div className="flex justify-center">
        <div className="grid xxl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4 py-4">
          {paginatedChildren.map((child, index) => (
            <div key={index}>{child}</div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">{renderPageNumbers()}</div>
    </>
  );
}
