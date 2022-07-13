import React from "react";
import CloseIcon from "@mui/icons-material/Close";

function Menu() {
  const style = {
    menuBg:
      "w-[100vw] h-[100vh] absolute bg-black top-0 m-0 p-0 z-20 bg-opacity-25 ",
    menuBody:
      "bg-white h-[100vh] w-80 absolute right-0 flex justify-start flex-col pt-28 pl-12",
    cancel:
      "absolute right-6 top-8 !text-[1.75rem] !text-[#393c41] cursor-pointer ",
    options: "font-Gottham-medium text-[0.95rem] text-[#393c41] text-left",
  };

  return (
    <div className={style.menuBg}>
      <div className={style.menuBody}>
        <CloseIcon className={style.cancel} />
        <a href="#" className="w-fit">
          <span className="font-Gottham-medium text-[0.95rem] text-[#393c41]">
            Model S
          </span>
        </a>
        <a href="#" className="mt-5 w-fit">
          <span className={style.options}>Model 3</span>
        </a>
      </div>
    </div>
  );
}

export default Menu;
