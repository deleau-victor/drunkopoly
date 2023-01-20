import React, { FC } from "react"
import { Box, Text } from "native-base"
import { Tile, TileFamily } from "../../database"

type GameHeaderCardProps = {
	propertyId: number
	close: () => void
}

const GameHeaderCard: FC<GameHeaderCardProps> = ({ propertyId, close }) => {
	return (
		<Box
			h='20%'
			backgroundColor={
				TileFamily.filter(
					({ tilefamilyId }) =>
						tilefamilyId === Tile[propertyId].tilefamily_id,
				)[0].color
			}>
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
