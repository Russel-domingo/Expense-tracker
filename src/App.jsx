import { useState } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm';
import ExpensesList from './components/ExpensesList';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    'All',
    'Food',
    'Transportation',
    'Bills',
    'Shopping',
    'Entertainment',
    'Healthcare',
    'Education',
    'Personal',
    'Others'
  ];

  function filteredCategory() {
    let selected = selectedCategory;

    if(selected === 'All') {
        return expenses;
    } else {
        return expenses.filter((expense) => expense.category === selected);
    }
  }
  const totalExpense = expenses.reduce((expense, currentExpense) => {
    return expense + currentExpense.amount;
  }, 0);

  function addExpenses(expense) {
    setExpenses((currentExpenses) => {
        return [...currentExpenses, expense]
    });
  }

  function deleteExpense(id){
    setExpenses((currentExpenses) => {
        return currentExpenses.filter((expense) => expense.id !== id);
    })
  }
  return (
    <div>
        <h1>Expense Tracker</h1>
        <ExpenseForm onAddExpenses={addExpenses}/>

        <h1>Total Expenses: {totalExpense}</h1>

        <select 
            name="category" 
            id="category" 
            value={selectedCategory} 
            onChange={(event) => setSelectedCategory(event.target.value)}
        >
            {categories.map((category) => {
                return <option key={category} value={category}> {category}</option>
            })}
        </select>
        <h1>Expenses</h1>
        <ExpensesList expenses={filteredCategory()} onDeleteExpenses={deleteExpense}/>
    </div>
  );

}

export default App
