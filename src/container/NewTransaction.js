import React, { useState, useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GloballState";

export const NewTransaction = () => {
  const [text, setText] = useState();
  const [number, setNumber] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const onSubmitForm = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100),
      text,
      amount: +number,
    };

    addTransaction(newTransaction);
    setText(" ");
    setNumber(0);
  };
  return (
    <Div>
      <H3> Add New Transaction</H3>
      <form onSubmit={onSubmitForm}>
        <div>
          <Label htmlFor="text">
            New Transaction
            <Input
              type="text"
              placeholder="Enter new transaction..."
              value={text}
              onChange={(val) => setText(val.target.value)}
              required
            ></Input>
          </Label>
        </div>
        <div>
          <Label htmlFor="Amount">
            Amount <br />
            <span> (negative -Expense, positive - income)</span>
            <Input
              type="number"
              placeholder="Enter new Number..."
              value={number}
              onChange={(num) => setNumber(num.target.value)}
              required
            ></Input>
          </Label>
        </div>
        <Button> Add Transaction</Button>
      </form>
    </Div>
  );
};

const H3 = styled.h3`
  border-bottom: 2px solid LightGrey;
  width: 16.5em;
  text-align: left;
`;

const Div = styled.div`
  margin-left: 35em;
  font-family: "Lato", sans-serif;
  padding-bottom: 0.2em;
`;

const Input = styled.input`
  border: 1px solid #dedede;
  border-radius: 2px;
  display: block;
  font-size: 16px;
  padding: 10px;
  width: 35%;
  margin: 2px 0;
`;

const Label = styled.label`
  display: inline-block;
  text-align: left;
  font-family: Georgia;
  font-weight: bold;
  width: 100%;
  padding-top: 0.2em;
`;

const Button = styled.button`
  cursor: pointer;
  background-color: black;
  font-family: Georgia;

  font-size: 14px;
  margin-top: 14px;
  border: 0;
  display: block;
  color: white;
`;
