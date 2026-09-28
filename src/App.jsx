import { useState } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm';
import ExpensesList from './components/ExpensesList';
import EditExpenseForm from './components/EditExpenseForm';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [editingExpenses, setEditingExpenses] = useState(null);

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

  const totalExpense = filteredCategory().reduce((expense, currentExpense) => {
    return expense + currentExpense.amount;
  }, 0);

  function filteredCategory() {
    let selected = selectedCategory;

    if(selected === 'All') {
        return expenses;
    } else {
        return expenses.filter((expense) => expense.category === selected);
    }
  }

  function cancelEdit() {
    setEditingExpenses(null)
  }

  function startEditing(expenses) {
    setEditingExpenses(expenses);
  }


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

  function updateExpense(id, updatedExpense) {
    setExpenses((currentExpenses) => {
        return currentExpenses.map((expense) => {
            if (expense.id === id) { 
                return {...expense, ...updatedExpense};
            }
            return expense;
        });
    });

    setEditingExpenses(null);
  }
  return (
    <div className='app-container'>
        <div className='heading'>
          <h1>Expense Tracker</h1>
        </div>
        

        <ExpenseForm onAddExpenses={addExpenses}/>
        {editingExpenses && 
            (<EditExpenseForm expense={editingExpenses} onCancelEdit={cancelEdit} onUpdateExpense={updateExpense}/>)}

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
        <ExpensesList 
            expenses={filteredCategory()} 
            onDeleteExpenses={deleteExpense}
            onEditExpenses={startEditing}
            />
    </div>
  );
}

export default App
