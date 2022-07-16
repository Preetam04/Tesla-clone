import { React, useState } from "react";
import Menu from "./Menu";

function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  const style = {
    container:
      "fixed z-10 left-0 right-0 bottom-0 top-0 flex items-center justify-between mx-3  xl:mx-5 mt-2.5 bg-transparent h-16 ",
    navEle:
      "font-Gottham-medium hover:bg-[#37393e] hover:bg-opacity-[7%] px-3 py-2  rounded-[13.5px] text-[14px] cursor-pointer duration-300 w-fit ",
  };

  const arr1 = [
    "Model S",
    "Model 3",
    "Model X",
    "Model Y",
    "Solar Roof",
    "Solar Panels",
  ];

  return (
    <header className="relative ">
      <nav className={style.container}>
        <a href="/">
          <img src="/images/logo.svg" alt="" className="w-[11rem] p-5 " />
        </a>

        <header className="w-[38rem] justify-between hidden xl:flex ">
          {arr1.map((ele) => (
            <p key={ele} className={`${style.navEle} hidden xl:block `}>
              {ele}
            </p>
          ))}
        </header>
        <div className="flex justify-around w-fit xl:w-52">
          <p className={`${style.navEle} hidden xl:block`}>Shop</p>
          <p className={`${style.navEle} hidden xl:block`}>Account</p>
          <p
            className={`${style.navEle}bg-[#37393e] bg-opacity-[10%] xl:bg-transparent`}
            onClick={() => setMenuVisible(!menuVisible)}
          >
            Menu
          </p>
        </div>
      </nav>
      <Menu visible={menuVisible} setMenuVisible={setMenuVisible} />
    </header>
  );
}

export default Header;
