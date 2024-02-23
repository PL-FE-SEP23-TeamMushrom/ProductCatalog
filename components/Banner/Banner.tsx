"use client";

import banerLarge from "@/public/banner.webp";
import banerAccesory from "@/public/img/banner-accessories.webp";
import banerPhone from "@/public/img/banner-phones.webp";
import banerTablet from "@/public/img/banner-tablets.webp";
import banerMobile from "@/public/baner-small.webp";
import banerMobileAccesory from "@/public/img/mobile-banner-accessories.webp";
import banerMobilePhone from "@/public/img/mobile-banner-phones.webp";
import banerMobileTablet from "@/public/img/mobile-banner-tablets.webp";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <>
    <Carousel className="block sm:hidden">
        <Link href={`/phones`}>
            <div className="aspect-w-16 aspect-h-9">
                <Image src={banerMobile} alt='banner' className="object-cover"/>
            </div>  
        </Link>
        <Link href={`/accessories`}>
            <div className="aspect-w-16 aspect-h-9">
                <Image src={banerMobileAccesory} alt='banner' className="object-cover"/>
            </div>
        </Link>
        <Link href={`/phones`}>
            <div className="aspect-w-16 aspect-h-9">
                <Image src={banerMobilePhone} alt='banner' className="object-cover" />
            </div>
        </Link>
        <Link href={`/tablets`}>
            <div className="aspect-w-16 aspect-h-9">
                <Image src={banerMobileTablet} alt='banner' className="object-cover" />
            </div>
        </Link>
    </Carousel>
    <Carousel className="hidden sm:block max-w-screen-xl">
        <Link href={`/phones`}>
            <div className="aspect-w-16 aspect-h-9">
                <Image src={banerLarge} alt='banner' className="object-cover"/>
            </div>
        </Link>
        <Link href={`/accessories`}>
            <div className="aspect-w-16 aspect-h-9">
                <Image src={banerAccesory} alt='banner' className="object-cover"/>
            </div>
        </Link>
        <Link href={`/phones`}>
            <div className="aspect-w-16 aspect-h-9">
                <Image src={banerPhone} alt='banner' className="object-cover" />
            </div>
        </Link>
        <Link href={`/tablets`}>
            <div className="aspect-w-16 aspect-h-9">
                <Image src={banerTablet} alt='banner' className="object-cover" />
            </div>
        </Link>
    </Carousel>
  </>
  );
}
