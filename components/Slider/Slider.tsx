"use client"

import Carousel from "react-material-ui-carousel"
import banerImage from "../../public/baner.png"
import Baner from "@/components/Baner/Baner"

export default function Slider() {
    const baner1 = {
        banerImage: banerImage,
        caption1: "Now available",
        caption2: "in our store!"
    }

    const baner2 = {
        banerImage: banerImage,
        caption1: "See our newest",
        caption2: "trending models!"
    }

    const baners = [baner1, baner2]

    return (
        <div className='baner-container'>
            <div className='baner-wrap'>
                <h1 className="title font-bold text-3xl sm:text-5xl lg:mt-14 sm:mt-8 lg:mb-14 sm:mb-10 welcome">
                    Welcome to Nice Gadgets store!
                </h1>
                <Carousel navButtonsAlwaysVisible={true}>
                    {baners.map((baner, index) => (
                        <Baner key={index} params={baner} />
                    ))}
                </Carousel>
            </div>
        </div>
    )
}
