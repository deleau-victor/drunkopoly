import React, { FC } from "react"
import { Box, Center, Column, Text } from "native-base"
import Playerlist from "./playerlist"

type GameTopInfoProps = {}

const GameTopInfo: FC<GameTopInfoProps> = ({}) => {
	return (
		<Center height='20%'>
			<Column alignItems='center'>
				<Text fontWeight='bold' color='primary.white' fontSize='2xl'>
					DYLAN A TON TOUR
				</Text>
				<Playerlist />
			</Column>
		</Center>
	)
}

export default GameTopInfo
