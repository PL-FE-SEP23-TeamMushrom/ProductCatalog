import Location from "@/components/Location/Location";
import Pagination from "@/components/Pagination/Pagination";
import Card from "@/components/ProductCard/ProductCard";
import getMany from "@/utils/getMany";
import { Suspense } from "react";

export default async function Accesories() {
  const accessories = await getMany("accessories");

  return (
    <>
      <Location location='accessories' />
      <Suspense>
        <Pagination>
          {accessories.map(item => (
            <Card
              key={item.id}
              product={item}
            />
          ))}
        </Pagination>
      </Suspense>
    </>
  );
}
    
