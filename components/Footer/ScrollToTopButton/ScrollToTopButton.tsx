'use client'

import ArrowUp from "@/public/icons/ArrowUp.svg";
import Image from "next/image";

function ScrollToTopButton() {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // This enables smooth scrolling
        });
    };

    return (
        <button
            className="border border-1 w-8 h-8 flex justify-center items-center ml-4 border-icon-color"
            onClick={handleClick}
        >
            <Image src={ArrowUp} alt="arrow up" width={16}/>
        </button>
    );
}

export default ScrollToTopButton;