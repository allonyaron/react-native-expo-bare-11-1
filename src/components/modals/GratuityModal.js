import React, { useState } from "react";
import { View, Text, TouchableHighlight, Modal } from "react-native";

import Slider from "@react-native-community/slider";

const GratuityModal = ({
  modalVisible,
  setModalVisible,
  tipPercent,
  setTipPercent
}) => {
  const [sliderValue, setSliderValue] = useState(tipPercent);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
    >
      <View>
        <Text>sliderValue = {sliderValue * 100}</Text>
        <TouchableHighlight
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <Text>Hide Modal</Text>
        </TouchableHighlight>
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          value={sliderValue}
          onValueChange={value => setSliderValue(value)}
        />
      </View>
    </Modal>
  );
};

export default GratuityModal;
