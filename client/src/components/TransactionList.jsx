import React, { useContext, useEffect} from "react";
import { GlobalContext  } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => { 

  const { transactions, getTransactions } = useContext(GlobalContext);

  const noTransaction = {
    color : 'red' ,
    textAlign : "center  "
  }

  useEffect(() => {
    getTransactions();
  }, []); 
  
  //console.log(context);
  return (
    <>
      <h3>History</h3>
      <ul  className="list">
        { transactions.length > 0 ?  transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction}/>) : <h4 style={noTransaction}>"No Transactions To Show !"</h4>}
       
      </ul>
    </>
  );
};

export default TransactionList;
