import React, { FC, useState } from "react"
import { Box, Button, Image, Input, Row, Text, View } from "native-base"
import { RootStackParamList } from "../App"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">

const Home: FC<HomeProps> = ({ navigation }) => {
	const [playerNames, setPlayerName] = useState<string[]>([])
	const saveText = (index: number, text: string) => {
		let copy = playerNames
		copy.splice(index, 1, text)
		setPlayerName(copy)
	}

	return (
		<View>
			<Box
				style={{ transform: [{ rotate: "-15deg" }] }}
				width='full'
				justifyItems='center'
				marginBottom={10}>
				<Image
					source={require("../assets/images/logo.png")}
					resizeMode='contain'
					width='80%'
					alt='logo'
					marginX='auto'
				/>
				<Text
					color='primary.white'
					position='absolute'
					width={"80%"}
					textAlign='center'
					marginX='10%'
					bottom={0}
					fontWeight='bold'
					fontSize='xl'>
					Le Monopoly des soirées
				</Text>
			</Box>
			<Button
				width='60%'
				marginX='auto'
				_text={{ fontWeight: "bold", fontSize: "2xl" }}
				background='primary.red'
				onPress={() => navigation.navigate("Game")}>
				Jouer
			</Button>
			<Row justifyContent='center' width='full'>
				<Text color='primary.white' fontWeight='bold' fontSize='xl'>
					Taux de satiété
				</Text>
			</Row>
			<Input onChangeText={(text) => saveText(0, text)} />
			<Input onChangeText={(text) => saveText(1, text)} />
		</View>
	)
}

export default Home
