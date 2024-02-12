import connectToDatabase from "@/lib/connect";

export default async function Accesories() {
  const db = await connectToDatabase()

  const phones = await db
  // zmień kolekcję na "phones", "tablets", albo "accesories" przy szukaniu całej strony dla 1 produktu
      .collection("products")
      .find({})
      .limit(16)
      .toArray();
  
  return (
    <>
      <div>Accesories page</div>
    </>
  );
}
