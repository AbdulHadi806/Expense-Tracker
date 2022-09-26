import React, {useContext} from 'react'
import {GOLABALCONTEXT} from '../context/context' 

export const IncomeExpense = ({amount}) => {
  const {transactions} = useContext(GOLABALCONTEXT)

  const income = transactions.reduce((acc, curr)=> {
    const amount = curr.amount.split('')
    const sign = amount[0]
    const totalAmount = amount.slice(1,amount.length).join("")
    if(sign == '+' ){
      acc = acc + parseInt(totalAmount)
    }
    return acc
  }, 0)

  const expense = transactions.reduce((acc, curr)=> {
    const amount = curr.amount.split('')
    const sign = amount[0]
    const totalAmount = amount.splice(1, amount.length).join('')
    if(sign == '-'){
      acc = acc + parseInt(totalAmount)
    }
    return acc
  },0)


  return (
    <div className='incomeExpense'>
        <h3>Income <span className='income'>${income}</span>
        </h3>
        <h3 className='expense-head'>Expense <span className='expense'>${expense}</span>
        </h3>
    </div>
  )
}
