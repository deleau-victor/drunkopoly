import React, { FC, useEffect, useState } from "react"
import { Box, Flex, Row, Text, View } from "native-base"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../App"

import GameBoard from "../components/gameBoard"

type GameProps = NativeStackScreenProps<RootStackParamList, "Game">

const Game: FC<GameProps> = ({}) => {
	const [size, setSize] = useState<number>(0)

	useEffect(() => {
		console.log(size)
	}, [size])

	return (
		<View
			onLayout={(event) => {
				const { width } = event.nativeEvent.layout
				setSize(width / 7 - 8)
			}}>
			<Text>Game</Text>
			<Flex
				width={`${size! * 7 + 6 * 8}px`}
				height={`${size! * 7 + 6 * 8}px`}
				marginX='auto'
				bgColor='gray.800'>
				<GameBoard size={size} />
			</Flex>
		</View>
	)
}

export default Game
