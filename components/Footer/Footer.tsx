import Image from "next/image";
import Logo from "@/public/ui-kit/Logo.webp";
import ScrollToTopButton from "./ScrollToTopButton/ScrollToTopButton";

export default function Footer() {
    return (
        <>
            <div className="footer flex-row justify-center items-center border-t border-elements-color pt-8 my-10 w-full hidden sm:flex">
                    <div className="basis-1/3 sm:ml-8 md:ml-16 lg:ml-24">
                        <Image src={Logo} alt="logo" objectFit="contain" />
                    </div>
                    <div className="basis-1/3 flex justify-between text-secondary-color font-extrabold">
                        <a href="#" className="font-800">GITHUB</a>
                        <a href="#" className="font-800">CONTACT</a>
                        <a href="#" className="font-800">RIGHTS</a>
                    </div>
                    <div className="basis-1/3 flex justify-end text-secondary-color font-bold sm:mr-8 md:mr-16 lg:mr-24">
                        <p>Back to top</p>
                        <ScrollToTopButton />
                    </div>
            </div>
            <div className="footer flex-column border-t border-elements-color pt-8 my-10 w-full sm:hidden">
                <div className="flex flex-col ml-10 text-secondary-color">
                    <Image src={Logo} alt="logo" objectFit="contain" />
                    <a href="#" className="font-800 mt-9 mb-2">GITHUB</a>
                    <a href="#" className="font-800 my-2">CONTACT</a>
                    <a href="#" className="font-800 my-2">RIGHTS</a>
                </div>
                <div className="flex justify-center text-secondary-color font-bold mt-10">
                        <p>Back to top</p>
                        <ScrollToTopButton />
                    </div>
                
            </div>
        </>
    );
}
