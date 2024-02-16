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
    