const CardSkeleton = () => {
    return (
      <div className="card w-272 h-506 flex flex-col items-center border-2 border-gray-200 rounded-lg overflow-hidden isolate">
        <div  className=" relative w-272 h-506  before:absolute before:inset-0  before:-translate-x-full    before:animate-[shimmer_2s_infinite]    before:bg-gradient-to-r    before:from-transparent before:via-gray-300/30 before:to-transparent"></div>
      </div>
    );
  };
  
  export default CardSkeleton;
  