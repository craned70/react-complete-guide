import "./ExpenseItem.css";

function ExpenseItem() {
  const time = new Date();
  return (
    <div className="expense-item">
      <div>
        Date is {time.getMonth()}/{time.getDate()}/{time.getFullYear()}
      </div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$133.48</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
