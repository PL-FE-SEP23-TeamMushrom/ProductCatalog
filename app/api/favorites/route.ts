
import getManyWithId from "@/utils/getManyById";
import getManyWithStringArray from "@/utils/getManyWithStringArray";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic' // defaults to auto

const testarray: string[] = ["apple-iphone-7-plus-32gb-black", "apple-iphone-11-256gb-yellow", "apple-iphone-xs-64gb-spacegray", "apple-iphone-xr-64gb-red"]


export async function GET(req: NextRequest) {

    // Search Params
    const searchParams = req.nextUrl.searchParams;
    const foo = JSON.parse(searchParams.get('products') || "[]");
    
    const res = await getManyWithStringArray(foo);
   
    return Response.json({ res })
  }
  // req: NextRequest