import React, { useState } from "react";

function InputForm({ onAddExpense }) {
  const [expenseName, setExpenseName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense({ expenseName, description, category, amount, date });
    setExpenseName(""); 
    setDescription(""); 
    setCategory(""); 
    setAmount(""); 
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit} class ="block">
      <input type = "text" 
      placeholder="Expense Name" value={expenseName} onChange={(e) => setExpenseName(e.target.value)} required/>
      <input type = "text" placeholder="Description" value={description} onChange={(e) => {setDescription(e.target.value)}} required/>
      <input type = "text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required/>
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required/>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required/>
      <button type = "submit" onSubmit={handleSubmit}>Add Expense</button>
    </form>
  );
}

export default InputForm;

