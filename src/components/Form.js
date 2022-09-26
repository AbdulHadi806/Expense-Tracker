import React, { useState, useContext } from 'react'
import { GOLABALCONTEXT } from '../context/context'

export const Form = () => {
    const [text, settext] = useState('')
    const [amount, setamount] = useState(0)

    const {addTransaction, transactions} = useContext(GOLABALCONTEXT)

    const addNewTransaction = (e) => {
        e.preventDefault()
     if(text && amount){
      addTransaction({detail: text, amount, id: transactions.length + 1 })
      settext('')
      setamount(0)
     }
    }
  return (
    <div className='transaction'>
        <h5>Add new transaction</h5>
        <form>
            <label>Text</label>
            <input placeholder='Enter text...' value={text} onChange={(e) => settext(e.target.value)}></input>
            <label>Amount <span>(negative-expense,positive-income)</span></label>
            <input value={amount} amount= {amount} placeholder='Input amount...' onChange={(e) => setamount(e.target.value)}></input>
            <button onClick={addNewTransaction}>Add transaction</button>
        </form>
    </div>
  )
}
