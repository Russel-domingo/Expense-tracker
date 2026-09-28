import { useState } from "react";

function EditExpenseForm (props) {

    const [description, setDescription] = useState(props.expense.description);
    const [amount, setAmount] = useState(props.expense.amount);
    const [category, setCategory] = useState(props.expense.category);
    const [date, setDate] = useState(props.expense.date);


    function handleSubmit(event) {
        event.preventDefault();

        const updatedExpense = {
            description: description,
            amount: Number(amount),
            category: category,
            date: date
        }

        props.onUpdateExpense(
            props.expense.id,
            updatedExpense
        )
    }

    return(
        <div>
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
                    id="category" 
                    value={category} 
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
                <button type="submit">Update expense</button>
                <button type="button" onClick={() => props.onCancelEdit()}>Cancel</button>
            </form>
        </div>
    );
    
}

export default EditExpenseForm;