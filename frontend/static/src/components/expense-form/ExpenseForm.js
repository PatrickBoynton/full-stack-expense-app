import React, {useState} from 'react';
import EditMode from './edit-mode/EditMode';
import Create from './create/Create';
import useInput from '../hooks/useInput';

import './ExpenseForm.css';

const ExpenseForm = ({onSubmitExpense}) => {
    const [editMode, setEditMode] = useState(false);
    const [inputValue, handleInput] = useInput();


    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmitExpense(inputValue);
    };

    return (
        <form onSubmit={handleSubmit}>
            {editMode
                ? <EditMode handleInput={handleInput}
                            setEditMode={setEditMode}
                            inputValue={inputValue}/>
                : <Create setEditMode={setEditMode}/>}
        </form>
    );
};

export default ExpenseForm;