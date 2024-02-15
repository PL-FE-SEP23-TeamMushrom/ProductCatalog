import Location from "@/components/Location/Location";
import Pagination from "@/components/Pagination/Pagination";
import Card from "@/components/ProductCard/ProductCard";
import connectToDatabase from "@/lib/connect";
import { Suspense } from "react";

export default async function Accesories() {
  const db = await connectToDatabase()

  const accesories = await db
  // zmień kolekcję na "phones", "tablets", albo "accesories" przy szukaniu całej strony dla 1 produktu
      .collection<Product>("products")
      .find({ category: "accessories" })
      .toArray()

  const serialized = JSON.parse(JSON.stringify(accesories)) as Product[];

  return (
    <>
      <Location location='accessories' />
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
    
