import { Back } from "@/components/Back";
import { Location } from "@/components/Location";
import { About } from "@/components/About";
import { TechSpecs } from "@/components/TechSpecs";
import getOne from "@/utils/getOne";
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
    <div className="flex flex-col items-center">
        <div className="grid desktop:grid-cols-desktop 
        tablet:grid-cols-tablet 
        mobile:grid-cols-mobile
        gap-gap">
            <div className="col-span-full">
                <Location location='phones' name={phone.name} />
                <Back />
                <div className="font-bold text-2xl mb-10 mt-4">
                {phone.name}
                </div>
            </div>
        </div>
        <div className="grid desktop:grid-cols-desktop
        tablet:grid-cols-tablet 
        mobile:grid-cols-mobile
        gap-gap">
            <div className="desktop:col-span-12 tablet:col-span-7 mobile:col-span-full">
                <Gallery images={phone.images}/>
            </div>
            <div className="desktop:col-start-14 tablet:col-start-8 desktop:col-span-7 tablet:col-span-5 mobile:col-span-full">
                <BuyingSection item={JSON.parse(JSON.stringify(phone))} itemId={params.itemId}/>
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
            <div className="grid desktop:grid-cols-desktop 
            tablet:grid-cols-tablet 
            mobile:grid-cols-mobile
            gap-gap">
                <div className="col-span-full">
                <Recommended recommended={recommendedSerialized} itemPrice={phone.priceDiscount} />
                </div>
            </div>
        </div>
    );
    };

    export default DetailsPage;
