import connectToDatabase from "@/lib/connect";
import { FullProductInfo } from "@/lib/types/fullProductInfo";

export default async function getOne( category: Category, itemId: string ) {
    const db = await connectToDatabase()
    const result = await db.collection<FullProductInfo>(category).findOne({ id: itemId });


    return result;
}