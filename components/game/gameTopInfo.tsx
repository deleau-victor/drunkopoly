import React, { FC } from "react"
import { Center, Column, Text } from "native-base"
import Playerlist from "./playerlist"
import { useAppSelector } from "../../hooks/typedReduxHooks"
import { Player } from "../../store/types/player"

type GameTopInfoProps = {}

const GameTopInfo: FC<GameTopInfoProps> = ({}) => {
	const { players, currentPlayer } = useAppSelector(
		(state) => state.PlayerState,
	)

	// get current player's info
	const player = (): Player => {
		return players.find((player) => player.id === currentPlayer)!
	}

	return (
		<Center height='25%'>
			<Column alignItems='center'>
				<Text fontWeight='bold' color='primary.white' fontSize='2xl'>
					{player()?.name.toUpperCase()} A TON TOUR
				</Text>
				<Text color='primary.white' fontSize='md' mb={3}>
					Il te reste {player()?.gorgées} gorgées
				</Text>
				<Playerlist />
			</Column>
		</Center>
	)
}

export default GameTopInfo
