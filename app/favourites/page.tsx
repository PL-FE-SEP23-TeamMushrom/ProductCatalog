import Location from "@/components/Location/Location";
import Pagination from "@/components/Pagination/Pagination";
import Card from "@/components/ProductCard/ProductCard";
import getMany from "@/utils/getMany";
import { Suspense } from "react";

export default async function Phones() {
  const phones = await getMany("phones");
  
  return (
    <>
      <Location location='phones' />
      <div className="font-bold text-2xl mb-10 mt-4">
            Favourites
        </div>
      <Suspense>
        <Pagination>
          
          {phones.map(item => (
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
    