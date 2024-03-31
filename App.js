/** @format */
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Home from "./components/Home";
import RXSWebView from "./components/WebView/RXSWebView";
import Login from "./components/Auth/Login.jsx"
import SocialLogin from "./components/Auth/SocialLogin.jsx"

import NewsLetterForm from "./components/FormComponents/NewsLetterForm.jsx";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="SocialLogin"
					component={SocialLogin}
					options={{ title: "Social Login", headerShown: false }}
				/>
				<Stack.Screen
					name="Login"
					component={Login}
					options={{ title: "Login", headerShown: false }}
				/>
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
