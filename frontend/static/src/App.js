import './App.css';
import NewExpense from './components/expense-form/new-expense/NewExpense';
import Expenses from './components/expenses/Expenses';
import {useEffect, useState} from 'react';

const App = () => {
    const [expenses, setExpenses] = useState([]);
    const fetchExpenses = async () => {
        const response = await fetch('/api/v1/expenses/');
        const data = await response.json();
        setExpenses([...data]);
    };

    useEffect(() => {
        fetchExpenses();
    }, []);

    const addExpense = (expense) => {
        setExpenses([expense, ...expenses]);
    };

    return (
        <>
            <NewExpense onAddExpense={addExpense}/>
            <Expenses expenses={expenses}/>
        </>);
};

export default App;
