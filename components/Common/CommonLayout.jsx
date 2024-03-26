/** @format */
import React from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, ScrollView, Dimensions } from "react-native";
import { ApplicationProvider, Layout } from "@ui-kitten/components";

import * as eva from "@eva-design/eva";
import { default as theme } from "../../BxTheme.json"; // <-- Import app theme

const windowHeight = Dimensions.get("window").height;

const CommonLayout = ({ children }) => {
	const { width, height } = Dimensions.get("window");
	return (
		<ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
			<StatusBar
				animated={true}
				barStyle="default"
				showHideTransition="fade"
				style="auto"
			/>
			<Layout style={styles.layout} level="1">
				<SafeAreaView style={ { width, height }}>
					<ScrollView style={styles.scrollViewContent}>{children}</ScrollView>
				</SafeAreaView>
			</Layout>
		</ApplicationProvider>
	);
};

export default CommonLayout;

const styles = StyleSheet.create({
	layout: {
		flex: 1,
		flexWrap: "wrap",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fff",
	},
	scrollViewContent: {
		marginTop: "auto",
		minHeight: Math.round(windowHeight),
	},
});
