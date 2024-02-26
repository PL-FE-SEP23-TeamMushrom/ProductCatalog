import clientPromise from "./mongodb";

export default async function connectToDatabase() {
    const client = await clientPromise;
    
    return client.db("Phone_Catalog")
}

