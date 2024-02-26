import connectToDatabase from "@/lib/connect";

export default async function getManyWithId( array: Array<Record<string, number>> ) {
    const db = await connectToDatabase()

    const changedToArray = array.map((item) => {
        return Object.keys(item)[0]
    })

    const result = await db
        .collection<Product>("products")
        .find({
            itemId: { $in: changedToArray }
          })
        .map(({_id, ...rest}) => (rest))
        .toArray();

    return result;
}