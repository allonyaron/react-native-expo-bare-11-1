import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";

function Plus({ addQuantity }) {
  return (
    <TouchableOpacity onPress={addQuantity}>
      <Image
        style={styles.plus}
        source={require("../assets/images/ui-plus-44-x-44-blue.png")}
      />
    </TouchableOpacity>
  );
}

function Minus({ subtractQuantity, minusStyle }) {
  return (
    <TouchableOpacity>
      <Image
        style={styles.minus}
        source={require("../assets/images/ui-minus-44-x-44-blue.png")}
      />
    </TouchableOpacity>
  );
}

const ItemContainer = () => {
  return (
    <View style={styles.itemContainer}>
      <Image
        style={styles.itemImage}
        source={require("../assets/images/thumbnail-food.png")}
      />
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemTextTitle}>Sausage Party</Text>
        <Text style={styles.itemTextModifiers}>Add Chicken</Text>
      </View>
      <View style={styles.quantityContainer}>
        <Minus />
        <Text style={styles.quantityText}>3</Text>
        <Plus />
      </View>
      <Text style={styles.itemPrice}>$248.00</Text>
    </View>
  );
};

const CartContainer = () => {
  return (
    <View style={styles.itemsContainer}>
      <View style={styles.headerBorder}>
        <Text style={styles.headerTitle}> 4 Items on your check</Text>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <ItemContainer />
        <ItemContainer />
        <ItemContainer />
        <ItemContainer />
        <ItemContainer />
        <ItemContainer />
        <ItemContainer />
        <ItemContainer />
        <ItemContainer />
        <ItemContainer />
        <ItemContainer />
      </ScrollView>
    </View>
  );
};

export default CartContainer;

const grey = "#737373";

const styles = StyleSheet.create({
  itemsContainer: {
    flex: 1,
    margin: 12
  },
  headerTitle: {
    color: "#737373",
    fontSize: 20,
    height: 30,
    letterSpacing: 0.8,
    textAlign: "left"
  },
  headerBorder: {
    borderBottomWidth: 1,
    borderColor: "#C7C7C7"
  },
  itemContainer: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  itemImage: {
    height: 56,
    width: 56
  },
  itemTextContainer: {
    flexDirection: "column",
    flex: 1,
    marginLeft: 12
    // alignItems: "baseline"
  },
  itemTextTitle: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 3
    // marginTop: 1
    // paddingLeft: 5
  },
  itemTextModifiers: {
    color: grey,
    fontSize: 15,
    fontWeight: "300"
    // paddingLeft: 5
  },

  itemPrice: {
    fontSize: 17,
    paddingLeft: 14,
    paddingRight: 5
  },
  quantityContainer: {
    flexDirection: "row",
    marginRight: 10,
    marginLeft: 5
  },
  minus: {
    height: 24,
    marginRight: 15,
    width: 24
  },

  plus: {
    height: 24,
    marginLeft: 15,
    width: 24
  },
  quantityText: {
    fontSize: 18
  }
});
