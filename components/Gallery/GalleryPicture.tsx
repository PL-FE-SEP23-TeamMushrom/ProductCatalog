"use client"

import Image from "next/image";

type Props = {
  active:boolean,
  image:string,
  setAsActive: (image:string) =>void,
}

export const GalleryPicture:React.FC<Props>= ({active,image,setAsActive})=> {
    
    const options = "flex justify-center items-center relative border desktop:aspect-square tablet:aspect-square mobile:aspect-square mobile:w-51 mobile:h-49"
    + (active?" border-primary-color":" border-elements-color");
    return (
    <button className={options} onClick={()=>setAsActive(image)}>
        <Image src={image} alt="image" fill objectFit="contain"/> 
    </button>  
    );
};