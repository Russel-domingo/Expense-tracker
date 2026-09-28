import { useState } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm';

function App() {
  const [expenses, setExpenses] = useState([]);

  function addExpenses(expense) {
    setExpenses((currentExpenses) => {
        return [...currentExpenses, expense]
    });
  }
  return (
    <div>
        <h1>Expense Tracker</h1>
        <ExpenseForm onAddExpenses={addExpenses}/>
    </div>
  );

}

export default App
