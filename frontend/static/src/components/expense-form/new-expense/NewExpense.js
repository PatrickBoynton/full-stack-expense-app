import React from 'react';
import ExpenseForm from '../ExpenseForm';
import './NewExpense.css'

const NewExpense = ({onAddExpense}) => {
    const handleSubmit = (data) => {
        const expenseData = {
            // TODO change to API id later.
            id: Math.round(Math.random() * 10000),
            title: data.title,
            amount: data.amount,
            date: new Date(data.date),
        };
        onAddExpense(expenseData);
    };
    return (
        <div className="new-expense"><ExpenseForm onSubmitExpense={handleSubmit}/></div>
    );
};

export default NewExpense;