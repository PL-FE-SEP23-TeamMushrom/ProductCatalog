"use client"

import { Location } from "@/components/Location";
import { Sorting } from "@/components/Sorting";
import useLocalStorage from "@/hooks/useLocalStorage";
import { Suspense, useCallback, useEffect, useState } from "react";

export default function Favourites() {
  const [favorites, setFavorites] = useState<Product[]>([]);
  const favoriteProducts: string[] = useLocalStorage("FAVORITES")?.getItem();
  const stringifiedFavorites = JSON.stringify(favoriteProducts)

  const fetchData = useCallback(async() => {
    try {
      const response = await fetch(`/api/favorites?products=${stringifiedFavorites}`);
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
      <Location location='favorites' />
      <div className="font-bold text-2xl mb-10 mt-4">
            Favourites
        </div>
      <Suspense>
        <Sorting products={favorites} />
      </Suspense>
    </>
  );
}
    