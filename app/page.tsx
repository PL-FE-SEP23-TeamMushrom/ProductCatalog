import connectToDatabase from "@/lib/connect";
import { NewModels } from "@/components/NewModels";
import { HotPrices } from "@/components/HotPrices";
import { Banner } from "@/components/Banner";
import { CategoryShop } from "@/components/CategoryShop";

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
    <div className="flex flex-col items-center justify-center max-w-full mx-auto my-10 xs:w-full sm:w-full">
      <Banner />
      <NewModels newModels={serialized} />
      <CategoryShop />
      <HotPrices hotPrices={hotPricesSerialized} />
    </div>
  );
}
