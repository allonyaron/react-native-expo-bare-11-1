import React, { useContext, useState } from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";

import CheckoutContext from "../context/CheckoutContext";

import checked from "../assets/images/ui-checkmark-on.png";
import unchecked from "../assets/images/ui-checkmark-rest.png";
import creditImage from "../assets/images/logo-payment-creditcards.png";

const isSelected = selected => selected === true;
let active = true;

let creditTitle = "Credit";
let payWithMilesTitle = "Pay With Miles";
let joinATabTitle = "Join A Tab";

const PaymentMethod = () => {
  const { paymentMethod, setPaymentMethod } = useContext(CheckoutContext);

  // if (paymentMethod === "CREDITCARD" || " JOINTAB") {
  // 	setSubTotalAmount();
  // 	setGratuityAmount();
  //   } else {
  // 	setSubTotalAmount(airlineSubtotalMiles);
  // 	setGratuityAmount(airlineTip);
  //   }

  // const [isActive, setIsActive] = useState(true);
  return (
    <View>
      <View style={[styles.paymentMethodContainers]}>
        <TouchableOpacity
          onPress={() => {
            setPaymentMethod("CREDITCARD");
          }}
        >
          <Image
            style={styles.checkImage}
            source={paymentMethod === "CREDITCARD" ? checked : unchecked}
          />
        </TouchableOpacity>
        <Text style={styles.text}>{creditTitle}</Text>
        <Image style={styles.creditImage} source={creditImage} />
      </View>
      <View style={[styles.paymentMethodContainers]}>
        <TouchableOpacity
          // disabled={!active}
          onPress={() => {
            setPaymentMethod("MILES");
          }}
        >
          <Image
            style={styles.checkImage}
            source={paymentMethod === "MILES" ? checked : unchecked}
          />
        </TouchableOpacity>

        <Text style={styles.text}>{payWithMilesTitle}</Text>
      </View>
      <View style={[styles.paymentMethodContainers]}>
        <TouchableOpacity
          //disabled={!active}
          onPress={() => {
            setPaymentMethod("JOINTAB");
          }}
        >
          <Image
            style={styles.checkImage}
            source={paymentMethod === "JOINTAB" ? checked : unchecked}
          />
        </TouchableOpacity>
        <Text style={styles.text}>{joinATabTitle}</Text>

        <TouchableOpacity style={styles.informationButton} onPress={() => {}}>
          <Text style={styles.informationButtonText}>i</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({
  checkImage: {
    height: 22,
    width: 22,
    //marginLeft: 20,
    marginRight: 10
  },
  text: {
    fontSize: 16,
    color: "#737373"
  },
  creditImage: {
    marginLeft: 8,
    height: 17,
    width: 124.5
  },
  paymentMethodContainer: {},
  paymentMethodContainers: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 16,
    marginBottom: 8
  },
  informationButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 24,
    width: 24,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#cccccc",
    marginLeft: 7
  },
  informationButtonText: {
    fontStyle: "italic"
  }
});
