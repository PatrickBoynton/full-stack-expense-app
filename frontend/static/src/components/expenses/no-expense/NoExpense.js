import React from 'react';
import Card from '../../ui/Card';
import './NoExpense.css';

const NoExpense = props => {
    return (
        <Card>
            <div className="no-expense">
                <h1>No expenses for this year.</h1>
            </div>
        </Card>

    );
};

export default NoExpense;