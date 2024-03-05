/** @format */
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./components/Home";
import RXSWebView from "./components/WebView/RXSWebView";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={Home}
					options={{ title: "Home", headerShown: false }}
				/>
				<Stack.Screen
					name="Freedium"
					component={RXSWebView}
					options={{ title: "Enjoy the Freedium" }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
