import React from 'react';
import Card from '../../ui/Card';
import ExpenseDate from '../expense-date/ExpenseDate';
import './ExpenseItem.css'

const ExpenseItem = ({expenses}) => {
    return (
        <Card className="expense-item">
            <ExpenseDate expenses={expenses}/>
            <div className="expense-item__description">
                <h2>{expenses.title}</h2>
                <span className="expense-item__price">{expenses.amount}</span>
            </div>
        </Card>
    );
};

export default ExpenseItem;