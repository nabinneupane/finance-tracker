import React, { useContext } from "react";
import styled from "styled-components";

import { GlobalContext } from "../context/GloballState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const arrList = transactions.map((e) => e.amount);

  const total = arrList.reduce((a, b) => (a += b), 0).toFixed(2);
  return (
    <Div>
      <H4>Your Balance</H4>
      <H1> ${total} </H1>
    </Div>
  );
};

const Div = styled.div`
  margin-left: 35em;
  margin-bottom: -1.4em;
`;

const H4 = styled.h4`
  margin: 3px auto;
  font-family: Lucida Sans Unicode;
`;

const H1 = styled.h1`
  margin: 3px auto;
  font-family: Georgia;
  padding-bottom: 0.9em;
  letter-spacing: 1px;
  margin: 0;
`;
