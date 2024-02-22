"use client";

import banerLarge from "../../public/baner.png";
import banerSmall from "../../public/baner-small.png";
import ArrowLeft from "@/public/icons/ArrowLeft.svg";
import ArrowRight from "@/public/icons/ArrowRight.svg";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

export default function Slider() {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  return (
    <>
      <div className="flex justify-between my-5 xs:px-5 xs:w-full sm:w-full md:w-900 lg:w-900 xl:w-1150 2xl:max-w-1150">
        <h1 className="font-bold text-4xl">Welcome to Nice Gadgets store!</h1>
      </div>
      <div className="mx-auto my-10 xs:w-full xs:px-5 sm:w-full md:w-900 lg:w-900 xl:w-1150 2xl:max-w-1150">
        <div className="flex">
          <button className="hidden md:block max-w-650 border border-gray-300 mr-4">
            <Image
              src={ArrowLeft}
              alt="arrow left icon"
              width={32}
              height={32}
            ></Image>
          </button>
          <div className="relative h-[400px] w-[1040px] mx-auto">
            <div>
              {isMobile ? (
                <div className="">
                  <div className="w-full text-center bg-black mb-[-20px] p-4">
                    <h2 className="text-4xl font-bold text-purple my-4">
                      Now available in our store!
                    </h2>
                  </div>
                  <Image
                    src={banerSmall}
                    alt="iPhone 14 Pro"
                    className="max-h-[316px]"
                  />
                </div>
              ) : (
                <Image
                  src={banerLarge}
                  layout="fill"
                  objectFit="cover"
                  alt="iPhone 14 Pro"
                />
              )}
            </div>
            <div className="hidden lg:absolute top-5 left-5 w-[360px] h-[360px] rounded-lg lg:flex flex-col p-4 bg-gray-800">
              <h2 className="text-4xl font-bold text-purple my-4">
                Now available in our store!👌
              </h2>
              <h2 className="text-2xl my-2 text-white">Be the first!</h2>
              <Link href="/phones" className="mt-10">
                <button className="text-md mt-4 bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 focus:outline-none border border-gray-300">
                  ORDER NOW
                </button>
              </Link>
            </div>
          </div>
          <button className="hidden md:block max-w-650 border border-gray-300 ml-4">
            <Image
              src={ArrowRight}
              alt="arrow right icon"
              width={32}
              height={32}
            ></Image>
          </button>
        </div>
      </div>
    </>
  );
}
