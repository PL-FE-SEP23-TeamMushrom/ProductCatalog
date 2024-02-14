import Image from "next/image";
import Link from "next/link";
import Pagination from "@/components/Pagination/Pagination";
import ProductCard from "../components/ProductCard/ProductCard"
import baner from "../public/baner.svg"
import mobilePhones from "../public/mobile-phones.svg"
import tablets from "../public/tablets.svg"
import accessories from "../public/accessories.svg"
import ArrowLeft from "../public/icons/ArrowLeft.svg"
import ArrowRight from "../public/icons/ArrowRight.svg"

export default function Home() {
  return <div className="flex justify-center">
    <Pagination grid={false}>
      <h1 className="title font-bold text-5xl mt-40 mb-14">
        Welcome to Nice Gadgets store!
      </h1>
      <div className="flex justify-center">
        <button className="move-button flex justify-center items-center mr-4 w-8 outline outline-1 outline-gray-200">
          <Image src={ArrowLeft} alt="<" />
        </button>
        <Image src={baner} alt="baner" className="" />
        <button className="move-button flex justify-center items-center ml-4 w-8 outline outline-1 outline-gray-200">
          <Image src={ArrowRight} alt=">" />
        </button>
      </div>
      <div>
        <h2 className="font-bold text-4xl pt-20 pb-6">
          Brand new models
        </h2>
        <div className="flex gap-5 justify-center">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <div>
        <h2 className="font-bold text-4xl pt-20 pb-6">
          Shop by category
        </h2>
        <div className="flex gap-5 justify-center">
          <Link href="/phones">
            <Image src={mobilePhones} alt="Mobile phones" />
          </Link>
          <Link href="/tablets">
            <Image src={tablets} alt="Tablets" />
          </Link>
          <Link href="/accesories">
            <Image src={accessories} alt="Accessories" />
          </Link>
        </div>
      </div>
      <div className="pb-12">
        <h2 className="font-bold text-4xl pt-20 pb-6">
          Hot prices
        </h2>
        <div className="flex gap-5 justify-center">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </Pagination>
  </div>
}
