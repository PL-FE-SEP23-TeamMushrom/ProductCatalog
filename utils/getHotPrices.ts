import connectToDatabase from "lib/connect";

export default async function getHotPrices() {
  const db = await connectToDatabase();
  const result = await db
    .collection<Product>("products")
    .find({ price: { $gt: 1600 } })
    .limit(16)
    .map(({ _id, ...rest }) => rest)
    .toArray();

  return result;
}