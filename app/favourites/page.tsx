"use client"

import Location from "@/components/Location/Location";
import Pagination from "@/components/Pagination/Pagination";
import Card from "@/components/ProductCard/ProductCard";
import Sorting from "@/components/Sorting/Sorting";
import useLocalStorage from "@/hooks/useLocalStorage";
import { Suspense, useCallback, useEffect, useState } from "react";

export default function Favourites() {
  const [favorites, setFavorites] = useState<Product[]>([]);
  const favoriteProducts: string[] = useLocalStorage('favorites')?.getItem();
  const stringifiedFavorites = JSON.stringify(favoriteProducts)

  const fetchData = useCallback(async() => {
    try {
      const response = await fetch(`/api/favorites?products=${stringifiedFavorites}`);
      console.log(response)
      if (response.ok) {
        const responseData = await response.json();
        setFavorites(responseData.res)
      } else {
        console.error('Failed to fetch data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }}, [stringifiedFavorites])

  useEffect(() => {

      fetchData();

  }, [fetchData]);
  
  return (
    <>
      <Location location='phones' />
      <div className="font-bold text-2xl mb-10 mt-4">
            Favourites
        </div>
      <Suspense>
        <Sorting phones={favorites} />
      </Suspense>
    </>
  );
}
    