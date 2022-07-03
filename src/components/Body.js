import React from "react";
import styled from "styled-components";

function Body() {
  return (
    <div className="relative ">
      <Bgimg></Bgimg>
      {/* <Bgimg2></Bgimg2> */}
    </div>
  );
}

export default Body;

const Bgimg = styled.div`
  background-image: url("/images/model-3-mobile.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  background-position: center;
  position: absolute;
  left: 0;
  right: 0;

  @media (min-width: 640px) {
    background-image: url("/images/Model-3.jpg");
  }
`;

const Bgimg2 = styled.div`
  background-image: url("/images/model-Y-mobile.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  background-position: center;
  position: absolute;
  left: 0;
  right: 0;

  @media (min-width: 640px) {
    background-image: url("/images/Model-Y.jpg");
  }
`;
