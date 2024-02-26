import { Location } from "@/components/Location";
import { Sorting } from "@/components/Sorting";
import getMany from "@/utils/getMany";
import { Suspense } from "react";

export default async function Tablets() {
  const tablets = await getMany("tablets");

  return (
    <>
      <Suspense>
        <Location location="tablets" />
        <h1 className="text-4xl font-bold mx-2 mt-4 p-2">Tablets</h1>
        <h2 className="text-lg text-gray-700 font-bold mx-2 mb-6 p-2">
          {tablets.length} models
        </h2>
        <Sorting products={tablets} />
      </Suspense>
    </>
  );
}
        
    