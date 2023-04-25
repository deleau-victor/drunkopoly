// React
import React, { FC, useEffect } from 'react'

// NativeBase
import { Box, Column } from 'native-base'

// Components
import PropertyHeaderCard from './propertyHeaderCard'
import PropertyBodyCard from './propertyBodyCard'
import PropertyFooterCard from './propertyFooterCard'

// Redux
import { Player } from '../../store/types/player'

type GameCardProps = {
	close: () => void
	propertyId: number | undefined // define the id of the property
	owner: Player | undefined // define the owner's id of the property
	context: 'noOwner' | 'isOwner' | 'isLocator' | 'isLooking'
}

const GameCard: FC<GameCardProps> = ({ close, propertyId, owner, context }) => {
	return (
		<Box w='80%' h='70%' backgroundColor='primary.white' opacity={100}>
			{/* Header */}
			<PropertyHeaderCard propertyId={propertyId!} close={close} />
			{/* Body */}
			<Column flex='1' padding='5' space='5'>
				<PropertyBodyCard owner={owner} propertyId={propertyId!} />
				{/* Action's button */}
				<PropertyFooterCard
					context={context}
					propertyId={propertyId}
					close={close}
				/>
			</Column>
		</Box>
	)
}

export default GameCard
