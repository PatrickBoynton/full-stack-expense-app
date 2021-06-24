import React from 'react';
import './TotalDisplay.css';

const TotalDisplay = ({total}) => {
    return (
        <div className="total-display">
            <h3>Total Expenses</h3>
            <p>{total}</p>
        </div>
    );
};

export default TotalDisplay;