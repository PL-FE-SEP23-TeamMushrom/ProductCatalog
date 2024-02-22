import connectToDatabase from "@/lib/connect";

export default async function getManySimilar( category: Category,capacity: string, price: number ) {
    const db = await connectToDatabase()
    const result = await db
        .collection<Product>("products")
        .find({ "category":category, "capacity": capacity, price: {$gte: price*0.75,$lte:price*1.25}})
        .map(({_id, ...rest}) => (rest))
        .toArray();

    return result;
}