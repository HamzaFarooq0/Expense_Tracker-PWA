import React, { useState,useContext } from 'react'
import { GlobalContext } from './GlobalContext'
export const AddTransaction = () => {
    const [title, setText]=useState('');
    const [amount, setAmount]=useState(0);

    const { addTransaction } = useContext(GlobalContext);
    const onSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if(Number(amount) === 0 ){
            alert("Enter Corect Value ")
            return false;
            }
            
                const newTransaction = {
            id: Math.floor(Math.random() * 9999),
            title,
            amount: +amount,
        }

        addTransaction(newTransaction);
       setText('')
       setAmount(0)
    }
   
    return (
        <div>
            <h3>Add Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Title
                    </label>
                        <input type="text" required value={title} onChange={(e)=> setText(e.target.value)} placeholder="Enter Transaction..."></input>
                </div>
                <div className="form-control">
                    <label htmlFor="Amout">Amount<br/>
                    (negtive-Expense, positive-Income)
                    </label>
                        <input type="number"  required value={amount} onChange={(e)=> setAmount(Number(e.target.value))}  placeholder="Amount..."></input>
                </div>
                <button className="btn">Add</button>
            </form>
        </div>
    )
}
