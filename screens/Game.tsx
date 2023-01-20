import React, { FC, useEffect, useState } from "react"
import {
	Box,
	Flex,
	Text,
	View,
	Image,
	Column,
	Center,
	Button,
} from "native-base"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../App"
import { SafeAreaView } from "react-native-safe-area-context"
import Playerlist from "../components/game/playerlist"
import { Alert } from "react-native"
import { useAppDispatch } from "../hooks/typedReduxHooks"
import { resetPlayers } from "../slices/player.slice"
import GameTopInfo from "../components/game/gameTopInfo"
import GameBoard from "../components/game/gameBoard"
import GameCard from "../components/card/gameCard"

type GameProps = NativeStackScreenProps<RootStackParamList, "Game">

const Game: FC<GameProps> = ({ navigation }) => {
	const [size, setSize] = useState<number>(0)

	const [cardToDisplay, setcardToDisplay] = useState<number>()

	const dispatch = useAppDispatch()

	useEffect(() => {
		navigation.addListener("beforeRemove", (event) => {
			event.preventDefault()
			Alert.alert(
				"Retourner à l'écran d'accueil ?",
				"Si vous quittez la partie, celle-ci sera remise à zéro.",
				[
					{
						text: "Annuler",
						style: "cancel",
						onPress: () => {},
					},
					{
						text: "Ok",
						style: "destructive",
						onPress: () => {
							dispatch(resetPlayers())
							navigation.dispatch(event.data.action)
						},
					},
				],
			)
		})
	}, [navigation])

	useEffect(() => {
		console.log(cardToDisplay)
	}, [cardToDisplay])

	return (
		<View>
			<SafeAreaView
				onLayout={(event) => {
					const { width } = event.nativeEvent.layout
					setSize(width / 7 - 8)
				}}>
				<Center height='100%'>
					{/* Top info content */}
					<GameTopInfo />
					{/* Game board */}
					<Flex
						width={`${size! * 7 + 6 * 8}px`}
						height={`${size! * 7 + 6 * 8}px`}
						marginX='auto'
						justifyContent='center'
						alignItems='center'>
						<GameBoard size={size} openCard={setcardToDisplay} />
						<Box
							width='full'
							position='absolute'
							zIndex={20}
							style={{
								transform: [{ rotate: "-45deg" }, { translateY: -16 }],
							}}>
							<Image
								source={require("../assets/images/logo.png")}
								resizeMode='contain'
								width='80%'
								alt='logo'
								marginX='auto'
							/>
						</Box>
					</Flex>
					{/* Bottom interaction zone */}
					<Center height='20%'>
						<Button onPress={() => navigation.navigate("Test")}>
							<Text
								fontWeight='bold'
								color='primary.white'
								fontSize='2xl'>
								Lancez le dé
							</Text>
						</Button>
					</Center>
				</Center>
			</SafeAreaView>
			<GameCard />
		</View>
	)
}

export default Game
