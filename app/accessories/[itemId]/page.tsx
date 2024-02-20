
import Back from "@/components/Back/Back";
import Location from "@/components/Location/Location";
import About from "@/components/About/About";
import TechSpecs from "@/components/TechSpecs/TechSpecs";
import getOne from "@/utils/getOne";
import { BuyingSection } from "@/components/BuyingSection/BuyingSection";
import { Gallery } from "@/components/Gallery/Gallery";

const DetailsPage = async ({ params }: { params: { itemId: string } }) => {

    const accessory = await getOne("accessories", params.itemId)

    if (!accessory) {
        return null;
    }

    const { screen, resolution, processor, ram, camera, zoom, cell } =
    accessory;

    return (
    <>
    <Location location='accessories' name={accessory.name} />
    <Back />
    <div className="font-bold text-2xl mb-10 mt-4">
        {accessory.name}
    </div>
    <div className="grid desktop:grid-cols-desktop
    tablet:grid-cols-tablet 
    mobile:grid-cols-mobile
    gap-gap">
            <div className="desktop:col-span-12 tablet:col-span-7 mobile:col-span-full">
                <Gallery images={accessory.images}/>
            </div>
        <div className="desktop:col-span-7 tablet:col-span-5 mobile:col-span-full">
            <BuyingSection item={JSON.parse(JSON.stringify(accessory))}/>
        </div>
    </div>
    <div className="grid desktop:grid-cols-desktop 
    tablet:grid-cols-tablet 
    mobile:grid-cols-mobile
    gap-gap">
        <div className="desktop:col-span-12 tablet:col-span-full mobile:col-span-full">
        <About />
        </div>
        <div className="desktop:col-span-11 desktop:col-start-14 tablet:col-span-full mobile:col-span-full">
        <TechSpecs />
        </div>
    </div>
        {/* <Location location='accessories' name={accessory?.name} />
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
        </div> */}
        </>
    );
    };

    export default DetailsPage;
