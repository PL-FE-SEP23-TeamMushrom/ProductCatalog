"use client"

import Image from "next/image";
import { useState } from 'react';
import { GalleryPicture } from './GalleryPicture';

type Props = {
  images:string[],
}

export const Gallery:React.FC<Props>= ({images})=> {
    const [activeImage, setActiveImage] = useState('/'+images[0]);

    const setAsActive= (image:string) => {
        setActiveImage(image);
    }

    return (
    <div>
        <div className="grid desktop:grid-cols-desktop-gallery
        tablet:grid-cols-tablet-gallery
        mobile:grid-cols-mobile
        gap-gap">
            <div className="flex gap-2 tablet:flex-col desktop:flex-col mobile:flex-row desktop:col-span-2 tablet:col-span-1 mobile:col-span-full">
            {(images.map(im=>{return (
                <GalleryPicture key={im} 
                active={'/'+im===activeImage} image={'/'+im}
                setAsActive={setAsActive}/>
            )}))}
            </div>
            <div className="relative desktop:col-span-10 tablet:col-span-6 mobile:col-span-full aspect-square">
            <Image src={activeImage} alt="image" fill objectFit="contain" />
            </div>
        </div>
    </div>
    );
};
    