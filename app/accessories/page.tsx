import { Location } from "@/components/Location";
import { Sorting } from "@/components/Sorting";
import getMany from "@/utils/getMany";
import { Suspense } from "react";

export default async function Accesories() {
  const accessories = await getMany("accessories");

  return (
    <>
      <Suspense>
        <Location location="tablets" />
        <h1 className="text-4xl font-bold mx-2 mt-4 p-2">Accessories</h1>
        <h2 className="text-lg text-gray-700 font-bold mx-2 mb-6 p-2">
          {accessories.length} models
        </h2>
        <Sorting products={accessories} />
      </Suspense>
    </>
  );
}
    
