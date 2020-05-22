import React from "react";
import { Header } from "./container/Header";
import { Balance } from "./container/Balance";
import { IncomeExpenses } from "./container/IncomeExpenses";
import { TransactionList } from "./container/TransactionList";
import { NewTransaction } from "./container/NewTransaction";
import { GlobalProvider } from "./context/GloballState";

function App() {
  return (
    <GlobalProvider style={{ textAlign: "center" }}>
      <Header />
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <NewTransaction />
    </GlobalProvider>
  );
}

export default App;
