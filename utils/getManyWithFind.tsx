import connectToDatabase from "@/lib/connect";

export default async function getManyWithYear( year: number ) {
    const db = await connectToDatabase()
    const result = await db
        .collection<Product>("products")
        .find({ year })
        .map(({_id, ...rest}) => (rest))
        .toArray();

    return result;
}