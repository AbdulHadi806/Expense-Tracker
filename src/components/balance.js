import React, {useContext} from 'react'
import {GOLABALCONTEXT} from '../context/context' 


export const Balance = (amount) => {
  const {transactions} = useContext(GOLABALCONTEXT)

  const balance = transactions.reduce((acc, curr) => {
  const amount = curr.amount.split('')
  const sign = amount[0]
  const totalAmount = amount.slice(1, amount.length).join('')
  if(sign == '+'){
    acc = acc + parseInt(totalAmount)
  }
  else if(sign == '-'){
    acc = acc - parseInt(totalAmount)
  }
  return acc
},0)

  return (
    <div className='balance-main'>
        <h2>Your Balance
            <span>${balance}</span>
        </h2>
    </div>
  )
}
