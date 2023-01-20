// React
import React, { FC, useEffect, useState } from "react"

// NativeBase
import { Button, Text } from "native-base"

// Redux
import { useAppDispatch, useAppSelector } from "../../hooks/typedReduxHooks"
import {
	playerBuyBuild,
	playerBuyTile,
	playerDrink,
} from "../../slices/player.slice"
import {
	propertyWasBought,
	augmentPropertyLevel,
} from "../../slices/proprietes.slice"

// Database
import { Tile, TileFamily } from "../../database"

type GameFooterCardProps = {
	context: "noOwner" | "isOwner" | "isLocator" | "isLooking"
	propertyId: number | undefined
	close: () => void
}

const GameFooterCard: FC<GameFooterCardProps> = ({
	context,
	propertyId,
	close,
}) => {
	const dispatch = useAppDispatch()
	const { currentPlayer } = useAppSelector((state) => state.PlayerState)
	const proprietes = useAppSelector((state) => state.propertiesReducer)
	const [level, setLevel] = useState<number>()
	const [owner, setOwner] = useState<number>()

	// Récupère le niveau de la propriété
	if (context === "isOwner" || context === "isLocator") {
		useEffect(() => {
			setLevel(
				proprietes.filter(
					(property) => property.propertyId === propertyId,
				)[0].level,
			)
		}, [])
	}

	// Récupère le propriétaire de la propriété
	if (context === "isLocator") {
		useEffect(() => {
			setOwner(
				proprietes.filter(
					(property) => property.propertyId === propertyId,
				)[0].ownerId,
			)
		}, [])
	}

	return (
		<>
			{/* Si c'est notre tour de jeu et qu'il n'y a pas de proprio */}
			{context === "noOwner" && (
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
						dispatch(
							propertyWasBought({
								propertyId: propertyId!,
								ownerId: currentPlayer,
							}),
						)
						close()
					}}>
					Achète le terrain et bois 1 gorgée
				</Button>
			)}

			{/* Si c'est notre tour de jeu et que l'on est le proprio */}
			{context === "isOwner" &&
				(level! < 3 ? (
					<Button
						w='90%'
						marginX='auto'
						background={
							TileFamily.filter(
								({ tilefamilyId }) =>
									tilefamilyId === Tile[propertyId!].tilefamily_id,
							)[0].color
						}
						onPress={() => {
							dispatch(augmentPropertyLevel(propertyId!))
							dispatch(playerBuyBuild(level! + 2))
							close()
						}}>
						<Text
							fontSize='xl'
							fontWeight='black'
							textAlign='center'
							color='primary.white'>
							Acheter un
							{level === 0
								? " bar "
								: level === 1
								? " restaurant "
								: "e boite de nuit "}
							et boire
							{` ${
								proprietes.filter(
									(property) => property.propertyId === propertyId,
								)[0].level + 2
							} `}
							gorgées
						</Text>
					</Button>
				) : (
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
						onPress={() => close()}>
						Propriétée améliorée au maximum
					</Button>
				))}

			{/* Si c'est notre tour de jeu et que l'on est pas le proprio */}
			{context === "isLocator" && (
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
						dispatch(
							playerDrink({ gorgées: level! + 1, ownerId: owner! }),
						)
						close()
					}}>{`Paye ton loyer et bois ${level! + 1} gorgée${
					level! > 0 ? "s" : ""
				}`}</Button>
			)}

			{/* Si consulte la propriété */}
			{context === "isLooking" && (
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
						close()
					}}>
					Fermer la carte
				</Button>
			)}
		</>
	)
}

export default GameFooterCard
