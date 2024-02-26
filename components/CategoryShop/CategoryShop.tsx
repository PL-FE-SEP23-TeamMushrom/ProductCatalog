"use client";

import Link from "next/link";
import Image from "next/image";
import mobilePhones from "../../public/mobile-phones.svg";
import tablets from "../../public/tablets.svg";
import accessories from "../../public/accessories.svg";

export default function CategoryShop() {
  return (
    <div className="my-5 px-5">
      <h2 className="font-bold text-4xl pt-20 pb-6">Shop by category</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
        <Link href="/phones">
          <Image
            src={mobilePhones}
            width={368}
            height={368}
            alt="Mobile phones"
          />
        </Link>
        <Link href="/tablets">
          <Image src={tablets} alt="Tablets" width={368} height={368} />
        </Link>
        <Link href="/accessories">
          <Image src={accessories} width={368} height={368} alt="Accessories" />
        </Link>
      </div>
    </div>
  );
}
