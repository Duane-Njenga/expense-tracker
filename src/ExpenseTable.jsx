import React from "react";

function ExpenseTable({expenses}) {


  return (
    <table >
        <tr>
          <th >Name</th>
          <th >Description</th>
          <th >Category</th>
          <th>Amount</th>
          <th >Date</th>
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

