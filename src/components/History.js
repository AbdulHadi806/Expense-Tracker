import React, { useContext } from 'react'
import { GOLABALCONTEXT } from '../context/context'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const History = () => {
  const { deleteObject, transactions } = useContext(GOLABALCONTEXT);

  // income checker whether positive or not is here

  const isIncome = (int) => {
    const amount = int.split("");
    const sign = amount[0];
    if (sign == "+") {
      return true;
    }
    return false;
  };


  // delete button is here

  const deleteTransaction = (id) => {
    deleteObject(id);
  }; 

  return (
    <div className="History">
      <h4>History</h4>
      <ul>
        {transactions.map((t) => {
          return (
            <li key={t.id}>
              <button onClick={(e) => {e.preventDefault();deleteTransaction(t.id)}}>
              <FontAwesomeIcon icon={faTrashCan}/>
                </button>
              {t.detail}{" "}
              <span className={isIncome(t.amount) ? "minus" : "plus"}>
                ${t.amount}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
