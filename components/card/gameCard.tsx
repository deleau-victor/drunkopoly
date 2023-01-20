// React
import React, { FC, useEffect } from "react"

// NativeBase
import { Box, Column } from "native-base"

// Components
import GameHeaderCard from "./gameHeaderCard"
import GameBodyCard from "./gameBodyCard"

// Redux
import { Player } from "../../store/types/player"
import GameFooterCard from "./gameFooterCard"

type GameCardProps = {
	close: () => void
	propertyId: number | undefined // define the id of the property
	owner: Player | undefined // define the owner's id of the property
	context: "noOwner" | "isOwner" | "isLocator" | "isLooking"
}

const GameCard: FC<GameCardProps> = ({ close, propertyId, owner, context }) => {
	return (
		<Box
			/*marginX='10%'*/
			w='80%'
			h='60%'
			backgroundColor='primary.white'
			opacity={100}>
			{/* Header */}
			<GameHeaderCard propertyId={propertyId!} />
			{/* Body */}
			<Column flex='1' padding='5' space='5'>
				<GameBodyCard owner={owner} propertyId={propertyId!} />
				{/* Action's button */}
				<GameFooterCard
					context={context}
					propertyId={propertyId}
					close={close}
				/>
			</Column>
		</Box>
	)
}

export default GameCard
