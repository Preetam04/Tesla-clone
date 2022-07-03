import React from "react";

function BgImage() {
  return (
    <div className="absolute left-0 right-0 top-0 bottom-0 z-10">
      <div
        style={{
          backgroundImage: `url('/images/Model-3.jpg')`,
        }}
        className="bg-no-repeat bg-cover h-[45rem] bg-center hidden sm:block"
      />
      <div
        style={{
          backgroundImage: `url('/images/model-3-mobile.jpg')`,
        }}
        className="bg-no-repeat bg-cover h-[45rem] bg-center  sm:hidden"
      />
      {/* <img src="/images/model-3-mobile.jpg" alt="" className=" sm:hidden h-f" />
      <img src="/images/Model-3.jpg" alt="" className="hidden sm:block" /> */}
    </div>
  );
}

export default BgImage;
