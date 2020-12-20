import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import {TransactionType} from './Types'

const initialState = {
    transactions : [
        {id: 1, title: "Book", amount: 20},
        {id: 2, title: "Shopping", amount: -50},
        {id: 3, title: "Salery", amount: 500}
    ],
    deleteTransaction : (id: number) => {},
    addTransaction : (transaction: TransactionType) => {}

}

export const GlobalContext = createContext(initialState);

export const GlobalProvider : React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions (will be sent to reducer)
    function deleteTransaction(id: number) {
      dispatch({
        type: 'delete',
        id
      })
    }

    function addTransaction(transaction: TransactionType) {
      dispatch({
        type: 'add',
        transaction
      })
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}>
        {children}
      </GlobalContext.Provider>);

}