import Location from "@/components/Location/Location";
import getMany from "@/utils/getMany";
import { Suspense } from "react";
import Sorting from "@/components/Sorting/Sorting";

export default async function Phones() {
  const phones = await getMany("phones");

  return (
    <>
      <Suspense>
        <Location location="phones" />
        <Sorting phones={phones} />
      </Suspense>
    </>
  );
}
