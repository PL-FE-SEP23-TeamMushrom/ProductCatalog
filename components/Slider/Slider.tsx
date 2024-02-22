"use client";

import banerLarge from "../../public/Banner.svg";
import banerSmall from "../../public/Banner-small.svg";
import ArrowLeft from "@/public/icons/ArrowLeft.svg";
import ArrowRight from "@/public/icons/ArrowRight.svg";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

export default function Slider() {
  const isMobile = useMediaQuery({ maxWidth: 550 });
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
          <div className="relative">
            <Link
              href="/phones"
              className="absolute bottom-9 left-16 w-[240px] h-[70px] flex items-center justify-center"
            >
              <button className="text-white bg-transparent"></button>
            </Link>
            {isMobile ? (
              <div className="ml-12 p-4">
                <Link href="/phones">
                  <Image
                    src={banerSmall}
                    width={320}
                    height={320}
                    alt="iPhone 14 Pro"
                  />
                </Link>
              </div>
            ) : (
              <Image src={banerLarge} objectFit="cover" alt="iPhone 14 Pro" />
            )}
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
