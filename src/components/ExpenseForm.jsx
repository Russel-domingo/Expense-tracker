import { useState } from "react";


function ExpenseForm(props) {

    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('Food');
    const [date, setDate] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        props.onAddExpenses({
            id: crypto.randomUUID(),
            description: description,
            amount: Number(amount),
            category: category,
            date: date
        });
        
       setDescription('');
       setAmount('');
       setCategory('Food');
       setDate('');

    }
    return(
        <div className="expense-form-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="description">Description</label>
                <input 
                    type="text" 
                    name="description" 
                    id="description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <label htmlFor="amount">Amount</label>
                <input 
                    type="number" 
                    name="amount"
                    id="amount"
                    value={amount}
                    onChange={(event) => setAmount(event.target.value)}
                />
                <label htmlFor="category">Category</label>
                <select 
                    name="category"
                    value={category}
                    id="category"
                    onChange={(event) => setCategory(event.target.value)}
                >
                    <option value="Food">Food</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Bills">Bills</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Education">Education</option>
                    <option value="Personal">Personal</option>
                    <option value="Others">Others</option>
                </select>
                <label htmlFor="date">Date</label>
                <input 
                    type="date" 
                    name="date"
                    id="date"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                />
                <button type="submit">Add Expenses</button>
            </form>
        </div>
    );
}
export default ExpenseForm;