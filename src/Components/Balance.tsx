import React,{useContext} from 'react'
import {GlobalContext} from './GlobalContext';
export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    
    const transactioAmounts = transactions.map(transaction => transaction.amount);
    const balance = transactioAmounts.reduce((a, b) => (a + b), 0);
    return (
        <div className="balance">
          
                <h3>Balance</h3>
                <h2>${balance}</h2>
            
        </div>
    )
}
