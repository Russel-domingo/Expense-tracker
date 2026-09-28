function ExpensesList(props) {

    const expenseList = props.expenses.map((expense) => 
        <li key={expense.id}>
            {expense.description} - ₱{expense.amount} - {expense.category} - {expense.date}
            <button onClick={() => props.onDeleteExpenses(expense.id)}>Delete</button>

            <button onClick={() => props.onEditExpenses(expense)}>Edit</button>
        </li>        
    );

    return(
        <div className="expenses-list-container">
            <h2>Expenses List</h2>
            <ul>
                {expenseList}
            </ul>
        </div>
    );
    
}

export default ExpensesList;