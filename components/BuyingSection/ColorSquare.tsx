"use client"
import Link from "next/link";
type Props = {
    color:string,
    active:boolean,
    id:string,
    activeColor:string,
  }

export const ColorSquare:React.FC<Props>= ({color,active,id,activeColor})=> {

//bez jawnego wypisania kolorow nie chca sie skomplilowac i sie nie wyswietlaja, bug tailwinda?
const bgCompile="bg-yellow bg-spacegray bg-red bg-silver bg-pink bg-gold bg-purple bg-rosegold bg-midnightgreen bg-blue bg-starlight bg-green bg-midnight bg-space-gray bg-coral bg-graphite bg-spaceblack bg-sky-blue bg-sierrablue primary-color";
const bgColor="bg-"+color.replace(" ","");

const outerSquare ="w-8 h-8 flex items-center justify-center rounded-full border border-1 border-elements-color" + (active?" border-primary-color":" hover:border-icon-color");
const innerSquare=`w-6 h-6 rounded-full ${bgColor}`;

if (active)
return (
    <div className={outerSquare}>
        <div className={innerSquare}>
        </div>
    </div>
); else return(
    <Link className={outerSquare} href={id.replace(activeColor,color)}>
        <div className={innerSquare}>
        </div>
    </Link>
    );
}