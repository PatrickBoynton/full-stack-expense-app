import React from 'react';
import './EditMode.css';

const EditMode = ({inputValue, handleInput, setEditMode}) => (
    <>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="title">Title</label>
                <input type="text"
                       value={inputValue.title}
                       onChange={handleInput}
                       name="title"
                       id="title"/>
            </div>
            <div className="new-expense__control">
                <label htmlFor="amount">Amount</label>
                <input type="number"
                       value={inputValue.amount}
                       onChange={handleInput}
                       name="amount"
                       id="amount"
                       min="0.00"
                       step="0.01"/>
            </div>
            <div className="new-expense__control">
                <label htmlFor="Date">Date</label>
                <input type="date"
                       value={inputValue.date}
                       onChange={handleInput}
                       name="date"
                       id="date"/>
            </div>
            <div className="new-expense__actions">
                <button style={{marginRight: '12px'}} className="edit" onClick={() => setEditMode(false)}>Cancel</button>
                <button className="edit" type="submit">Add Expense</button>
            </div>
        </div>
    </>
);

export default EditMode;