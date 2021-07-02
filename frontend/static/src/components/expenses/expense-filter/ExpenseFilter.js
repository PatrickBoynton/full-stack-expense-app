import React from 'react';
import './ExpenseFilter.css';

const ExpenseFilter = ({onChangeYear}) => {
    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label htmlFor="filter">Filter by year</label>
                <select name="filter" id="filter" onChange={onChangeYear}>
                </select>
            </div>
        </div>
    );
};

export default ExpenseFilter;