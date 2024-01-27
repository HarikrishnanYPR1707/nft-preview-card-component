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
      <div className="border">
        <h1 className="font-semibold text-white">Equilibrium #3429</h1>
        <p className="font-light text-gray-400">
          Our Equilibrium collection promotes balance and calm.
        </p>
      </div>
      {/* value and time section  */}
      <div className="">
        <p className="">0.041 ETH</p>
        <p className="">3 days left</p>
      </div>
      {/*  Divider  */}
      <div className="" />
      {/* Avatar and creator section  */}
      <div className="">
        <div className="">
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
