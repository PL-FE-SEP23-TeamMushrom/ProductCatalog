
import getManyWithId from "@/utils/getManyById";

const testarray: Record<string, number>[] = [{"apple-iphone-7-plus-32gb-black": 3},{"apple-iphone-11-256gb-yellow": 1},{"apple-iphone-xs-64gb-spacegray": 2},{"apple-iphone-xr-64gb-red": 1}]


export async function GET() {
    const res = await getManyWithId(testarray);
   
    return Response.json({ res })
  }