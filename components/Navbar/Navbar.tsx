"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import { useState } from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { SignedOut, SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const pathname = usePathname();

  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive); 
  };

  return (
    <>
      <header id="top" className="w-full flex border-b justify-between">
        <div className="wrapper flex items-center">
          <Link href={"/"}>
            <Image
              className="max-w-none"
              width={100}
              height={100}
              src={"/home.svg"}
              alt="home image"
            />
          </Link>
          <Link
            href={"/"}
            className={`${styles.normalLink} ${
              pathname === "/" ? styles.customLink : ""
            }`}
          >
            <div>Home</div>
          </Link>
          <Link
            href={"/phones?page=1"}
            className={`${styles.normalLink} ${
              pathname === "/phones" ? styles.customLink : ""
            }`}
          >
            <div>Phones</div>
          </Link>
          <Link
            href={"/tablets?page=1"}
            className={`${styles.normalLink} ${
              pathname === "/tablets" ? styles.customLink : ""
            }`}
          >
            <div>Tablets</div>
          </Link>
          <Link
            href={"/accessories?page=1"}
            className={`${styles.normalLink} ${
              pathname === "/accessories" ? styles.customLink : ""
            }`}
          >
            <div>Accessories</div>
          </Link>
        </div>
        <div className="flex items-center border-x border-gray-300">
          <div
            className={`${styles.hamburgermenu} ${
              isActive ? styles.active : ""
            }`}
            onClick={toggleActive}
          >
            <span className={`${styles.bar} ${styles.bar1}`}></span>
            <span className={`${styles.bar} ${styles.bar2}`}></span>
            <span className={`${styles.bar} ${styles.bar3}`}></span>
          </div>
          <Link
            href={"/favourites"}
            className="hidden items-center h-full border-x border-gray-300 sm:flex"
          >
            <Image
              className={`${styles.normalimage} `}
              width={20}
              height={20}
              src={"/icons/Heart.svg"}
              alt="favourites image"
            />
          </Link>
          <Link
            href={"/cart"}
            className="flex items-center h-full border-x border-gray-300"
          >
            <Image
              className="px-4 py-3 box-content"
              width={20}
              height={20}
              src={"/icons/shop.svg"}
              alt="cart image"
            />
          </Link>
          <div className="flex items-center justify-center px-[8px] py-[8px]">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <Link href="/sign-in">
                <Image
                  className="box-content px-[8px] py-[8px]"
                  width={20}
                  height={20}
                  src="/icons/login.png"
                  alt="login icon"
                />
              </Link>
            </SignedOut>
          </div>
        </div>
      </header>
      {isActive && <BurgerMenu />}
    </>
  );
};

export default Navbar;
