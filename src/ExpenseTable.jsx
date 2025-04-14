import React from "react";

function ExpenseTable({expenses}) {

  // let expenses = [
  //   {
  //     id: 1,
  //     expenseName: "Test",
  //     description:"Test des",
  //     category: "Test cat",
  //     amount: 200,
  //     date: ""
  //   }
  // ]
  return (
    <table >
        <tr>
          <th className="border p-2">Name</th>
          <th className="border p-2">Description</th>
          <th className="border p-2">Category</th>
          <th className="border p-2">Amount</th>
          <th className="border p-2">Date</th>
        </tr>
      <tbody>

          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td >{expense.expenseName}</td>
              <td >{expense.description}</td>
              <td >{expense.category}</td>
              <td >Ksh.{expense.amount}</td>
              <td >{expense.date}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;

