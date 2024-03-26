import React, { useState } from "react";
import { Alert, View, StyleSheet } from "react-native";
import { Button, Input, Text } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import mirros from "./../Mirrors.json";
import {saveData} from  './../../utils/asyncDBUtils'

function InputWithButton() {
	const navigation = useNavigation();
	const [value, setValue] = useState("");

	async function handleSubmit() {

		if (!value) {
			Alert.alert("Please enter a valid url");
			return;
		}
		const curretURLWithMirros =
			mirros[Math.floor(Math.random() * mirros.length)] + value;

		saveData(value, curretURLWithMirros);
		navigation.navigate("Freedium", {
			articleURL: curretURLWithMirros,
		});
	}

	return (
		<View style={styles.container}>
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

