import Location from "@/components/Location/Location";
import Pagination from "@/components/Pagination/Pagination";
import Card from "@/components/ProductCard/ProductCard";
import connectToDatabase from "@/lib/connect";
import { Suspense } from "react";

export default async function Tablets() {
  const db = await connectToDatabase()

  const tablets = await db
  // zmień kolekcję na "phones", "tablets", albo "accesories" przy szukaniu całej strony dla 1 produktu
      .collection<Product>("products")
      .find({ category: "tablets" })
      .toArray();
  
  const serialized = JSON.parse(JSON.stringify(tablets)) as Product[];

  return (
    <>
      <Location location='tablets' />
      <Suspense>
        <Pagination>
          {serialized.map(item => (
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
        
    