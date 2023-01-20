import React, { FC } from "react"
import { Box, Flex, Pressable, Image } from "native-base"
import { Tile } from "../../database"
import { makegameBoardPos } from "../../utils/makeGameBoardPos"
import TileContent from "./tileContent"

type GameBoardProps = {
	size: number
	openCard: (tileId: number) => void
}

const GameBoard: FC<GameBoardProps> = ({ size, openCard }) => (
	<Flex
		width={`${size! * 7 + 6 * 8}px`}
		height={`${size! * 7 + 6 * 8}px`}
		marginX='auto'
		justifyContent='center'
		alignItems='center'>
		{Tile.map(({ tileId, tilefamily_id, name }) => {
			const position = makegameBoardPos(tileId, size)
			return (
				<Pressable
					key={tileId}
					onLongPress={() => {
						openCard(tileId)
					}}
					width={size}
					height={size}
					bgColor='gray.200'
					position='absolute'
					zIndex={30}
					bottom={position.bottom}
					right={position.right}>
					<TileContent
						tileId={tileId}
						tilefamily_id={tilefamily_id}
						tileName={name}
					/>
				</Pressable>
			)
		})}
		<Box
			width='full'
			position='absolute'
			zIndex={20}
			style={{
				transform: [{ rotate: "-45deg" }, { translateY: -16 }],
			}}>
			<Image
				source={require("../../assets/images/logo.png")}
				resizeMode='contain'
				width='80%'
				alt='logo'
				marginX='auto'
			/>
		</Box>
	</Flex>
)

export default GameBoard
