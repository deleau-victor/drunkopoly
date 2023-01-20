// React
import React, { FC } from "react"

// NativeBase
import { Box, Button, Column } from "native-base"

// Database
import { Tile, TileFamily } from "../../database"

// Components
import PropertyHeaderCard from "./propertyHeaderCard"
import PropertyBodyCard from "./propertyBodyCard"

// Redux
import { Player } from "../../store/types/player"
import { useAppDispatch } from "../../hooks/typedReduxHooks"
import { playerBuyTile } from "../../slices/player.slice"

type PropertyCardProps = {
	close: () => void
	propertyId: number | undefined // define the id of the property
	owner: Player | undefined // define the owner's id of the property
}

const PropertyCard: FC<PropertyCardProps> = ({ close, propertyId, owner }) => {
	const dispatch = useAppDispatch()

	return (
		<Box
			/*marginX='10%'*/
			w='80%'
			h='60%'
			backgroundColor='primary.white'
			opacity={100}>
			{/* Header */}
			<PropertyHeaderCard propertyId={propertyId!} close={close} />
			{/* Body */}
			<Column flex='1' padding='5' space='5'>
				<PropertyBodyCard owner={owner} propertyId={propertyId!} />
				{/* Action's button */}
				<Button
					w='90%'
					marginX='auto'
					background={
						TileFamily.filter(
							({ tilefamilyId }) =>
								tilefamilyId === Tile[propertyId!].tilefamily_id,
						)[0].color
					}
					_text={{
						fontSize: "xl",
						fontWeight: "black",
						textAlign: "center",
					}}
					onPress={() => {
						dispatch(playerBuyTile(propertyId!))
					}}>
					Achète le terrain et bois 1 gorgée
				</Button>
			</Column>
		</Box>
	)
}

export default PropertyCard
