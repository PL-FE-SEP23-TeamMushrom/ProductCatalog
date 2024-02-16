
import Location from "@/components/Location/Location";
import getOne from "@/utils/getOne";

const TechSpecs = async ({ params }: { params: { itemId: string } }) => {

    const accessory = await getOne("accessories", params.itemId)

    if (!accessory) {
        return null;
    }

    const { screen, resolution, processor, ram, camera, zoom, cell } =
    accessory;

    return (
    <>
        <Location location='accessories' name={accessory?.name} />
        <div className="flex flex-col py-4 md:w-400 lg:w-600">
            
        <div className="font-bold text-2xl mb-5">
            <h1>{accessory?.name}</h1>
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
