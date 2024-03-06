/** @format */
import React, { useState, useEffect } from "react";

import { StyleSheet, Text, KeyboardAvoidingView, Keyboard } from "react-native";
import CommonLayout from "./CommonLayout";
import InputWithButton from "./FormComponents/InputWithButton";

const Home = () => {
	const [marginFromTop, setmarginFromTop] = useState(100);
	useEffect(() => {
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
			<KeyboardAvoidingView enabled={true}>
				<Text
					category="h1"
					style={[styles.heading, { marginTop: marginFromTop }]}
				>
					Knowledge beyond paywalls !{" "}
				</Text>
				<InputWithButton />
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
});
