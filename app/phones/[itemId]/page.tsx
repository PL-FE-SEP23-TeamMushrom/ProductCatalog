import connectToDatabase from "@/lib/connect"
import Back from "@/components/Back/Back";
import Location from "@/components/Location/Location";
import About from "@/components/About/About";
import TechSpecs from "@/components/TechSpecs/TechSpecs";
import getOne from "@/utils/getOne";

import getProductById from "@/utils/getProductById";
import getManySimilar from "@/utils/getManySimilar";

import { BuyingSection } from "@/components/BuyingSection/BuyingSection";
import { Gallery } from "@/components/Gallery/Gallery";
import { Recommended } from "@/components/Recommended/Recommended";

const DetailsPage = async ({ params }: { params: { itemId: string } }) => {

    const phone = await getOne("phones", params.itemId);

    if (!phone) {
        return null;
    }

    const recommended = await getManySimilar("phones",phone.capacity,phone.priceDiscount);
    const recommendedSerialized = JSON.parse(
      JSON.stringify(recommended)
    ) as Product[];

    return (
    <>
        <Location location='phones' name={phone.name} />
        <Back />
        <div className="font-bold text-2xl mb-10 mt-4">
            {phone.name}
        </div>
        <div className="grid desktop:grid-cols-desktop
        tablet:grid-cols-tablet 
        mobile:grid-cols-mobile
        gap-gap">
            <div className="desktop:col-span-12 tablet:col-span-7 mobile:col-span-full">
                <Gallery images={phone.images}/>
            </div>
            <div className="desktop:col-span-7 desktop:col-start-14 tablet:col-span-5 mobile:col-span-full">
                <BuyingSection item={JSON.parse(JSON.stringify(phone))}/>
            </div>
        </div>
        <div className="grid desktop:grid-cols-desktop 
        tablet:grid-cols-tablet 
        mobile:grid-cols-mobile
        gap-gap">
            <div className="desktop:col-span-12 tablet:col-span-full mobile:col-span-full">
            <About />
            </div>
            <div className="desktop:col-span-full desktop:col-start-14 tablet:col-span-full mobile:col-span-full">
            <TechSpecs />
            </div>
        </div>
        <Recommended recommended={recommendedSerialized} itemPrice={phone.priceDiscount} />

        </>
    );
    };

    export default DetailsPage;
