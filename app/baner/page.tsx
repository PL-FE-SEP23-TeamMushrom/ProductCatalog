"use client"

import Image from "next/image"
import { StaticImport } from "next/dist/shared/lib/get-img-props"

interface props {
    banerImage: string | StaticImport
    caption1: string
    caption2: string
}

export default function Baner(props: props) {
    const { banerImage, caption1, caption2 } = props

    return <div>
        <div className="flex justify-center baner-wrapper max-content baner-whole">
            <div className="in-baner p-3">
                <h2 className="baner-header text-3xl mt-6 ml-6 mr-20">
                    {caption1}
                </h2>
                <h2 className="baner-header text-3xl ml-6 mb-2">
                    {caption2}
                </h2>
                <p className="text-xs ml-6">Be the first!</p>
                <button className="order-button border border-solid rounded-3xl px-7 py-3 ml-6">
                    ORDER NOW
                </button>
            </div>
            <Image src={banerImage} alt="baner" className="baner" />
        </div>
    </div>
}
