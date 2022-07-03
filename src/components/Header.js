import React from "react";

function Header() {
  return (
    <div className="absolute z-10 left-0 right-0 flex items-center justify-between">
      <a href="/">
        <img src="/images/logo.svg" alt="" className="w-[12rem] p-7" />
      </a>
      <p className="font-Gottham-medium mr-7 bg-[#37393e] bg-opacity-20 px-3 py-1.5 text-sm rounded-[10px] text-base cursor-pointer">
        Menu
      </p>
    </div>
  );
}

export default Header;
