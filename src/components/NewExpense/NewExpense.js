import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import { useState } from 'react';
function NewExpense(props){
    const [isEditing, setisEditing] = useState(false)
    const saveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setisEditing(false)

    }

    const editingHandler=()=>{
        setisEditing(true)
    }
    const cancelEditing = () => {
        setisEditing(false)

    }

return(
    <div className="new-expense">

        {!isEditing && <button onClick={editingHandler}>Add Expense</button>}
        {isEditing &&<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelEditing}/>}
    </div>
)
}

export default NewExpense;