import React, { FC, useEffect, useState } from "react"
import {
	Alert,
	Box,
	Button,
	Center,
	Image,
	Input,
	Row,
	ScrollView,
	Slider,
	Text,
	View,
} from "native-base"
import { useAppDispatch, useAppSelector } from "../hooks/typedReduxHooks"
import { addPlayer } from "../slices/player.slice"
import { RootStackParamList } from "../App"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { SafeAreaView } from "react-native-safe-area-context"

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">

const Home: FC<HomeProps> = ({ navigation }) => {
	const dispatch = useAppDispatch()
	const [onChangeValue, setOnChangeValue] = React.useState(50)
	const [players, setPlayers] = useState<string[]>([])

	// Check if all players' names are correct
	const checkPlayers = () => {
		players.forEach((playerName) => {
			// Check if player's name has a correct length
			if (playerName.length < 3)
				throw new Error("player list has player with too short names")

			// find all occurrences of player's name
			let playerOccurences = players.filter(
				(player) => player === playerName,
			)

			// check if a player's name has more than one occurrence
			if (playerOccurences.length > 1)
				throw new Error("Player has more than one occurrence")
		})
	}

	return (
		<View>
			<SafeAreaView>
				{/* Logo and title */}
				<Box
					style={{ transform: [{ rotate: "-10deg" }] }}
					width='full'
					justifyItems='center'
					marginBottom={10}>
					{/* Logo */}
					<Image
						source={require("../assets/images/logo.png")}
						resizeMode='contain'
						width='80%'
						alt='logo'
						marginX='auto'
					/>
					{/* Title */}
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

				<Box
					width='80%'
					marginTop='10%'
					marginX='auto'
					background='primary.red'
					rounded='2xl'>
					{/* Header */}
					<Box>
						<Text
							color='primary.white'
							fontSize='2xl'
							fontWeight='bold'
							marginX='auto'>
							Liste des Joueurs
						</Text>
					</Box>

					{/* Body */}
					<ScrollView
						background='primary.white'
						roundedBottom='2xl'
						h='30%'
						overflow='hidden'
						margin='1'>
						{/* for each player */}
						{players.map((player, index) => (
							<Row key={index}>
								{/* input to customize player's name */}
								<Input
									placeholder={`joueur${index}`}
									flex='1'
									variant='underlined'
									padding='2'
									value={player}
									onChangeText={(text) =>
										setPlayers(
											players.map((player, number) =>
												number != index ? player : text,
											),
										)
									}
								/>

								{/* Delete a player */}
								<Button
									rounded='none'
									background='transparent'
									_text={{ color: "gray.600", fontWeight: "bold" }}
									onPress={() =>
										setPlayers(
											players.filter(
												(player, number) => number !== index,
											),
										)
									}>
									X
								</Button>
							</Row>
						))}
					</ScrollView>

					{/* Add a player */}
					<Box position='absolute' w='full' bottom='-20'>
						<Button
							w='25%'
							marginX='auto'
							onPress={() => setPlayers([...players, ""])}>
							+
						</Button>
					</Box>
				</Box>

				{/* Start Button */}
				<Center marginTop='10%' w='70%' mx='15%'>
					<Text fontSize='lg' fontWeight='bold'>
						On joue pour
					</Text>
					<Text textAlign='center' fontSize='xl' fontWeight='bold' mb={2}>
						{onChangeValue} Gorgées !
					</Text>
					<Slider
						minValue={20}
						maxValue={150}
						defaultValue={50}
						step={5}
						size='lg'
						colorScheme='red'
						onChange={(v) => {
							setOnChangeValue(Math.floor(v))
						}}>
						<Slider.Track>
							<Slider.FilledTrack />
						</Slider.Track>
						<Slider.Thumb />
					</Slider>
				</Center>

				<Button
					disabled={players.length < 2 ? true : false}
					width='60%'
					marginTop='10%'
					marginX='auto'
					_text={{ fontWeight: "bold", fontSize: "2xl" }}
					background={players.length < 2 ? "red.400" : "primary.red"}
					onPress={() => {
						checkPlayers()
						players.forEach((player) => {
							dispatch(
								addPlayer({ name: player, gorgées: onChangeValue }),
							) // add players to the players store
							setPlayers([]) // reset the home players list
							navigation.navigate("Game")
						})
					}}>
					Jouer
				</Button>
			</SafeAreaView>
		</View>
	)
}

export default Home
