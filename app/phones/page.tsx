import { Location } from "@/components/Location";
import getMany from "@/utils/getMany";
import { Suspense } from "react";
import { Sorting } from "@/components/Sorting";

export default async function Phones() {
  const phones = await getMany("phones");

  return (
    <>
      <Suspense>
        <Location location="phones" />
        <h1 className="text-4xl font-bold mx-2 mt-4 p-2">Mobile phones</h1>
        <h2 className="text-lg text-gray-700 font-bold mx-2 mb-6 p-2">
          {phones.length} models
        </h2>
        <Sorting products={phones} />
      </Suspense>
    </>
  );
}
