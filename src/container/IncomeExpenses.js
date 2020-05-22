import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GloballState";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map((t) => t.amount);

  const income = amount
    .filter((a) => a > 0)
    .reduce((a, b) => (a += b), 0)
    .toFixed(2);

  const expense = Math.abs(
    amount.filter((a) => a < 0).reduce((a, b) => (a += b), 0)
  ).toFixed(2);

  return (
    <IncomeandExpense>
      <Income>
        <h4> Income</h4>
        <Plus> + ${income}</Plus>
      </Income>
      <Expenses>
        <h4> Expenses</h4>
        <Minus> - ${expense}</Minus>
      </Expenses>
    </IncomeandExpense>
  );
};

const IncomeandExpense = styled.div`
  display: flex;
  width: 300px;
  margin-left: 35em;
  background-color: #fffafa;
  align-item: center;
  justify-content: center;
  box-shadow: 0 8px 10px -6px black;
  margin-bottom: 2em;
`;

const Income = styled.div`
  margin: 5px auto;
`;
const Expenses = styled.div`
  margin: 5px auto;
`;

const Plus = styled.p`
  color: #2ecc71;
  font-size: 20px;
`;

const Minus = styled.p`
  color: #c0392b;
  font-size: 20px;
`;
