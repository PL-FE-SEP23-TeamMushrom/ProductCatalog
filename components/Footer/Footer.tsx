import Image from "next/image";
import Logo from "@/public/ui-kit/Logo.webp";
import ArrowUp from "@/public/icons/ArrowUp.svg";

export default function Footer() {
  return (
    <div className="footer flex flex-row items-center border-t border-elements-color pt-8 mt-20 p-6">
      <div className="basis-1/3">
        <Image src={Logo} alt="logo" objectFit="contain" />
      </div>
      <div className="basis-1/3 flex justify-between text-secondary-color font-extrabold">
        <a href="#" className="font-800">
          GITHUB
        </a>
        <a href="#" className="font-800">
          CONTACT
        </a>
        <a href="#" className="font-800">
          RIGHTS
        </a>
      </div>
      <div className="basis-1/3 flex justify-end text-secondary-color font-bold">
        <p>Back to top</p>
        <button className="border border-1 w-8 h-8 flex justify-center items-center ml-4 border-icon-color">
          <Image src={ArrowUp} alt="arrow up" width={16} />
        </button>
      </div>
    </div>
  );
}
