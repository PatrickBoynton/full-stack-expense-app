import React from 'react';
import './Create.css';

const Create = ({setEditMode}) => {
    return (
        <div style={{textAlign: 'center', marginTop: 0}} className="new-expense__actions create">
            <button onClick={() => setEditMode(true)}>Create Expense</button>
        </div>
    );
};

export default Create;