import './App.css';
import React from 'react'
// importing components
import { Header } from './components/Header'
import { Balance } from './components/balance'
import { IncomeExpense} from './components/incomeExpense'
import { History } from './components/History'
import { Form } from './components/Form' 


function App() {
  const theme = {}
  return (
    <div className="App">
      <div className='container'>
      <Header />
      <Balance />
      <IncomeExpense />
      <History />
      <Form />
      </div>
    </div>
  );
}

export default App;
