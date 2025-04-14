import { useState } from 'react'
import './App.css'
import InputForm from "./InputForm";
import ExpenseTable from "./ExpenseTable";
import SearchBar from "./SearchBar";




function App() {
    const [expenses, setExpenses] = useState([]);
    const [search, setSearch] = useState("");
  
    const handleAddExpense = (expense) => {
      setExpenses([...expenses, { id: Date.now(), ...expense }]);
    };
  
    const filtered = expenses.filter(
      (e) =>
        e.expenseName.toLowerCase().includes(search.toLowerCase()) ||
        e.description.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <>
      <h1>Smart Expense Tracker</h1>
      <SearchBar search={search}setSearch={setSearch}/>
      <div id ="inputContainer">
      <InputForm onAddExpense={handleAddExpense} />
      <ExpenseTable expenses={filtered}/>
      </div>

    </>
  )
}

export default App
