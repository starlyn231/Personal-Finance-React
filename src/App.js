import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";
import AddCategory from "./Components/AddCategory";
import AddTransaction from "./Components/AddTransaction";
import Chart from "./Components/Chart";
import Header from "./Components/Header";
import TransactionTable from "./Components/TransactionTable";

export default function App() {
  const [showAddCategory, setShowAddCategory] = useState(true);
  const [showAddTransaction, setShowAddTransaction] = useState(false);
  const [categories, setCategories] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");

  if (showAddCategory) {
    return (
      <AddCategory
        setCategories={setCategories}
        setShowAddCategory={setShowAddCategory}
      />
    );
  }
  if (showAddTransaction) {
    return (
      <AddTransaction
        categories={categories}
        setTransactions={setTransactions}
        setShowAddTransaction={setShowAddTransaction}
      />
    );
  }

  const removeTransaction = (index) => {
    const newTransactions = transactions.filter((transaction, idx) => {
      return idx !== index;
    });
    setTransactions(newTransactions);
  };

  const filterTransactions = () => {
    return transactions
      .filter((transaction) =>
        activeCategory ? transaction.category.name === activeCategory : true
      )
      .sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));
  };

  return (
    <div className="container">
      <div className="row">
        <Header
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          categories={categories}
          setShowAddCategory={setShowAddCategory}
        />
      </div>
      <div className="row">
        <div className="col">
          <TransactionTable
            setShowAddTransaction={setShowAddTransaction}
            removeTransaction={removeTransaction}
            transactions={transactions}
          />
        </div>
        <div className="col">
          <Chart transactions={filterTransactions(transactions)} />
        </div>
      </div>
    </div>
  );
}
