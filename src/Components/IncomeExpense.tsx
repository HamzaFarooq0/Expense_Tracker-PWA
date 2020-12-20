import React,{useContext} from 'react'
import {GlobalContext} from './GlobalContext'
export const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext);
    const transactioAmounts = transactions.map(transaction => transaction.amount);
    const income = transactioAmounts.filter(i => i>0).reduce((a, b) => (a+b), 0);
    const expense = -transactioAmounts.filter(i => i<0).reduce((a, b) => (a+b), 0);
    return (
        <div className="inc-exp-container"> 
            <div>
                <h4>Income</h4>
                <p id="money-plus" className="money plus">+${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id="money-minus" className="money minus">-${expense}</p>
            </div>
        </div>
    )
}
