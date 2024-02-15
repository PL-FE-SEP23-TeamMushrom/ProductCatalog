import Location from "@/components/Location/Location";
import Pagination from "@/components/Pagination/Pagination";
import Card from "@/components/ProductCard/ProductCard";
import getMany from "@/utils/getMany";
import { Suspense } from "react";

export default async function Tablets() {
  const tablets = await getMany("tablets");

  return (
    <>
      <Location location='tablets' />
      <Suspense>
        <Pagination>
          {tablets.map(item => (
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
        
    