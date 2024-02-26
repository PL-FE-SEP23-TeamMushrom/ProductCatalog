"use client"
import Link from "next/link";
type Props = {
    capacity:string,
    active:boolean,
    id:string,
    activeCapacity:string,
  }

export const CapacityButton:React.FC<Props>= ({capacity,active,id,activeCapacity})=> {

const outerSquare ="px-2 py-2 flex items-center justify-center text-sm font-medium mr-2" + (active?" bg-primary-color text-white":" border border-icon-color text-primary-color hover:border-primary-color");

if (active)
return (
    <div className={outerSquare}>
        {capacity.replace('GB',' GB')}
    </div>
); else return(
    <Link className={outerSquare} href={id.replace(activeCapacity.toLowerCase(),capacity.toLowerCase())}>
        {capacity.replace('GB',' GB')}
    </Link>
    );
}