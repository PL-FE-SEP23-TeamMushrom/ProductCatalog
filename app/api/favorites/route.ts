
import getManyWithStringArray from "@/utils/getManyWithStringArray";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {

    const searchParams = req.nextUrl.searchParams;
    const foo = JSON.parse(searchParams.get('products') || "[]");
    
    const res = await getManyWithStringArray(foo);
   
    return Response.json({ res })
  }
