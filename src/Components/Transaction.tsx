import React, { useContext } from 'react';

import { GlobalContext } from './GlobalContext'
import { TransactionType } from './Types';


const Transaction: React.FC<TransactionType> = ({id, title, amount}) => {
    const { deleteTransaction } = useContext(GlobalContext);

    const sign = amount> 0 ? '+' : '-';
    
    return (
        <li className={amount > 0 ? 'plus' : 'minus'}>
            {title}<span>{sign}${Math.abs(amount)}</span>
            <button onClick={() => deleteTransaction(id)} className="delete-btn">x</button>
        </li>
    )   
}

export default Transaction; 