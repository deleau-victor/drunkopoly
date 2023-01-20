import React, { FC } from "react"
import { Box, Text } from "native-base"
import { Tile, TileFamily } from "../../database"

type GameHeaderCardProps = {
	propertyId: number
	close: () => void
}

const GameHeaderCard: FC<GameHeaderCardProps> = ({ propertyId, close }) => {
	return (
		// Display the color of the family of the tile
		<Box
			h='20%'
			backgroundColor={
				TileFamily.filter(
					({ tilefamilyId }) =>
						tilefamilyId === Tile[propertyId].tilefamily_id,
				)[0].color
			}>
			{/* Display the name of the tile */}
			<Text
				margin='auto'
				color={"primary.white"}
				fontSize='3xl'
				fontWeight='bold'>
				{Tile[propertyId].name}
			</Text>
			<Text position='absolute' onPress={() => close()}>
				X
			</Text>
		</Box>
	)
}

export default GameHeaderCard
