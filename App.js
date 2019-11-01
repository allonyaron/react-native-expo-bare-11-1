import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';

import { CheckoutProvider } from './src/context/CheckoutContext';
import { VoucherProvider } from './src/context/VoucherContext';
import { OrientationProvider } from './src/context/OrientationContext';

import CheckoutScreen from './src/screens/CheckoutScreen';

// import OrientationContext from './src/context/OrientationContext';

//
const App = () => {
	// const {orientation} = useContext(OrientationContext);
	return <CheckoutScreen />;
};

export default () => {
	return (
		<CheckoutProvider>
			<VoucherProvider>
				<OrientationProvider>
					<App />
				</OrientationProvider>
			</VoucherProvider>
		</CheckoutProvider>
	);
};
