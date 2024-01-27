import React from "react";

const NftCardPreview = () => {
  return (
    <div className="">
      {/* image section  */}
      <div className="w-full overflow-hidden rounded-lg">
        <img src="/image-equilibrium.jpg" alt="image" />
      </div>
      {/* header and para section  */}
      <div className="">
        <h1 className=""></h1>
        <p className=""></p>
      </div>
      {/* value and time section  */}
      <div className="">
        <p className=""></p>
        <p className=""></p>
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
