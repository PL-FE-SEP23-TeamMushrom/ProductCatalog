
import { NewModels } from "components/NewModels";
import { HotPrices } from "components/HotPrices";
import { Banner } from "components/Banner";
import { CategoryShop } from "components/CategoryShop";
import getNewModels from "@/utils/getNewModes";
import getHotPrices from "@/utils/getHotPrices";

export default async function Home() {
  const phones = await getNewModels()

  const hotPrices = await getHotPrices()

  return (
    <div className="flex flex-col items-center justify-center max-w-full mx-auto my-10 xs:w-full sm:w-full">
      <Banner />
      <NewModels newModels={phones} />
      <CategoryShop />
      <HotPrices hotPrices={hotPrices} />
    </div>
  );
}
