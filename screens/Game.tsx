import React, { FC, useEffect, useState } from 'react'
import {
	Box,
	Flex,
	Text,
	View,
	Image,
	Column,
	Center,
	Button,
} from 'native-base'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

import GameBoard from '../components/gameBoard'
import { SafeAreaView } from 'react-native-safe-area-context'

type GameProps = NativeStackScreenProps<RootStackParamList, 'Game'>

const Game: FC<GameProps> = ({}) => {
	const [size, setSize] = useState<number>(0)

	useEffect(() => {
		console.log(size)
	}, [size])

	return (
		<View>
			<SafeAreaView
				onLayout={(event) => {
					const { width } = event.nativeEvent.layout
					setSize(width / 7 - 8)
				}}
			>
				<Center height='100%'>
					<Center height='20%'>
						<Column>
							<Text fontWeight='bold' color='primary.white' fontSize='2xl'>
								DYLAN A TON TOUR
							</Text>
						</Column>
					</Center>
					<Flex
						width={`${size! * 7 + 6 * 8}px`}
						height={`${size! * 7 + 6 * 8}px`}
						marginX='auto'
						justifyContent='center'
						alignItems='center'
					>
						<GameBoard size={size} />
						<Box
							width='full'
							style={{
								transform: [{ rotate: '-45deg' }, { translateY: -16 }],
							}}
						>
							<Image
								source={require('../assets/images/logo.png')}
								resizeMode='contain'
								width='80%'
								alt='logo'
								marginX='auto'
							/>
						</Box>
					</Flex>
					<Center height='20%'>
						<Button>
							<Text fontWeight='bold' color='primary.white' fontSize='2xl'>
								Lancez le dé
							</Text>
						</Button>
					</Center>
				</Center>
			</SafeAreaView>
		</View>
	)
}

export default Game
