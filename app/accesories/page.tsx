import Pagination from "@/components/Pagination/Pagination";
import Card from "@/components/ProductCard/ProductCard";
import connectToDatabase from "@/lib/connect";

export default async function Accesories() {
  const db = await connectToDatabase()

  const accesories = await db
  // zmień kolekcję na "phones", "tablets", albo "accesories" przy szukaniu całej strony dla 1 produktu
      .collection<Product>("products")
      .find({ category: "accessories" })
      .toArray();
  
  return (
    <>
      <Pagination>
        {accesories.map(accesory => (
          <Card
            key={accesory.id}
            product={accesory}
          />
        ))}
      </Pagination>
    </>
  );
}
