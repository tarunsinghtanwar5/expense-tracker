import './ExpenseForm.css'
import { useState } from 'react'

function ExpenseForm(props) {
    const [changetitle, setchangetitle] = useState('')
    const [changeamount, setchangeamount] = useState('')
    const [changedate, setchangedate] = useState('')
    
    const titleChangeHandler = (event) => {
        setchangetitle(event.target.value)
    }
    const amountChangeHandler = (event) => {
        setchangeamount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setchangedate(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData={
            title:changetitle,
            amount:changeamount,
            date:new Date(changedate)
        }
        props.onSaveExpenseData(expenseData)
        setchangetitle('')
        setchangeamount('')
        setchangedate('')
        
    }



    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={changetitle} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min='0' step='0.1' onChange={amountChangeHandler} value={changeamount} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min='2019-01-01' step='2022-12-31' onChange={dateChangeHandler} value={changedate} />
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
            
        </form>
    )
}


export default ExpenseForm;