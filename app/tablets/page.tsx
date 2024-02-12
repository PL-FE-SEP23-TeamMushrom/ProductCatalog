import connectToDatabase from "@/lib/connect";

export default async function Tablets() {
  const db = await connectToDatabase()

  const tablets = await db
      .collection("products")
      .find({})
      .limit(16)
      .toArray();
  
  console.log(tablets)
      
  return (
    <>
      <div>Tablets Page</div>
    </>
  );
}
