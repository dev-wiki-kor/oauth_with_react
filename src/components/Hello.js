import styled from "styled-components";
import React from "react";

const Hello = () => {
  return <HelloDiv>HELLO WORLD</HelloDiv>;
};

const HelloDiv = styled.div`
  display: flex;
  width: 500px;
  height: 400px;
`;

export default Hello;
