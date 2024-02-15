import NewModels from "@/components/NewModels/NewModels";
import HotPrices from "@/components/HotPrices/HotPrices";
import connectToDatabase from "@/lib/connect";

export default async function Home() {
  const db = await connectToDatabase();
  const phones = await db
    .collection<Product>("products")
    .find({ year: 2022 })
    .toArray();

  const hotPrices = await db.collection<Product>("products").find({}).toArray();

  return (
    <>
      <NewModels newModels={phones} />
      <HotPrices hotPrices={hotPrices} />
    </>
  );
}
