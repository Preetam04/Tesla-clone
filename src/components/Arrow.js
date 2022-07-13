import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Arrow(props) {
  return (
    <>
      {props.info["show-arrow"] ? (
        <div className="rotate-90 absolute bottom-9">
          <ArrowForwardIosIcon className=" !fill-[#393b3f] animate-animateDown  font-medium " />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Arrow;
