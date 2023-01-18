import React, { FC } from "react"
import { Flex } from "native-base"
import { Tile } from "../database"

type GameBoardProps = {
	size: number
}

type Position = {
	bottom: number
	right: any
}

const GameBoard: FC<GameBoardProps> = ({ size }) => {
	return (
		<>
			{Tile.map(({ tileId }) => {
				let position: Position = {
					bottom: 0,
					right: 0,
				}
				if (tileId < 7) {
					if (tileId === 0) {
						position.right = 0
					} else {
						if ((tileId + 1) % 7 === 0) {
							position.right = size * 7
						} else {
							position.right = size * tileId + 8 * tileId
						}
					}
				} else if (tileId < 13) {
					position.right = size * 7
					if ((tileId - 6) % 7 === 0) {
						console.log(tileId)
						position.bottom = size * 7
					} else {
						position.bottom = size * (tileId - 6) + 8 * (tileId - 6)
					}
				} else if (tileId < 19) {
					if ((tileId - 12) % 7 === 0) {
						position.right = 0
					} else {
						position.right =
							size * 7 - (8 * (tileId - 12) + size * (tileId - 12))
					}
					position.bottom = size * 7
				} else {
					position.right = 0
					if ((tileId - 18) % 7 === 0) {
						position.bottom = 8 + size
					} else {
						position.bottom =
							size * 7 - (8 * (tileId - 18) + size * (tileId - 18))
					}
				}

				return (
					<Flex
						key={tileId}
						width={size}
						height={size}
						bgColor='amber.300'
						justifyItems='center'
						alignItems='center'
						position='absolute'
						bottom={position.bottom}
						right={position.right}>
						{tileId}
					</Flex>
				)
			})}
		</>
	)
}

export default GameBoard
