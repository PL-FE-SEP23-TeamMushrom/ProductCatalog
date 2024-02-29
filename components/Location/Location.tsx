import Image from "next/image";
import Link from "next/link";

interface LocationProps {
  location?: Category;
  name?: string;
}

const Location = ({ location, name }: LocationProps) => {
  const realPath = location + "?page=1";
  const squareSize = 16;

  return (
    <div className="flex items-center mt-5">
      <Link
        href={"/"}
        className="m-0 p-0"
        style={{ minHeight: "16px", minWidth: "16px" }}
      >
        <Image
          className="mr-1"
          src={"/icons/Home.svg"}
          alt="home"
          width={squareSize}
          height={squareSize}
        />
      </Link>
      {location && (
        <>
          <Image
            className="mx-1"
            src={"/icons/ArrowRightBlack.svg"}
            alt="arrow"
            width={squareSize}
            height={squareSize}
          />
          <Link href={`/${realPath}`}>
            <span className="text-xs font-700 ml-1 flex items-center">
              {location}
            </span>
          </Link>
        </>
      )}

      {name && (
        <>
          <Image
            className="mx-1"
            src={"/icons/ArrowRightBlack.svg"}
            alt="arrow"
            width={squareSize}
            height={squareSize}
          />
          <span className="text-xs text-secondary-color font-700 ml-1 flex items-center">
            {name}
          </span>
        </>
      )}
    </div>
  );
};

export default Location;
