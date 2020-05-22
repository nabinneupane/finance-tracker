import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GloballState";

export const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <Li bool={transaction.amount}>
      <DelButton onClick={() => deleteTransaction(transaction.id)}>x</DelButton>
      {transaction.text}
      <span>
        {" "}
        {sign}$ {Math.abs(transaction.amount)}
      </span>
    </Li>
  );
};

const Li = styled.li`
  border-right: ${(props) =>
    props.bool < 0 ? "5px solid #c0392b" : "5px solid #2ecc71"};
  background-color: #fffafa;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 10px;
  margin: 10px 0;
  box-shadow: 0 8px 10px -6px lightGray;
`;

const DelButton = styled.button`
  cursor: pointer;
  background-color: #e74c3c;
  font-size: 15px;
  height: 1.4em;
  opacity: 0;
  &:hover {
    opacity: 1;
    outline: 0;
  }
  position: absolute;
  left: -2em;
`;
