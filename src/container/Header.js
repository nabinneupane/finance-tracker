import React from "react";
import styled from "styled-components";

export const Header = (props) => {
  return <H2>Expense Tracker</H2>;
};

const H2 = styled.h2`
  color: palevioletred;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding: 1em;
  margin-bottom: -0.1em;
`;
