import React from "react";
import styled from "styled-components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Section() {
  const carName = [
    "model-3",
    "model-Y",
    "model-S",
    "model-X",
    "solar-panels",
    "solar-roof",
    "accessories",
  ];

  const style = {
    container: "flex  flex-col items-center",
    header: "text-4xl font-Gottham-medium mt-40 sm:text-[2.5rem]",
    subtext: "mt-3 font-Gottham-book text-sm",
    button:
      "font-Gottham-book w-5/6  rounded-full py-3  bg-opacity-80 text-xs sm:w-[17rem]",
    buttonDiv:
      "flex flex-col absolute bottom-24 w-[100%]  items-center justify-between h-24 sm:flex-row sm:justify-around sm:w-[38rem]",
  };

  return (
    <>
      {carName.map((car) => (
        <Container bgImg={car} className={style.container}>
          <h1 className={style.header}>Model 3</h1>
          <p className={style.subtext}>
            Order online for{" "}
            <span className="underline underline-offset-4">
              Touchless Delivery
            </span>
          </p>
          <div className={style.buttonDiv}>
            <button className={style.button + " text-white bg-[#171a20]"}>
              CUSTOM ORDER
            </button>
            <button className={style.button + " bg-white text-[#171a20]"}>
              EXISTING INVENTORY
            </button>
          </div>
          <div className="rotate-90 absolute bottom-9">
            <ArrowForwardIosIcon className=" !fill-[#393b3f] animate-animateDown  font-medium " />
          </div>
        </Container>
      ))}
    </>
  );
}

export default Section;

const Container = styled.div`
  position: relative;
  z-index: 2;
  background: ${(props) => `url('images/${props.bgImg}-mobile.jpg')`};
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;

  @media (min-width: 640px) {
    background-image: ${(props) => `url('images/${props.bgImg}.jpg')`};
  }
`;
