/** @format */

import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Button } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";

const Card = ({ title, imageSource }) => {
	const navigation = useNavigation();
	function navigateToFilePicker() {
		navigation.navigate("Freedium", {
			pageState: {
				backgroundImagePath: imageSource,
			},
		});
	}

	return (
		<TouchableOpacity onPress={navigateToFilePicker} style={styles.card}>
			<View>
				<Image source={imageSource} style={styles.image} />
				<Text style={styles.title}>{title}</Text>
				<Button
					onPress={navigateToFilePicker}
					appearance="outline"
					size="small"
					status="danger"
					font-size="16"
					style={{ marginTop: 10 }}
				>
					Use this
				</Button>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	card: {
		backgroundColor: "#fff",
		padding: 10,
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.3,
		shadowRadius: 2,
		elevation: 5,
		margin: 10,
		width: "40%",
	},
	image: {
		width: "100%",
		height: 160,
		borderRadius: 10,
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
		marginTop: 10,
		textAlign: "center",
	},
	content: {
		marginTop: 10,
		fontSize: 16,
	},
});

export default Card;
