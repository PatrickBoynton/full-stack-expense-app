import React from 'react';
import './ExpenseFilter.css';

const ExpenseFilter = ({onChangeYear}) => {
    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label htmlFor="Filter">Filter by year</label>
                <select name="filter" id="filter" onChange={onChangeYear}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                </select>
            </div>
        </div>
    );
};

export default ExpenseFilter;