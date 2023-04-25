import logo from './logo.svg';
import React, {useState, useEffect}  from 'react';
import './App.css';


import AddTransactionForm from './components/AddTransaction';
import Search from './components/Search';
import Transaction from './components/Transaction';



function App() {
  const [transactions, setTransactions] = useState([])
  const fetchedTransaction = () => {
    fetch ("http://localhost:3000/transactions")
    .then (response => response.json() )
    .then ( data => setTransactions(data))
    
  }
  useEffect (()=> {
  fetchedTransaction ()
  

  },[])
  return (
    <div className="App">
      
     
    <h2>The Royal Bank of Flatiron</h2>
      <AddTransactionForm />
      <Search />
      <Transaction  transactions = {transactions} />
      

    </div>
  );
}

export default App;
