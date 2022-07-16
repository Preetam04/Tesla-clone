import { React, useState } from "react";
import styled from "styled-components";
import data from "../data.json";
import Buttons from "./Buttons";
import SubHead from "./SubHead";
import Arrow from "./Arrow";
import Footer from "./Footer";

function Section() {
  const [focusedSection, setfocusedSection] = useState(1);

  const style = {
    container: "flex  flex-col items-center",
    header: "text-4xl font-Gottham-medium mt-48 sm:text-[2.35rem] duration-500",
    subtext: "mt-3 font-Gottham-book text-sm",
    button:
      "font-Gottham-book w-5/6  rounded-full py-3  bg-opacity-80 text-xs sm:w-[17rem]",
    buttonDiv:
      "flex flex-col absolute bottom-24 w-[100%]  items-center justify-between h-24 sm:flex-row sm:justify-around sm:w-[38rem]",
  };

  const ele = Object.entries(data).map((ele) => ele);
  let type;

  return (
    <>
      <Container>
        {ele.map((e) => {
          const [key, info] = e;
          type = info.type;
          return (
            <>
              <Container1
                key={e}
                bgImg={info.image}
                className={style.container}
              >
                <h1 className={style.header} id="header">
                  {info.name}
                </h1>
                <SubHead info={info} />
                <Buttons info={info} />
                <Arrow info={info} />
              </Container1>
            </>
          );
        })}
        <Footer type={type} />
      </Container>
    </>
  );
}

export default Section;

const Container = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
  position: relative;
`;

const Container1 = styled.section`
  position: relative;
  z-index: 2;
  background: ${(props) => `url('images/${props.bgImg}-mobile.jpg')`};
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  scroll-snap-align: start;

  @media (min-width: 640px) {
    background-image: ${(props) => `url('images/${props.bgImg}.jpg')`};
  }
`;
