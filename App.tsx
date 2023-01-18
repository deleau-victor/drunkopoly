import React from 'react';

// Style
import { NativeBaseProvider } from "native-base";
import Theme from './Theme';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screens
import Home from './screens/Home';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const Stack = createNativeStackNavigator()


export default function App() {
  return (
    <NativeBaseProvider theme={Theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false, // hide the default header
            }}
            initialRouteName="Home" // set the initial route name
          >
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}

