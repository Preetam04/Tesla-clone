import React from "react";

function Header() {
  const style = {
    container:
      "absolute z-10 left-0 right-0 flex items-center justify-between mx-3  xl:mx-5 mt-2.5",
    navEle:
      "font-Gottham-medium hover:bg-[#37393e] hover:bg-opacity-[7%] px-3 py-2.5  rounded-[13.5px] text-[15px] cursor-pointer duration-300 w-fit ",
  };

  return (
    <nav className={style.container}>
      <a href="/">
        <img src="/images/logo.svg" alt="" className="w-[11rem] p-5 " />
      </a>

      <div className="w-[42rem] justify-between hidden xl:flex ">
        <p className={style.navEle + " hidden xl:block "}>Model S</p>
        <p className={style.navEle + " hidden xl:block"}>Model 3</p>
        <p className={style.navEle + " hidden xl:block"}>Model X</p>
        <p className={style.navEle + " hidden xl:block"}>Model Y</p>
        <p className={style.navEle + " hidden xl:block"}>Solar Roof</p>
        <p className={style.navEle + " hidden xl:block"}>Solar Panels</p>
      </div>
      <div className="flex justify-around w-fit xl:w-64">
        <p className={style.navEle + " hidden xl:block"}>Shop</p>
        <p className={style.navEle + " hidden xl:block"}>Account</p>
        <p
          className={
            style.navEle + " bg-[#37393e] bg-opacity-10 xl:bg-transparent"
          }
        >
          Menu
        </p>
      </div>
    </nav>
  );
}

export default Header;
