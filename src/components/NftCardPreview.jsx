import React from "react";

const NftCardPreview = () => {
  return (
    <div className="bg-fmLigntBlue font-specimen max-w-[350px] rounded-2xl p-6">
      {/* image section  */}
      <div className="group relative mb-6 w-full overflow-hidden rounded-lg">
        <img src="/image-equilibrium.jpg" alt="image" />
        <div className="bg-fmCyan absolute inset-0 hidden bg-opacity-50 group-hover:grid group-hover:place-content-center">
          <img src="/icon-view.svg" alt="image" />
        </div>
      </div>
      {/* header and para section  */}
      <div className="">
        <h1 className="mb-3 text-[22px] font-medium text-white">
          Equilibrium #3429
        </h1>
        <p className="font-light text-gray-400">
          Our Equilibrium collection promotes balance and calm.
        </p>
      </div>
      {/* value and time section  */}
      <div className="mb-2 mt-3 flex items-center justify-between text-base">
        <p className="flex items-center justify-between">
          <span className="mr-2">
            <img src="./icon-ethereum.svg" alt="" />
          </span>
          <span className="text-fmCyan">0.041 ETH</span>
        </p>
        <p className="flex items-center justify-between">
          <span className="mr-2">
            <img src="./icon-clock.svg" alt="" />
          </span>
          <span className="text-[#8BACD9]">3 days left</span>
        </p>
      </div>
      {/*  Divider  */}
      <div className="mt-2 h-[1px] w-full bg-[#2b3d55]" />
      {/* Avatar and creator section  */}
      <div className="flex items-center justify-start">
        <div className="w-[35px]">
          <img src="/image-avatar.png" alt="avatar" />
        </div>
        <p className="">
          Creation of <span className="">Jules Wyvern</span>
        </p>
      </div>
    </div>
  );
};

export default NftCardPreview;
