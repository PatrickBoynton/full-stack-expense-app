import React, {useState} from 'react';
import EditMode from './edit-mode/EditMode';
import Create from './create/Create';
import './ExpenseForm.css';

const ExpenseForm = ({onSubmitExpense}) => {
    const [inputValue, setInputValue] = useState({title: '', amount: 0, date: new Date()});
    const [editMode, setEditMode] = useState(false);

    const handleInput = (event) => {
        setInputValue({
            ...inputValue,
            [event.target.name]: event.target.value
        });
    };

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