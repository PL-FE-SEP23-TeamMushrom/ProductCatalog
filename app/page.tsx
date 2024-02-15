import NewModels from "@/components/NewModels/NewModels";
import connectToDatabase from "@/lib/connect";

export default async function Home() {
  const db = await connectToDatabase();
  const phones = await db
    .collection<Product>("products")
    .find({ year: 2022 })
    .toArray();

  return (
    <>
      <NewModels newModels={phones} />
    </>
  );
}
