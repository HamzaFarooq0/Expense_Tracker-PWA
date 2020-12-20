import React from 'react';
import { Header } from './Components/Header';
import { Balance } from './Components/Balance';
import './App.css';
import { IncomeExpense } from './Components/IncomeExpense';
import { TransactionList } from './Components/TransactionList';
import { AddTransaction } from './Components/AddTransaction';
import { GlobalProvider } from './Components/GlobalContext';

import firebase from './firebase'

const App = () => {
	const messaging = firebase.messaging();
	messaging.requestPermission()
		.then( () => {
			return messaging.getToken();
		})
			.then( (token) => {
				return console.log('Token:', token )
			}
		)

	return (
		<GlobalProvider>
			<Header />
			<div className="container">
				<Balance />
				<IncomeExpense />
				<TransactionList />
				<AddTransaction />
			</div>
		</GlobalProvider>
	);
}

export default App;
