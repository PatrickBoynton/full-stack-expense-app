import React, {useState} from 'react';
import Card from '../ui/Card';
import ExpenseFilter from './expense-filter/ExpenseFilter';
import ExpenseChart from './expense-chart/ExpenseChart';
import ExpenseItem from './expense-item/ExpenseItem';
import NoExpense from './no-expense/NoExpense';

const Expenses = ({expenses}) => {

    const [year, setYear] = useState();

    const changeYear = (event) => {
        setYear(event.target.value);
    };

    const filter = expenses
        .filter((expense) => expense.date.getFullYear().toString() === year)
            .map((expense) => <ExpenseItem key={expense.id} year={year} expenses={expense}/>);

    return (
        <Card>
            <ExpenseFilter onChangeYear={changeYear}/>
            <ExpenseChart expenses={expenses}/>
            {filter.length === 0 ? <NoExpense/> : filter}
        </Card>
    );
};

export default Expenses;
