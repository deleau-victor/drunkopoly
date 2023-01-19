import React, { FC } from "react"
import { Center, Pressable } from "native-base"
import { Tile } from "../../database"
import { makegameBoardPos } from "../../utils/makeGameBoardPos"

type GameBoardProps = {
	size: number
	openCard: (tileId: number) => void
}

const GameBoard: FC<GameBoardProps> = ({ size, openCard }) => {
	return (
		<>
			{Tile.map(({ tileId }) => {
				const position = makegameBoardPos(tileId, size)
				return (
					<Pressable
						key={tileId}
						onLongPress={() => {
							openCard(tileId)
						}}
						width={size}
						height={size}
						bgColor='amber.300'
						position='absolute'
						zIndex={30}
						bottom={position.bottom}
						right={position.right}>
						<Center textAlign='center'>{tileId}</Center>
					</Pressable>
				)
			})}
		</>
	)
}

export default GameBoard
