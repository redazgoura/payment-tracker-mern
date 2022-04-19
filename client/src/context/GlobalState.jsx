import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";
//initial State
const initialState = {
  transactions: [],
  error: null,
  loading: true,
};
//Create a context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // ACTIONS
  //GET TRANSACTIONS
  async function getTransactions() {
    try {
      const res = await axios.get("/api/v1/transactions");

      dispatch({
        type: "GET_TRANSACTIONS",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
    }
  }
  //DELETE TRANSACTION
async function deleteTransaction(id) {

    try{

      await axios.delete(`api/v1/transactions/${id}`)
     
      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id,
      });
    }catch(err){
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
    }
   
  }

  //ADD TRANSACTION
async function addTransaction(transaction) {
 
  const config = {
    headers: {
      'Content-Type' : 'application/json'
    }
  }

  try {
    
      const res  = await axios.post('/api/v1/transactions', transaction, config)
      dispatch({
        type: "ADD_TRANSACTION",
        payload: res.data.data,
      });

  } catch (err) {
    dispatch({
      type: "TRANSACTION_ERROR",
      payload: err.response.data.error,
    });
  }

    
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
