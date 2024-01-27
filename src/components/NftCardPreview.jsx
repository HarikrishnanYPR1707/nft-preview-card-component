import React from "react";

const NftCardPreview = () => {
  return (
    <div className="bg-fmLigntBlue rounded-2xl p-6">
      {/* image section  */}
      <div className="w-full overflow-hidden rounded-lg">
        <img src="/image-equilibrium.jpg" alt="image" />
      </div>
      {/* header and para section  */}
      <div className="">
        <h1 className="">Equilibrium #3429</h1>
        <p className="">
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
