import NewModels from "@/components/NewModels/NewModels"
import HotPrices from "@/components/HotPrices/HotPrices"
import connectToDatabase from "@/lib/connect"
import Image from "next/image"
import Link from "next/link"
import baner from "../public/baner.png"
import mobilePhones from "../public/mobile-phones.svg"
import tablets from "../public/tablets.svg"
import accessories from "../public/accessories.svg"
import ArrowLeft from "../public/icons/ArrowLeft.svg"
import ArrowRight from "../public/icons/ArrowRight.svg"

export default async function Home() {
  const db = await connectToDatabase();
  const phones = await db
    .collection<Product>("products")
    .find({ year: 2022 })
    .toArray();
  const serialized = JSON.parse(JSON.stringify(phones)) as Product[];
  const hotPrices = await db.collection<Product>("products").find({}).toArray();
  const hotPricesSerialized = JSON.parse(
    JSON.stringify(hotPrices)
  ) as Product[];

  return (
    <>
      <div className="fit-content mx-auto header">
        <h1 className="title font-bold text-3xl sm:text-5xl lg:mt-14 sm:mt-8 lg:mb-14 sm:mb-10 welcome">
          Welcome to Nice Gadgets store!
        </h1>
        <div className="flex justify-center baner-wrapper max-content">
          <div className="in-baner p-3">
            <h2 className="baner-header text-3xl mt-6 ml-6 mr-20">
              Now available
            </h2>
            <h2 className="baner-header text-3xl ml-6 mb-2">
              in our store!
            </h2>
            <p className="text-xs ml-6">Be the first!</p>
            <button className="order-button border border-solid rounded-3xl px-7 py-3 ml-6">
              ORDER NOW
            </button>
          </div>

          <button className="flex justify-center items-center mr-4 ml-8 w-8 outline outline-1 outline-gray-200">
            <Image src={ArrowLeft} alt="<" />
          </button>

          <Image src={baner} alt="baner" className="baner" />

          <button className="flex justify-center items-center ml-4 w-8 outline outline-1 outline-gray-200 hide">
            <Image src={ArrowRight} alt=">" />
          </button>
          
        </div>
      </div>
      <NewModels newModels={serialized} />
      <div className="mx-auto w-full">
        <h2 className="font-bold text-4xl pt-20 pb-6">
          Shop by category
        </h2>
        <div className="flex gap-5 justify-center sm:flex-column">
          <Link href="/phones">
            <Image src={mobilePhones} alt="Mobile phones" className="category-image" />
          </Link>
          <Link href="/tablets">
            <Image src={tablets} alt="Tablets" className="category-image" />
          </Link>
          <Link href="/accessories">
            <Image src={accessories} alt="Accessories" className="category-image" />
          </Link>
        </div>
      </div>
      <HotPrices hotPrices={hotPricesSerialized} />
    </>
  );
}
