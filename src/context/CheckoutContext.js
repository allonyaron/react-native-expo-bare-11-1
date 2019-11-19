import React, { useState, useReducer } from "react";

import data from "../../data/appState-bak.json";

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
    cartItems,
    cmsIp
  } = data;

  // Order SUmmary
  // item -              "subtotal":"19.00",
  // Discount
  // gratuity -          "tipAmount":"3.42",
  // TotalBeforeTax -    "totalBeforeTax":"22.42",
  // tax -               "tax":"1.26",
  // Order Total         "total":"23.68",

  const orderSummary = {
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
    paymentType
  };

  const orderSummaryMiles = {
    subtotal: airlineSubtotalMiles,
    tipAmount: airlineTip,
    totalBeforeTax: airlineTotalBeforeTax,
    tax: airlineTax,
    total: airlineTotalMiles
  };

  const getItemQuantity = items => {
    let itemQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
    return itemQuantity;
  };

  const initialState = {
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
    itemQuantity: getItemQuantity(cartItems),
    cartItems,
    cmsIp
  };
  // paymentMethod === "CREDITCARD" || " JOINTAB"
  //   ? orderSummaryCurrency
  //   : orderSummaryMiles;

  let reducer = (state, action) => {
    switch (action.type) {
      case "SET_CURRENCY":
        console.log(`SET_CURRENCY`);
        return { ...state, paymentType: action.payload };
      case "SET_MILES":
        console.log(`SET_MILES`);
        return { ...state, paymentType: action.payload };
      case "SET_GRATUITY":
        return { ...state, tipAmount: action.payload };
      case "SET_GRATUITY_MILES":
        return { ...state, airlineTip: action.payload };
      default:
        return state;
    }
  };

  // const CurrencyReducer = ((state = initialState), reducer);

  const [state, dispatch] = useReducer(reducer, initialState);

  // const [isCurrency, setIsCurrency] = useState(true);
  // const [paymentMethod, setPaymentMethod] = useState(paymentType);

  // const [subtotalAmount, setSubTotalAmount] = useState(subtotal);
  // const [itemQuantity, setItemQuantity] = useState(getItemQuatity(cartItems));
  // const [gratuityAmount, setGratuityAmount] = useState(tipAmount);

  // I am looking to toggle all values for payment method, subtotalamount, gratuityAmount when the paymentmethod is toggled

  // if (paymentMethod === "CREDITCARD" || " JOINTAB") {
  //   setSubTotalAmount(subtotal);
  //   // setGratuityAmount();
  // } else {
  //   setSubTotalAmount(airlineSubtotalMiles);
  //   // setGratuityAmount(airlineTip);
  // }

  //   const [totalBeforeTaxAmount, setTotalBeforeTaxAmount] = useState(
  //     totalBeforeTax
  //   );

  //   const [totalAmount, setTotalAmount] = useState(total);

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
        // orderSummaryMiles,
        // isCurrency,
        // setIsCurrency,
        // paymentMethod,
        // setPaymentMethod,
        // subtotal,
        // subtotalAmount,
        // setSubTotalAmount,
        // itemQuantity,
        // // setItemQuantity,
        // gratuityAmount,
        // setGratuityAmount,
        // tax,
        // itemQuantity,
        state,
        dispatch
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutContext;
