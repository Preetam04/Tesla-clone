import React from "react";

function Buttons(props) {
  const style = {
    button:
      "font-Gottham-book w-5/6  rounded-full py-3  bg-opacity-80 text-xs sm:w-[17rem]",
    buttonDiv:
      "flex flex-col absolute bottom-24 w-[100%]  items-center justify-between h-24 sm:flex-row sm:justify-around sm:w-[38rem]",
  };

  return (
    <div className={style.buttonDiv}>
      {props.info.type === "car" ? (
        <>
          <button className={style.button + " text-white bg-[#171a20]"}>
            CUSTOM ORDER
          </button>
          <button className={style.button + " bg-white text-[#171a20]"}>
            EXISTING INVENTORY
          </button>
        </>
      ) : props.info.type === "panel" || props.info.type === "roof" ? (
        <>
          <button className={style.button + " text-white bg-[#171a20]"}>
            ORDER NOW
          </button>
          <button className={style.button + " bg-white text-[#171a20]"}>
            LEARN MORE
          </button>
        </>
      ) : props.info.type === "accessories" ? (
        <p className={style.subtext}>Produce Clean Energy From Your Roof</p>
      ) : (
        <button
          className={style.button + " text-white bg-[#171a20] bg-opacity-100"}
        >
          SHOP NOW
        </button>
      )}
    </div>
  );
}

export default Buttons;
