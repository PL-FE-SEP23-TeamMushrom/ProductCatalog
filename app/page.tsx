import NewModels from "@/components/NewModels/NewModels";
import getManyWithYear from "@/utils/getManyWithFind";

export default async function Home() {
  const phones = await getManyWithYear(2022);
  
  const serialized = JSON.parse(JSON.stringify(phones)) as Product[];
  const hotPrices = await db.collection<Product>("products").find({}).toArray();
  const hotPricesSerialized = JSON.parse(
    JSON.stringify(hotPrices)
  ) as Product[];
 
  return (
    <>
      <NewModels newModels={serialized} />
      <HotPrices hotPrices={hotPricesSerialized} />
    </>
  );
}
