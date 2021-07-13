import {useState} from 'react';

const useInput = () => {
    const [inputValue, setInputValue] = useState({title: '', amount: 0, date: new Date()});

    const handleInput = (event) => {
        if (event.target.name === 'date') console.log(event.target.value);

        if (event.target.name === 'amount') {
            setInputValue({
                ...inputValue,
                [event.target.name]: +event.target.value,
            });
        } else {
            setInputValue({
                ...inputValue,
                [event.target.name]: event.target.value,
            });
        }
    };

    return [inputValue, handleInput];
};

export default useInput;