import connectToDatabase from "@/lib/connect";

export const getItems = async (collection: string, limit?: number) => {
    const db = await connectToDatabase()

    const phones = await db
        .collection(collection)
        .find({})
        .limit(limit || 16)
        .toArray();

    return phones
}