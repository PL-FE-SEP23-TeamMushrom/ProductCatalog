import Pagination from "@/components/Pagination/Pagination";
import Card from "@/components/ProductCard/ProductCard";
import connectToDatabase from "@/lib/connect";

export default async function Tablets() {
  const db = await connectToDatabase()

  const tablets = await db
  // zmień kolekcję na "phones", "tablets", albo "accesories" przy szukaniu całej strony dla 1 produktu
      .collection<Product>("products")
      .find({ category: "tablets" })
      .toArray();
  
  return (
    <>
      <Pagination>
        {tablets.map(tablet => (
          <Card
            key={tablet.id}
            product={tablet}
          />
        ))}
      </Pagination>
    </>
  );
}
