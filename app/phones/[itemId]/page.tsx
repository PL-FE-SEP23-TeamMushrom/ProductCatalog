
import Back from "@/components/Back/Back";
import Location from "@/components/Location/Location";
import connectToDatabase from "@/lib/connect";
import { FullProductInfo } from "@/lib/types/fullProductInfo";

const TechSpecs = async ({ params }: { params: { itemId: string } }) => {

    const db = await connectToDatabase();
    const Data = await db.collection<FullProductInfo>("phones").findOne({ id: params.itemId });
    const { name, screen, resolution, processor, ram, camera, zoom, cell } =
        Data as FullProductInfo;


    // aby uzyskać dane o tym co gdzie jest używamy cudownego:
    console.log(Data);


    return (
    <>
        <Location location='phones' name={name} />
        <Back />
        <div className="flex flex-col py-4 md:w-400 lg:w-600">
        <div className="font-bold text-2xl mb-5">
            {name}
        </div>
        <hr className="border-t-2" />
        <div className="mt-10 mb-5">
            <div className="flex justify-between">
            <div className="text-gray-400">Screen</div>
            <div className="text-gray-700">{screen}</div>
            </div>
            <div className="flex justify-between">
            <div className="text-gray-400">Resolution</div>
            <div className="text-gray-700">{resolution}</div>
            </div>
            <div className="flex justify-between">
            <div className="text-gray-400">Processor</div>
            <div className="text-gray-700">{processor}</div>
            </div>
            <div className="flex justify-between">
            <div className="text-gray-400">RAM</div>
            <div className="text-gray-700">{ram}</div>
            </div>
            <div className="flex justify-between">
            <div className="text-gray-400">Built in memory</div>
            <div className="text-gray-700">64 GB</div>
            </div>
            <div className="flex justify-between">
            <div className="text-gray-400">Camera</div>
            <div className="text-gray-700">{camera}</div>
            </div>
            <div className="flex justify-between">
            <div className="text-gray-400">Zoom</div>
            <div className="text-gray-700">{zoom}</div>
            </div>
            <div className="flex justify-between">
            <div className="text-gray-400">Cell</div>
            <div className="text-gray-700">{cell.slice(0, 3).join(", ")}</div>
            </div>
        </div>
        </div>
        </>
    );
    };

    export default TechSpecs;
