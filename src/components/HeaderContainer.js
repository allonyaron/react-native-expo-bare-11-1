import React from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";

let translations = {};
translations.scanYourBoardingPassToViewOffers =
  "SCAN YOUR BOARDING PASS TO VIEW OFFERS";

const HeaderContainer = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerStyle} />
      <TouchableOpacity
        style={styles.scanBoardingPassStyle}
        onPress={() => console.log("handleScanBoardingPass")}
      >
        <Text style={styles.scanBoardingPassTextStyle}>
          {translations.scanYourBoardingPassToViewOffers}
        </Text>
        {/* <Image
            style={styles.scanBooardingCameraImage}
            // source={require('../../assets/images/icon-camera-heading.png')}
          /> */}
        <Image
          style={[styles.scanBooardingCameraImage]}
          source={require("../assets/images/icon-camera-heading.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderContainer;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    // width: 768
    backgroundColor: "#f6f6f6"
  },
  headerContainer: {
    height: 109
    // borderWidth: 3,
    // borderColor: 'black'
    // height: 200
    // flexDirection: 'row',
    // justifyContent: 'space-between'
  },
  headerStyle: {
    height: 61,
    // width: 50,
    // backgroundColor: 'grey'
    borderBottomWidth: 1,
    borderColor: "#C7C7C7"
  },
  scanBoardingPassStyle: {
    height: 48,
    // width: 50,
    // backgroundColor: 'green'
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    // height: 48,
    justifyContent: "center"
  },
  scanBoardingPassTextStyle: {
    color: "#007aff",
    fontSize: 25.65,
    fontWeight: "500",
    letterSpacing: 0.5,
    textAlign: "center"
  },

  scanBooardingCameraImage: {
    height: 24,
    marginLeft: 12,
    marginRight: 12,
    width: 32.5
    // backgroundColor: 'orange'
  }
});
