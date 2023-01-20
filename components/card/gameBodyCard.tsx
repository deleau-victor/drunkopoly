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
				<Row marginX='auto' w='full' justifyContent='space-between'>
					<Text>* Terrain nu</Text>
					<Text>
						{`${
							Price.filter(({ tile_id }) => tile_id === propertyId)[0]
								.loyer_nu
						} Gorgée`}
					</Text>
				</Row>
				<Row marginX='auto' w='full' justifyContent='space-between'>
					<Text>* Bar</Text>
					<Text>{`${
						Price.filter(({ tile_id }) => tile_id === propertyId)[0]
							.loyer_bar
					} Gorgée`}</Text>
				</Row>
				<Row marginX='auto' w='full' justifyContent='space-between'>
					<Text>* Restaurant</Text>
					<Text>{`${
						Price.filter(({ tile_id }) => tile_id === propertyId)[0]
							.loyer_restau
					} Gorgée`}</Text>
				</Row>
				<Row marginX='auto' w='full' justifyContent='space-between'>
					<Text>* Boîte de nuit</Text>
					<Text>{`${
						Price.filter(({ tile_id }) => tile_id === propertyId)[0]
							.loyer_disco
					} Gorgée`}</Text>
				</Row>
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
