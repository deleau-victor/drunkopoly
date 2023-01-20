import React, { FC } from "react"
import { Box, Row, Text } from "native-base"
import { Price } from "../../database"
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
				{Price[propertyId].loyer.map((loyer, index) => {
					return (
						<Row marginX='auto' w='full' justifyContent='space-between'>
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
				})}
			</Box>

			{/* Proprio */}
			<Text fontSize='xl' fontWeight='semibold' textAlign='center'>
				Propriétaire
			</Text>
			<Text marginY='5%' marginX='auto'>
				{owner ? players[owner.id].name : "Il n'y a pas de propriétaire"}
			</Text>
		</>
	)
}

export default GameBodyCard
