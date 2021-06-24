import React from 'react';
import './ExpenseDate.css';

const ExpenseDate = ({expenses}) => {
    const month = expenses.date.toLocaleString('en-US', {month: 'long'});
    const day = expenses.date.toLocaleString('en-US', {day: '2-digit'});
    const year = expenses.date.getFullYear();

    return (
        <time className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__year">{year}</div>
        </time>
    );
};

export default ExpenseDate;