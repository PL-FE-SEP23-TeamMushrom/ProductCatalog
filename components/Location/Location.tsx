import Image from "next/image";
import Link from "next/link";

interface LocationProps {
    location: string;
    name?: string;
}

const Location = ({ location, name }: LocationProps) => {
    return (
        <div className="flex items-center" >
            <Link href={'/'} className="m-0 p-0" style={{minHeight: '16px', minWidth: '16px'}}>
                <Image className="mr-3" src={'/icons/Home.svg'} alt="home" width={16} height={16} />
            </Link>
            <Image className="mx-3" src={'/icons/ArrowRightBlack.svg'} alt="arrow" width={16} height={16} />
            <Link href={`/${location}`}>
                <span className="whitespace-nowrap">{location}</span>
            </Link>
            {name &&
                <>
                <Image className="mx-3" src={'/icons/ArrowRightBlack.svg'} alt="arrow" width={16} height={16} />
                <span className="whitespace-nowrap">{name}</span>
                </>
            }
            
        </div>
    );
};

export default Location;