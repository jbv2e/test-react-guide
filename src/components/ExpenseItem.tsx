import { useEffect, useState } from 'react'
import './ExpenseItem.css'
import { ExpensesParam } from 'dataType/commonType'
import ExpenseDate from 'components/ExpenseDate'
import Card from 'components/Card'

function ExpenseItem({ props }: { props: ExpensesParam }) {
  const [today, setToday] = useState(getToday())

  function getToday() {
    const date = new Date()
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  }
  useEffect(() => {}, [])

  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </Card>
  )
}

export default ExpenseItem
