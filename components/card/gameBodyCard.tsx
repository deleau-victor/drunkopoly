// React
import React, { FC, useEffect } from "react"

// NativeBase
import { Box, Row, Text } from "native-base"

// Database
import { Price } from "../../database"

// Redux
import { useAppSelector } from "../../hooks/typedReduxHooks"
import { Player } from "../../store/types/player"

type GameBodyCardProps = {
	propertyId: number
	owner: Player | undefined
}

const GameBodyCard: FC<GameBodyCardProps> = ({ propertyId, owner }) => {
	const { players } = useAppSelector((state) => state.PlayerState)

	return (
		<>
			{/* Title */}
			<Text fontSize='xl' fontWeight='semibold'>
				Loyer
			</Text>

			{/* Buy prices */}
			<Box>
				{/* Filter price to correspond to propertyId and map the price */}
				{Price.filter(({ tile_id }) => tile_id === propertyId)[0].loyer.map(
					(loyer, index) => {
						return (
							<Row
								marginX='auto'
								w='full'
								justifyContent='space-between'
								key={index}>
								<Text>{`* ${
									index === 0
										? "Terrain nu"
										: index === 1
										? "Bar"
										: index === 2
										? "Restaurant"
										: "Boite de nuit"
								}`}</Text>
								<Text>{`${loyer} Gorgée`}</Text>
							</Row>
						)
					},
				)}
			</Box>

			{/* Proprio */}
			<Text fontSize='xl' fontWeight='semibold' textAlign='center' mt={10}>
				Propriétaire
			</Text>
			<Text marginY='5%' marginX='auto'>
				{/* Check if owner is undefined if not display the name of the owner */}
				{owner ? players[owner.id].name : "Il n'y a pas de propriétaire"}
			</Text>
		</>
	)
}

export default GameBodyCard
