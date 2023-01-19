import React, { FC, useEffect, useState } from 'react'
import {
	Box,
	Button,
	Image,
	Input,
	Row,
	ScrollView,
	Text,
	View,
} from 'native-base'
import { useAppDispatch, useAppSelector } from '../hooks/typedReduxHooks'
import { addPlayer, updatePlayer } from '../slices/player.slice'
import { RootStackParamList } from '../App'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { SafeAreaView } from 'react-native-safe-area-context'

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home: FC<HomeProps> = ({ navigation }) => {
	const dispatch = useAppDispatch()

	const [players, setPlayers] = useState<string[]>([])

	return (
		<View>
			<SafeAreaView>
				{/* Logo and title */}
				<Box
					style={{ transform: [{ rotate: '-10deg' }] }}
					width='full'
					justifyItems='center'
					marginBottom={10}
				>
					{/* Logo */}
					<Image
						source={require('../assets/images/logo.png')}
						resizeMode='contain'
						width='80%'
						alt='logo'
						marginX='auto'
					/>
					{/* Title */}
					<Text
						color='primary.white'
						position='absolute'
						width={'80%'}
						textAlign='center'
						marginX='10%'
						bottom={0}
						fontWeight='bold'
						fontSize='xl'
					>
						Le Monopoly des soirées
					</Text>
				</Box>

				<Box
					width='80%'
					marginTop='10%'
					marginX='auto'
					background='primary.red'
					rounded='2xl'
				>
					{/* Header */}
					<Box>
						<Text
							color='primary.white'
							fontSize='2xl'
							fontWeight='bold'
							marginX='auto'
						>
							Liste des Joueurs
						</Text>
					</Box>

					{/* Body */}
					<ScrollView
						background='primary.white'
						roundedBottom='2xl'
						h='30%'
						overflow='hidden'
						margin='1'
					>
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
												number != index ? player : text
											)
										)
									}
								/>

								{/* Delete a player */}
								<Button
									rounded='none'
									background='transparent'
									_text={{ color: 'gray.600', fontWeight: 'bold' }}
									onPress={() =>
										setPlayers(
											players.filter((player, number) => number !== index)
										)
									}
								>
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
							onPress={() => setPlayers([...players, ''])}
						>
							+
						</Button>
					</Box>
				</Box>

				{/* Start Button */}
				<Button
					disabled={players.length < 2 ? true : false}
					width='60%'
					marginTop='30%'
					marginX='auto'
					_text={{ fontWeight: 'bold', fontSize: '2xl' }}
					background={players.length < 2 ? 'red.400' : 'primary.red'}
					onPress={() => {
						players.forEach((player) => {
							dispatch(addPlayer(player))
							navigation.navigate('Game')
						})
					}}
				>
					Jouer
				</Button>
			</SafeAreaView>
		</View>
	)
}

export default Home
