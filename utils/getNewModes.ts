import connectToDatabase from "lib/connect";

export default async function getNewModels() {
  const db = await connectToDatabase();
  const result = await db
    .collection<Product>("products")
    .find({ year: 2022 })
    .limit(16)
    .map(({ _id, ...rest }) => rest)
    .toArray();

  return result;
}
