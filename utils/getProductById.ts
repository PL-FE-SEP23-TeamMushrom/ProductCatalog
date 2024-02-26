
import connectToDatabase from "@/lib/connect";

export default async function getProductById( itemId: number  ) {
    const db = await connectToDatabase()
    const result = await db
        .collection<Product>("products")
        .findOne({ id: itemId });

    return result;
}