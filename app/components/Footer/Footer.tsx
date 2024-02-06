import Image from "next/image";
import Logo from "../../../public/ui-kit/Logo.webp";
import ArrowUp from "../../../public/icons/ArrowUp.svg";

export default function Footer() {
    return (
        <div className="footer w-1440 h-96 flex flex-row items-center border-t border-footer-gray">
            <div className="h-32">
                <div className="w-89">
                    <Image src={Logo} alt="logo" layout="fill" objectFit="contain" />
                </div>
                <div className="flex justify-between">
                    <a href="#" className="font-800">GITHUB</a>
                    <a href="#" className="font-800">CONTACT</a>
                    <a href="#" className="font-800">RIGHTS</a>
                </div>
                <div className="flex justify-end">
                    <p>Back to top</p>
                    <button className="w-32 border-1 flex justify-center items-center">
                        <Image src={ArrowUp} alt="arrow up" />
                    </button>
                </div>
            </div>
        </div>
    );
}