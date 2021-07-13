import './App.css';
import NewExpense from './components/expense-form/new-expense/NewExpense';
import Expenses from './components/expenses/Expenses';
import useFetch from './components/hooks/useFetch';

const App = () => {
    const [expenses, setExpenses] = useFetch()

    const addExpense = (expense) => {
        setExpenses([expense, ...expenses]);
    };

    return (
        <>
            <NewExpense onAddExpense={addExpense}/>
            <Expenses expenses={expenses}/>
        </>
    );
};

export default App;
