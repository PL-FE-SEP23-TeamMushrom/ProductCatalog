import getManyWithId from "utils/getManyById";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic"; 

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const foo = JSON.parse(searchParams.get("products") || "[]");

  const res = await getManyWithId(foo);

  return Response.json({ res });
}
