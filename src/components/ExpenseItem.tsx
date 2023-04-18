import { useEffect, useState } from 'react'
import './ExpenseItem.css'
import { ExpensesParam } from 'dataType/commonType'
import ExpenseDate from 'components/ExpenseDate'

function ExpenseItem({ props }: { props: ExpensesParam }) {
  const [today, setToday] = useState(getToday())

  function getToday() {
    const date = new Date()
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  }
  useEffect(() => {}, [])

  return (
    <div className="expense-item">
      <div>
        <ExpenseDate date={props.date} />
      </div>
      {/* <div>{year}년&nbsp;</div>
      <div>{month}&nbsp;</div>
      <div>{day}</div> */}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem
