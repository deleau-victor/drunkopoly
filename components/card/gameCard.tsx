import React, { FC } from "react"
import { Box, Button, Column, Row, Text } from "native-base"

type GameCardProps = {
	propertyId: string // define the id of the property
	propertyPriceId: string // define the table property price id of the property
	ownerId: string // optional - define the owner's id of the property
	level: number // optional - define the level of the property
}

const GameCard: FC<GameCardProps> = ({ close }) => {
	return (
		<Box
			/*marginX='10%'*/
			w='80%'
			h='60%'
			backgroundColor='primary.100'
			opacity={100}>
			/*position='absolute'*/
			margin='auto'
			/*top='100%'*/>
      
			{/* Header */}
			<Box h='20%' backgroundColor='secondary.pink'>
				<Text
					margin='auto'
					color='primary.white'
					fontSize='3xl'
					fontWeight='bold'>
					Title
				</Text>
				<Text position='absolute' onPress={() => close()}>
					X
				</Text>
			</Box>
			{/* Body */}
			<Column flex='1' padding='5' space='5'>
				{/* Title */}
				<Text fontSize='xl' fontWeight='semibold'>
					Loyer
				</Text>

				{/* Buy prices */}
				<Box>
					<Row marginX='auto' w='full' justifyContent='space-between'>
						<Text>* Terrain nu</Text>
						<Text>1 Gorgée</Text>
					</Row>
					<Row marginX='auto' w='full' justifyContent='space-between'>
						<Text>* Terrain nu</Text>
						<Text>1 Gorgée</Text>
					</Row>
					<Row marginX='auto' w='full' justifyContent='space-between'>
						<Text>* Terrain nu</Text>
						<Text>1 Gorgée</Text>
					</Row>
					<Row marginX='auto' w='full' justifyContent='space-between'>
						<Text>* Terrain nu</Text>
						<Text>1 Gorgée</Text>
					</Row>
				</Box>

				<Text marginY='5%' marginX='auto'>Il n'y a pas de propriétaire</Text>

				{/* Action's button */}
				<Button
					w='90%'
					marginX='auto'
					background='secondary.pink'
					_text={{
						fontSize: "xl",
						fontWeight: "black",
						textAlign: "center",
					}}>
					Achète le terrain et bois 1 gorgée
				</Button>
			</Column>
		</Box>
	)
}

export default GameCard
