/** @format */
import React, { useState, useEffect } from "react";

import {View, StyleSheet, KeyboardAvoidingView, Keyboard } from "react-native";
import {Text } from "@ui-kitten/components";
import CommonLayout from "./Common/CommonLayout";
import InputWithButton from "./FormComponents/InputWithButton";
import { getCount} from  './../utils/asyncDBUtils'

import SlickCarousel from "./Common/SlickCarousel";


const Home = () => {
	const [marginFromTop, setmarginFromTop] = useState(100);
	const [totalCount, setTotalCount] = useState(0);

	useEffect(() => {
		getCount().then(count => setTotalCount(count));
		const keyboardDidShowListener = Keyboard.addListener(
			"keyboardDidShow",
			() => {
				setmarginFromTop(300);
			}
		);
		const keyboardDidHideListener = Keyboard.addListener(
			"keyboardDidHide",
			() => {
				setmarginFromTop(100);
			}
		);

		return () => {
			keyboardDidHideListener.remove();
			keyboardDidShowListener.remove();
		};
	}, []);

	return (
		<CommonLayout>
			<KeyboardAvoidingView enabled={true} >
				<View style={styles.userStaticsView}> 
				<Text
					category="h1"
					style={[styles.heading, { marginTop: marginFromTop }]}
				>
					Knowledge beyond paywalls !{" "}
				</Text>
			
				<Text category="h3" status="primary">
				Read{" "}
			</Text>
			<Text category="h1" status="success" style={styles.totalCnt}>
				{totalCount}
			</Text>
		
				<InputWithButton />
				<SlickCarousel/>
				</View>
			</KeyboardAvoidingView>
		</CommonLayout>
	);
};

export default Home;

const styles = StyleSheet.create({
	heading: {
		fontSize: 20,
		color: "red",
		fontWeight: "bold",
		textAlign: "center",
		marginTop: 100,
		marginHorizontal: 10,
		padding: 10,
		borderRadius: 10,
		backgroundColor: "#fff",
		borderWidth: 1,
		borderColor: "red",
	},
	userStaticsView:{
		justifyContent: "center",
		alignItems: "center",
	}
});
