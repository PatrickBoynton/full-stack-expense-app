import './App.css';
import NewExpense from './components/expense-form/new-expense/NewExpense';
import Expenses from './components/expenses/Expenses';
import {useEffect, useState} from 'react';

const App = () => {
    const [expenses, setExpenses] = useState([]);
    const test = async () => {
        const response = await fetch('/api/v1/expenses/', {
            headers: {
                'Content-Type': 'Application/Json',
            }
        });
        const data = await response.text();
        console.log(data);
        console.log(data);
    }

    useEffect(() => {
        test()
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
