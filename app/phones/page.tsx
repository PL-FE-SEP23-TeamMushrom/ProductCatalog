import Pagination from "@/components/Pagination/Pagination";
import Card from "@/components/ProductCard/ProductCard";
import connectToDatabase from "@/lib/connect";
import { Suspense } from "react";

export default async function Phones() {
  const db = await connectToDatabase()

  const phones = await db
      // zmień kolekcję na "phones", "tablets", albo "accesories" przy szukaniu całej strony dla 1 produktu
      .collection<Product>("products")
      .find({ category: "phones" })
      .toArray();

  const serialized = JSON.parse(JSON.stringify(phones)) as Product[];
  
  return (
    <>
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
    