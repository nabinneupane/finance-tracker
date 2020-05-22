import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GloballState";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <Div>
      <H3> History</H3>
      <Ul>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </Ul>
    </Div>
  );
};

const H3 = styled.h3`
  border-bottom: 2px solid LightGrey;
  width: 16.5em;
  text-align: left;
  padding-bottom: 0.3em;
`;

const Div = styled.div`
  margin-left: 35em;
  font-family: "Lato", sans-serif;
`;

const Ul = styled.ul`
  margin-bottom: 40px;
  width: 20em;
  margin-left: -3em;
`;
