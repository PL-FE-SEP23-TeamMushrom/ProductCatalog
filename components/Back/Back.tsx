
"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

const Back = () => {
    const router = useRouter()

    return (
        <div className="back col-span-full mt-10">
            <button className="flex items-center flex-row" onClick={() => router.back()}>
                <Image src={'/icons/ArrowLeftBlack.svg'} alt="arrow left" width={16} height={16}/>
                <p className="text-xs text-secondary-color font-700 ml-1 flex items-center">Back</p>
            </button>
        </div>
    );
};

export default Back;