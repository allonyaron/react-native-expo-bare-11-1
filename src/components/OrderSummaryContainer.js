import React, { useContext, useState } from "react";
import { View, StyleSheet, Text, Switch } from "react-native";

import CheckoutContext from "../context/CheckoutContext";
import VoucherContext from "../context/VoucherContext";

let orderSummaryLabel = "ORDER SUMMARY";
let takeoutLabel = "TAKEOUT?";

let enabled = false;
let itemText = "Item";
let numberOfItems = 1;
let discountLabel = "Discount";
let gratuityLabel = "Gratuity";
let gratuity = "$8.42";
let totalBeforeTaxLabel = "Total Before Tax";

// let totalBeforeTaxNEW = "50.45";

let taxLabel = "Tax";
// let tax = "$3.10";
// let subtotal = "$48.90";
// let exception = "-$10.00";
let orderTotalLabel = "ORDER TOTAL";
let orderTotalAmounts = "$51.00";

// let isException = false;
// let exception;

//where is a good place to put formatting code?
//review code
const isPositive = number => Number(number) >= 0;

const formatCurrency = currencyObj => {
  return Object.keys(currencyObj).reduce((acc, key) => {
    let objVal = Math.abs(currencyObj[key])
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    acc[key] = isPositive(currencyObj[key]) ? `${objVal}` : `${objVal}`;
    return acc;
  }, {});
};
const formatMiles = milesObj => {
  return Object.keys(milesObj).reduce((acc, key) => {
    acc[key] = milesObj[key].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return acc;
  }, {});
};
const OrderSummary = () => {
  // const { orderSummary, setIsCurrency, isCurrency } = useContext(
  //   CheckoutContext
  // );
  const {
    orderSummaryCurrency,
    orderSummaryMiles,
    isCurrency,
    tipAmount,
    gratuityAmount
  } = useContext(CheckoutContext);
  const { exceptionAmount, showException } = useContext(VoucherContext);

  //   console.log(`totalBeforeTaxNEW - ${totalBeforeTaxNEW}`);
  //why can't I set it this way? what's a good fix?
  // const [showException, setShowException] = useState(false);

  // if (exceptionAmount > 0) {
  //   setShowException(true);
  // }

  const formattedTotal = isCurrency
    ? formatCurrency(orderSummaryCurrency)
    : formatMiles(orderSummaryMiles);
  console.log(`formattedTotal - ${JSON.stringify(formattedTotal)}`);
  console.log(`TEST`);

  // console.log(`voucherData - ${JSON.stringify(voucherData.amount)}`);

  const { subtotal, totalBeforeTax, tax, total } = orderSummaryCurrency;

  totalBeforeTaxDisplay = (+totalBeforeTax * 100 - exceptionAmount * 100) / 100;

  // let test = isCurrency ? "true" : "false";
  return (
    <View style={styles.orderSummaryContainer}>
      <Text style={styles.orderSummaryLabel}>{orderSummaryLabel}</Text>
      <View style={styles.rowContainer}>
        <Text style={styles.takeoutLabel}>{takeoutLabel}</Text>
        <Switch
          style={styles.switch}
          value={enabled}
          onValueChange={() => {}}
          // ios_backgroundColor={"#737373"}
          // trackColor={{ false: "#737373", true: "#737373" }}
        />
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.textLabel}>{`${itemText}(${numberOfItems})`}</Text>
        <Text style={styles.textLabel}>${subtotal}</Text>
      </View>
      {showException && (
        <View style={styles.rowContainer}>
          <Text style={styles.textLabel}>{discountLabel}</Text>
          <Text style={styles.textLabel}>-${exceptionAmount}</Text>
        </View>
      )}
      <View style={styles.rowContainer}>
        <Text style={styles.textLabel}>{gratuityLabel}</Text>
        <Text style={styles.textLabel}>${gratuityAmount}</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.textLabel}>{totalBeforeTaxLabel}</Text>
        <Text style={styles.textLabel}>${totalBeforeTaxDisplay}</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.textLabel}>{taxLabel}</Text>
        <Text style={styles.textLabel}>${tax}</Text>
      </View>
      <View
        style={{
          borderBottomColor: "#C7C7C7",
          borderBottomWidth: 1
          //   marginLeft: 13,
          //   marginRight: 13
        }}
      />
      <View style={styles.rowContainer}>
        <Text style={styles.orderTotal}>{orderTotalLabel}</Text>
        <Text style={[styles.orderTotal, styles.orderTotalAmount]}>
          ${total}
        </Text>
      </View>
    </View>
  );
};

export default OrderSummary;

const darkGrey = "#737373";

const styles = StyleSheet.create({
  orderSummaryContainer: {
    marginLeft: 13,
    marginRight: 13,
    marginTop: 3
  },
  orderSummaryLabel: {
    color: "#737373",
    fontSize: 20,
    fontWeight: "600",
    height: 30,
    letterSpacing: 0.8,
    textAlign: "left"
    // width: 209
  },
  switch: {
    flex: 0.3,
    height: 30,
    // marginRight: 13,
    width: 73,
    marginRight: 25
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // display: 'flex',
    // flexDirection: 'row',
    marginTop: 5
  },
  takeoutLabel: {
    color: "#737373",
    //flex: 0.7,
    fontSize: 16.5
    // marginLeft: 13.5,
  },
  textLabel: {
    marginBottom: 10,
    color: "#737373",
    fontSize: 16.5,
    height: 19
  },
  orderTotal: {
    color: "#4cd964",
    fontSize: 14.65,
    fontWeight: "bold"
    // marginTop: 5,
  },
  orderTotalAmount: {
    fontSize: 16.5
  }
});
