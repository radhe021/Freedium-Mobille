/** @format */

// /** @format */

import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Input, Text } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import mirros from "./../Mirrors.json";

import AsyncStorage from "@react-native-async-storage/async-storage";

function InputWithButton() {
	const navigation = useNavigation();
	const [value, setValue] = useState("");

	const totalCount = isNaN(getCount()) ? 0 : getCount();

	async function handleSubmit() {
		console.log(value);

		const curretURLWithMirros =
			mirros[Math.floor(Math.random() * mirros.length)] + value;

		saveData(value, curretURLWithMirros);
		navigation.navigate("Freedium", {
			articleURL: curretURLWithMirros,
		});
	}

	return (
		<View style={styles.container}>
			<Text category="h3" status="primary">
				Read{" "}
			</Text>
			<Text category="h1" status="success">
				{totalCount}
			</Text>

			<Input
				placeholder="Enter Medium article url"
				value={value}
				onChangeText={(nextValue) => setValue(nextValue)}
				style={styles.input}
			/>
			<Button onPress={handleSubmit} style={styles.button} status="success">
				Read for free{" "}
			</Button>
		</View>
	);
}

export default InputWithButton;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 30,
	},
	input: {
		width: "80%",
		margin: 10,
	},
	button: {
		margin: 10,
		width: "80%",
	},
});

const saveData = async (key, value) => {
	try {
		await AsyncStorage.setItem(key, value);
	} catch (error) {
		console.error("Error saving count:", error);
	}
};

const getCount = async () => {
	try {
		const value = await AsyncStorage.getAllKeys();
		return value.length ?? 0; // Handle non-numeric values
	} catch (error) {
		console.error("Error retrieving count:", error);
	}
};
