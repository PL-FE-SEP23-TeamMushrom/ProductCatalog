import Pagination from "@/components/Pagination/Pagination";
import Card from "@/components/ProductCard/ProductCard";
import connectToDatabase from "@/lib/connect";

export default async function Phones() {
  const db = await connectToDatabase()

  const phones = await db
      // zmień kolekcję na "phones", "tablets", albo "accesories" przy szukaniu całej strony dla 1 produktu
      .collection("products")
      .find({})
      .limit(16)
      .toArray();

  console.log(phones);

  return (
    <>
      <Pagination>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Pagination>
    </>
  );
}
