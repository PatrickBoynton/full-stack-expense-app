import {useEffect, useState} from 'react';

const useFetch = () => {
    const [expenses, setExpenses] = useState([]);

    const fetchExpenses = async () => {
        const response = await fetch('/api/v1/expenses/');
        const data = await response.json();
        const expenseArray = [];
        data.map((expense) => expenseArray.push({
                id: expense.id,
                title: expense.title,
                amount: +expense.amount,
                date: new Date(expense.date_created),
            })
        );
        setExpenses(expenseArray);
    };

    useEffect(() => {
        fetchExpenses();
    }, []);

    return [expenses, setExpenses]
};

export default useFetch