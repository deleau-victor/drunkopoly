import React from "react"

// Style
import { NativeBaseProvider } from "native-base"
import Theme from "./Theme"

// Navigation
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

// Screens
import Home from "./screens/Home"
import { SafeAreaProvider } from "react-native-safe-area-context"

// State management
import { Provider } from "react-redux"
import { store } from "./store/store"
import Game from "./screens/Game"

export type RootStackParamList = {
	Home: undefined
	Game: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
	return (
		<Provider store={store}>
			<NativeBaseProvider theme={Theme}>
				<SafeAreaProvider>
					<NavigationContainer>
						<Stack.Navigator
							screenOptions={{
								headerShown: false, // hide the default header
							}}
							initialRouteName='Home' // set the initial route name
						>
							<Stack.Screen name='Home' component={Home} />
							<Stack.Screen name='Game' component={Game} />
						</Stack.Navigator>
					</NavigationContainer>
				</SafeAreaProvider>
			</NativeBaseProvider>
		</Provider>
	)
}
