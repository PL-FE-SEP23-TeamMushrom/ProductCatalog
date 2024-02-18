
import Back from "@/components/Back/Back";
import Location from "@/components/Location/Location";
import About from "@/components/About/About";
import TechSpecs from "@/components/TechSpecs/TechSpecs";
import getOne from "@/utils/getOne";
import getProductById from "@/utils/getProductById";
import { BuyingSection } from "@/components/BuyingSection/BuyingSection";

const DetailsPage = async ({ params }: { params: { itemId: string } }) => {

    const phone = await getOne("phones", params.itemId);

    console.log(phone);

    if (!phone) {
        return null;
    }
    const { screen, resolution, processor, ram, camera, zoom, cell } =
    phone;


    return (
    <>
        <Location location='phones' name={phone.name} />
        <BuyingSection item={phone}/>
        <Back />
        <About />
        <TechSpecs />
        <div className="flex flex-col py-4 md:w-400 lg:w-600">
        <div className="font-bold text-2xl mb-5">
            {phone.name}
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

    export default DetailsPage;
