import NewModels from "@/components/NewModels/NewModels";
import HotPrices from "@/components/HotPrices/HotPrices";
import connectToDatabase from "@/lib/connect";

import getManyWithYear from "@/utils/getManyWithFind";

export default async function Home() {
  const phones = await getManyWithYear(2022);

  const hotPrices = await db.collection<Product>("products").find({}).toArray();
  const hotPricesSerialized = JSON.parse(
    JSON.stringify(hotPrices)
  ) as Product[];
  return (
    <>
      <NewModels newModels={phones} />
      <HotPrices hotPrices={hotPricesSerialized} />
    </>
  );
}
