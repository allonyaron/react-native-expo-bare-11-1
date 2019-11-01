import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
// import Slider from '@react-native-community/slider';
import GratuityModal from "./modals/GratuityModal";
import { generate } from "shortid";

import CheckoutContext from "../context/CheckoutContext";

let otherTipPercentageLabel = "OTHER";

let tipAmountArr = [16, 18, 20];
let gratuityTotals = subtotal =>
  tipAmountArr.map(amount => {
    return {
      amount,
      tipPercentageLabel: `${amount}%`,
      tipAmount: (subtotal * (amount / 100)).toFixed(2)
    };
  });
// gratuityOptions = [
//   ...gratuityOptions,
//   { tipPercentageLabel: otherTipPercentageLabel }
// ];

const Gratuity = () => {
  const [activeButton, setActiveButton] = useState(18);
  const { subtotal, setGratuityAmount } = useContext(CheckoutContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [tipPercent, setTipPercent] = useState(18);

  const gratuityOptions = gratuityTotals(subtotal);

  return (
    <View>
      <View style={styles.container}>
        {gratuityOptions.map(option => (
          <TouchableOpacity
            style={[
              styles.buttonContainer,
              activeButton === option.amount ? styles.active : null
            ]}
            onPress={() => {
              setActiveButton(option.amount);
              setGratuityAmount(option.tipAmount);
              setTipPercent(option.amount);
            }}
            key={generate()}
          >
            <View>
              <Text style={styles.gratuityText}>{option.amount}%</Text>
              {option.tipAmount && (
                <Text style={styles.amountText}>${option.tipAmount}</Text>
              )}
            </View>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={styles.buttonContainerNoBorder}
          onPress={() => {
            setModalVisible(true);
          }}
          key={generate()}
        >
          <View>
            <Text style={styles.gratuityText}>{otherTipPercentageLabel}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <GratuityModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          tipPercent={tipPercent}
          setTipPercent={setTipPercent}
        />

        {/* <Slider
					style={{ width: 200, height: 40 }}
					minimumValue={0}
					maximumValue={1}
					minimumTrackTintColor='#FFFFFF'
					maximumTrackTintColor='#000000'
				/> */}
      </View>
    </View>
  );
};

export default Gratuity;

const darkGrey = "#737373";
const blue = "#157efb";
const lightGrey = "#d1d1d1";
const grey = "#737373";
const white = "#ffffff";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: blue,
    borderRadius: 4,
    flexDirection: "row",
    height: 43.5,
    marginTop: 8
  },

  buttonContainer: {
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    width: 59,
    flex: 1,
    borderRightWidth: 1,
    borderColor: blue
  },
  buttonContainerNoBorder: {
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    width: 59,
    flex: 1
  },
  active: {
    // color: white,
    backgroundColor: blue
  },
  border: {
    borderColor: blue,
    borderRightWidth: 1
  },
  amountText: {
    color: grey,
    fontSize: 13,
    textAlign: "center"
  },
  gratuityText: {
    color: grey,
    fontSize: 20,
    textAlign: "center"
  }
});
