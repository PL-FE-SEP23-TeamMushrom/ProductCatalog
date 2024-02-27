import connectToDatabase from "lib/connect";

export default async function getManyWithStringArray(array: string[]) {
  const db = await connectToDatabase();

  const result = await db
    .collection<Product>("products")
    .find({
      itemId: { $in: array },
    })
    .map(({ _id, ...rest }) => rest)
    .toArray();

  return result;
}
