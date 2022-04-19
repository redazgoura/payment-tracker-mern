import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from '../utils/format';


const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  //define negative/positive value(s)
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li
      className={transaction.amount > 0 ? "plus" : "minus"}
      key={transaction.id}
    >
      {transaction.text}
      <span>
        {sign}${numberWithCommas( Math.abs(transaction.amount))}
      </span>
      <button
        onClick={ () => {  deleteTransaction(transaction._id)  }}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
