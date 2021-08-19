import './ExpenseItem.css'
function ExpenseItem(){
    return(
        <div className="expense-item">
        <div>
    August 19th 2021
        </div>
        
        
        <div className="expense-item__description">
           <h1>Netflix</h1> 
        </div>
        
        <div className="expense-item__price">
$9.69
        </div>
        </div>
        
    )
}

export default ExpenseItem;