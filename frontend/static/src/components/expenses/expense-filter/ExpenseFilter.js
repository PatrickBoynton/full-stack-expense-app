import React from 'react';
import './ExpenseFilter.css';

const ExpenseFilter = ({ onChangeYear, expenses }) => {
  const testArray = [];

  expenses.map((expense) => testArray.push(expense.date.getFullYear()));

  const filterTest = testArray.filter((date, index) => testArray.indexOf(date) === index);

  const test = filterTest.map((options, index) => <option key={index}>{options}</option>);

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="filter">Filter by year</label>
        <select name="filter" id="filter" onChange={onChangeYear}>
          {test}
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
