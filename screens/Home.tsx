import React, { FC } from "react"
import { AspectRatio, Box, Button, Image, Text, View } from "native-base"
import { TileFamily } from "../database/index"
type HomeProps = {}

const Home: FC<HomeProps> = ({}) => {
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
				onPress={() => console.log("hello world")}>
				Jouer
			</Button>
			<Text>{TileFamily[0].name}</Text>
		</View>
	)
}

export default Home
