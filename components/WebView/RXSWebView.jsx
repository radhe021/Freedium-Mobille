/** @format */

import * as React from "react";
import { WebView } from "react-native-webview";
import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { useRoute } from "@react-navigation/native";



export default function RXSWebView() {
	const route = useRoute();
	const { articleURL } = route.params;
	console.log("URLD", articleURL);
	return (
		<WebView 
			style={styles.container} 
			source={{ uri: articleURL }} 
			startInLoadingState={true}
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
