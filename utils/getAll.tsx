import connectToDatabase from "@/lib/connect";

export default async function getAll() {
    const db = await connectToDatabase()
    const result = await db
        .collection<Product>("products")
        .find()
        .map(({_id, ...rest}) => (rest))
        .toArray();

    return result;
}