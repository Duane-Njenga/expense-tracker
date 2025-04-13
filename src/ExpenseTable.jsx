import React from "react";

function ExpenseTable({ expenses }) {
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
        {expenses.length === 0 ? (
          <tr><td >No expenses yet.</td></tr>
        ) : (
          expenses.map((e) => (
            <tr key={e.id}>
              <td className="border p-2">{e.expenseName}</td>
              <td className="border p-2">{e.description}</td>
              <td className="border p-2">{e.category}</td>
              <td className="border p-2">${e.amount}</td>
              <td className="border p-2">{e.date}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default ExpenseTable;

