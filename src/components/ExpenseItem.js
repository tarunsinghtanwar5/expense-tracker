import react,{useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js';
function ExpenseItem(props) {
	const [title,setTitle]=useState(props.title)
	const newTitle=()=>{
		setTitle("Hacked")
		
	}
	
	return (
		<div className="expense-item">
			<ExpenseDate date={props.date}/>

			<div className="expense-item__description">
				<h2>{title}</h2>
			</div>

			<div className="expense-item__price">{props.amount}</div>
			<button onClick={newTitle}>Update</button>
		</div>
	);
}

export default ExpenseItem;
