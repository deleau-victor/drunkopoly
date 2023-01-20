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
import { nextPlayer, playerMoove, resetPlayers } from "../slices/player.slice"
import { Player } from "../store/types/player"

// database
import { Tile } from "../database"

type GameProps = NativeStackScreenProps<RootStackParamList, "Game">

interface cardToDisplay {
	id: number | undefined
	owner: Player | undefined
	context: "noOwner" | "isOwner" | "isLocator" | "isLooking"
}

const Game: FC<GameProps> = ({ navigation }) => {
	const [size, setSize] = useState<number>(0)
	const [cardToDisplay, setcardToDisplay] = useState<
		cardToDisplay | undefined
	>()

	const { players, currentPlayer } = useAppSelector(
		(state) => state.PlayerState,
	)

	const properties = useAppSelector((state) => state.propertiesState)

	const dispatch = useAppDispatch()

	const handleCardDisplay = (id: number) => {
		const owner = players.find((player) => player.possesion.includes(id))
		setcardToDisplay({ id, owner: owner, context: "isLooking" })
	}

	const getRunderDiceNumber = () => {
		let result = Math.round(Math.random() * 6)
		if (result === 0) {
			result = 1
		}
		return result
	}

	const calcPlayerNextPosition = (diceScore: number) => {
		let tot = diceScore + players[currentPlayer].position
		if (tot > Tile.length - 1) {
			return (tot = tot - Tile.length)
		}
		return tot
	}

	const moovePlayerToNextPosition = (nextPosition: number) => {
		let currentPosition = players[currentPlayer].position

		// while player isn't at next position
		do {
			if (currentPosition < Tile.length - 1) {
				currentPosition += 1
				dispatch(playerMoove(currentPosition))
			} else {
				currentPosition = 0
				dispatch(playerMoove(currentPosition))
			}
		} while (currentPosition != nextPosition)
		if (
			Tile[nextPosition].tilefamily_id! ||
			Tile[nextPosition].tilefamily_id === 0
		) {
			let asOwner = properties.find(
				(property) => property.propertyId === nextPosition,
			)
			if (asOwner !== undefined) {
				if (asOwner.ownerId === players[currentPlayer].id) {
					setcardToDisplay({
						context: "isOwner",
						id: nextPosition,
						owner: players[currentPlayer],
					})
				} else {
					setcardToDisplay({
						context: "isLocator",
						id: nextPosition,
						owner: players[asOwner.ownerId],
					})
				}
			} else {
				setcardToDisplay({
					context: "noOwner",
					id: nextPosition,
					owner: undefined,
				})
			}
		} else {
			dispatch(nextPlayer())
		}
	}

	const roleDice = () => {
		let diceNumber = getRunderDiceNumber()
		let playerNextPosition = calcPlayerNextPosition(diceNumber)
		moovePlayerToNextPosition(playerNextPosition)
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
				// calculate the size of each case
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
					<Center height='25%'>
						<Button onPress={() => roleDice()}>
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

			{/* Card's Modal */}
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
						context={cardToDisplay.context}
					/>
				</Center>
			) : null}
		</View>
	)
}

export default Game
