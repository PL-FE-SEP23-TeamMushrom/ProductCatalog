import connectToDatabase from "@/lib/connect";

export default async function getMany( category: Category ) {
    const db = await connectToDatabase()
    const result = await db
        .collection<Product>("products")
        .find({ category })
        .map(({_id, ...rest}) => (rest))
        .toArray();

    return result;
}