import connectToDatabase from "@/lib/connect"
import Slider from "@/components/Slider/Slider"
import CategoryShop from "@/components/Category-shop/Category-shop"
import NewModels from "@/components/NewModels/NewModels"
import HotPrices from "@/components/HotPrices/HotPrices"

export default async function Home() {
  const db = await connectToDatabase();
  const phones = await db
    .collection<Product>("products")
    .find({ year: 2022 })
    .toArray();
  const serialized = JSON.parse(JSON.stringify(phones)) as Product[];
  const hotPrices = await db.collection<Product>("products").find({}).toArray();
  const hotPricesSerialized = JSON.parse(
    JSON.stringify(hotPrices)
  ) as Product[];

  return (
    <>
      <Slider />
      <NewModels newModels={serialized} />
      <CategoryShop />
      <HotPrices hotPrices={hotPricesSerialized} />
    </>
  );
}
