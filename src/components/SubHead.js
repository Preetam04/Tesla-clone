import React from "react";

function SubHead(props) {
  const style = {
    subtext: "mt-3 font-Gottham-book text-sm",
  };

  return (
    <>
      {props.info.type === "car" ? (
        <p className={style.subtext}>
          Order online for{" "}
          <span className="underline underline-offset-4 ">
            Touchless Delivery
          </span>
        </p>
      ) : props.info.type === "panel" ? (
        <p className={style.subtext}>Lowest Cost Solar Panels in America</p>
      ) : props.info.type === "roof" ? (
        <p className={style.subtext}>Produce Clean Energy From Your Roof</p>
      ) : (
        <p className={style.subtext}></p>
      )}
    </>
  );
}

export default SubHead;
