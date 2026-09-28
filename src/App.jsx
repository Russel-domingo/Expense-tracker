import { useState } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm';
import ExpensesList from './components/ExpensesList';

function App() {
  const [expenses, setExpenses] = useState([]);

  function addExpenses(expense) {
    setExpenses((currentExpenses) => {
        return [...currentExpenses, expense]
    });
  }

  function deleteExpense(id){
    setExpenses((currentExpenses) => {
        return currentExpenses.filter((expense) => expense.id != id);
    })
  }
  return (
    <div>
        <h1>Expense Tracker</h1>
        <ExpenseForm onAddExpenses={addExpenses}/>
    
        <h1>Expenses</h1>
        <ExpensesList expenses={expenses} onDeleteExpenses={deleteExpense}/>
    </div>
  );

}

export default App
