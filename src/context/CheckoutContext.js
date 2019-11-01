import React, { useState } from 'react';

import data from '../../data/appState.json';

//clean this up


// console.log(`tipAmount1 - ${tipAmount}`);

// console.log(`payment_type 1 - ${paymentType}`);
//is this the best way to set this up??


const CheckoutContext = React.createContext();

export const CheckoutProvider = ({ children }) => {

	let {
		subtotal,
		tipAmount,
		totalBeforeTax,
		tax,
		total,
		airlineSubtotalMiles,
		airlineTip,
		airlineTotalBeforeTax,
		airlineTax,
		airlineTotalMiles,
		paymentType,
	} = data;


	const orderSummaryCurrency = {
		subtotal,
		totalBeforeTax,
		tax,
		total,
	};
	
	console.log(`orderSummaryCurrency 1 - ${JSON.stringify(orderSummaryCurrency)}`);
	
	const orderSummaryMiles = {
		subtotal: airlineSubtotalMiles,
		tipAmount: airlineTip,
		totalBeforeTax: airlineTotalBeforeTax,
		tax: airlineTax,
		total: airlineTotalMiles,
	};

	console.log(`tipAmount 2 - ${tipAmount}`);
	console.log(`orderSummaryCurrency 2 - ${JSON.stringify(orderSummaryCurrency)}`);

	console.log(`payment_type 2 - ${paymentType}`);
	const [isCurrency, setIsCurrency] = useState(true);
	const [paymentMethod, setPaymentMethod] = useState(paymentType);
	const [gratuityAmount, setGratuityAmount] = useState(tipAmount);
	//   let isCurrency = "true";
	//   setIsCurrency(false);
	//why does this cause - console.error: "Unhandled JS Exception: Invariant Violation: Too many re-renders. React limits the number of renders to prevent an infinite loop.

	//Can this be set here or needs to be passed down and set in orderSummary?????
	//   let orderSummary =  isCurrency ? orderSummaryCurrency : orderSummaryMiles;}
	//with a function??
	//   const orderSummary = () => {
	//       return isCurrency ? orderSummaryCurrency : orderSummaryMiles;}

	return (
		<CheckoutContext.Provider
			value={{
				orderSummaryCurrency,
				orderSummaryMiles,
				isCurrency,
				setIsCurrency,
				paymentMethod,
				setPaymentMethod,
				subtotal,
				setGratuityAmount,
				gratuityAmount,
			}}
		>
			{children}
		</CheckoutContext.Provider>
	);
};

export default CheckoutContext;
