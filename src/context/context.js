import React, { createContext, useReducer } from "react";
import { appReducer } from "./reducer";

// initial state
export const initialState = {
  transactions: [
    {
      id: 1,
      amount: "+2000",
      detail: "React Project pay",
    },
    {
      id: 2,
      amount: "-200",
      detail: "Connects",
    },
  ],
};

export const GOLABALCONTEXT = createContext(initialState);

export default function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const addTransaction = (newObj) => {
      dispatch({type: "ADD", payload: newObj})
  }
  const deleteObject = (id) => {
    dispatch({type:"REMOVE", payload: id})
  }
  return (
    <GOLABALCONTEXT.Provider value={{ transactions: state.transactions, addTransaction,deleteObject }}>
      {children}
    </GOLABALCONTEXT.Provider>
  );
}
