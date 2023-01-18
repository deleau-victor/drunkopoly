import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NativeBaseProvider,Text, View } from "native-base";
import Theme from './Theme';


export default function App() {
  return (
    <NativeBaseProvider theme={Theme}>
        <View flex={1} alignItems="center" justifyContent="center" bgColor="primary.blue">
          <Text>sqd</Text>
          <StatusBar style="auto" />
        </View> 
    </NativeBaseProvider>
  );
}

