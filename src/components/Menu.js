import { React } from "react";
import CloseIcon from "@mui/icons-material/Close";

function Menu({ visible, setMenuVisible }) {
  const style = {
    backdrop:
      "w-[100vw] h-[100vh] bg-black bg-opacity-30 z-[15] fixed duration-500",
    menuBody:
      "bg-white h-[100vh] w-80  right-0 flex justify-start flex-col   z-20  transition-all translate-x-[20rem]  opacity-0 absolute  right-0 top-0 pt-20 pl-10 overflow-y-scroll",
    cancel:
      "fixed right-6 top-8 !text-[1.75rem] !text-[#393c41] cursor-pointer ",
    optionsAnch:
      "w-60 hover:bg-black hover:bg-opacity-5 px-3.5 py-1 rounded-[10px]  duration-200",
    options: "font-Gottham-medium text-[0.9rem] text-[#393c41] text-left",
  };

  const arr1 = [
    "Model S",
    "Model 3",
    "Model X",
    "Model Y",
    "Solar Roof",
    "Solar Panels",
  ];

  const arr2 = [
    "Existing Inventory",
    "Used Inventory",
    "Trade-In",
    "Insurance",
    "Cybertruck",
    "Roadster",
    "Semi",
    "Charging",
    "Powerwall",
    "Commercial Energy",
    "Utilities",
    "Find Us",
    "Support",
    "Investor Relations",
  ];
  // className={visible ? style.menuBgOpen : ""}
  // onClick={() => setMenuVisible(!visible)}
  return (
    <>
      <div
        className={!visible ? " duration-500 opacity-0 fixed" : style.backdrop}
        onClick={() => setMenuVisible(!visible)}
      ></div>
      <div
        className={
          !visible
            ? `${style.menuBody} duration-500`
            : `${style.menuBody} translate-x-[0rem] opacity-100 duration-500 `
        }
      >
        <CloseIcon
          className={style.cancel}
          onClick={() => setMenuVisible(!visible)}
        />

        <div className="flex flex-col xl:hidden ">
          {arr1.map((ele) => (
            <a href="#" className={`${style.optionsAnch} mt-2`}>
              <span className={style.options}>{ele}</span>
            </a>
          ))}
        </div>
        <div className="flex flex-col">
          {arr2.map((ele) => (
            <a href="#" className={`${style.optionsAnch} mt-2`}>
              <span className={style.options}>{ele}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Menu;
