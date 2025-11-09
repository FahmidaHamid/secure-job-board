import React from "react";

const AdvertCard = () => {
  return (
    <div className="flex flex-col justify-center p-3 rounded-xl text-white overflow-hidden">
      <div className="flex items-center justify-between z-10">
        <div>
          <h2 className="text-2xl font-bold mb-.5">Kirby</h2>
          <p className="text-xs opacity-70">Star Alias</p>
        </div>
        <div className="bg-[rgba(0,0,0,0.4)] flex items-center pl-1 pr-2 py-1 rounded-3xl gap-2">
          <div className="icon h-[25px] w-[25px] rounded-full grid place-content-center"></div>
        </div>
      </div>
    </div>
  );
};

export default AdvertCard;
