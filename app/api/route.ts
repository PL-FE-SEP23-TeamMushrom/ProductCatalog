
import getManyWithId from "@/utils/getManyById";
import { NextRequest } from "next/server";

export const dynamic = 'force-dynamic' // defaults to auto

const testarray: Record<string, number>[] = [{"apple-iphone-7-plus-32gb-black": 3},{"apple-iphone-11-256gb-yellow": 1},{"apple-iphone-xs-64gb-spacegray": 2},{"apple-iphone-xr-64gb-red": 1}]


export async function GET(req: NextRequest) {

    // Search Params
    const searchParams = req.nextUrl.searchParams;
    const foo = JSON.parse(searchParams.get('products') || "[]");
    
    const res = await getManyWithId(foo);
   
    return Response.json({ res })
  }
