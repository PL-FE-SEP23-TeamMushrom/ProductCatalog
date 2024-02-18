"use client"

import Link from "next/link";
import Image from "next/image";
import mobilePhones from "../../public/mobile-phones.svg"
import tablets from "../../public/tablets.svg"
import accessories from "../../public/accessories.svg"

export default function CategoryShop() {
    return <div className="fit-content mx-auto header">
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
    </div>
}
