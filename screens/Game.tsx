// React
import React, { FC, useEffect, useState } from "react"
import { Alert } from "react-native"

// NativeBase
import { Text, View, Center, Button, Modal } from "native-base"
import { SafeAreaView } from "react-native-safe-area-context"

// Navigation
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../App"

// Components
import GameTopInfo from "../components/game/gameTopInfo"
import GameBoard from "../components/game/gameBoard"
import GameCard from "../components/card/gameCard"

// State management
import { useAppDispatch, useAppSelector } from "../hooks/typedReduxHooks"
import { resetPlayers } from "../slices/player.slice"
import { Player } from "../store/types/player"

type GameProps = NativeStackScreenProps<RootStackParamList, "Game">

interface cardToDisplay {
	id: number | undefined
	owner: Player | undefined
}

const Game: FC<GameProps> = ({ navigation }) => {
	const [size, setSize] = useState<number>(0)
	const [cardToDisplay, setcardToDisplay] = useState<cardToDisplay>()

	const { players } = useAppSelector((state) => state.PlayerState)

	const dispatch = useAppDispatch()

	const handleCardDisplay = (id: number) => {
		const owner = players.find((player) => player.possesion.includes(id))
		setcardToDisplay({ id, owner: owner })
	}

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
					<GameBoard size={size} openCard={handleCardDisplay} />
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
			{cardToDisplay ? (
				<Center
					height='full'
					position='absolute'
					width='full'
					background='rgba(0,0,0,0.5)'
					opacity={100}>
					<GameCard
						close={() => setcardToDisplay(undefined)}
						propertyId={cardToDisplay.id}
						owner={cardToDisplay.owner}
					/>
				</Center>
			) : null}
		</View>
	)
}

export default Game
