import React, { FC, useEffect } from "react"
import { Box, Center, Image, Row, Text } from "native-base"
import { TileFamily } from "../../database"
import { useAppSelector } from "../../hooks/typedReduxHooks"
import { Player } from "../../store/types/player"

type TileContentProps = {
	tileId: number
	tileName: string
	tilefamily_id?: number
}

const TileContent: FC<TileContentProps> = ({
	tileId,
	tilefamily_id,
	tileName,
}) => {
	const {players} = useAppSelector(state => state.PlayerState)

	// Get the list of players by case
	const playersOnCase = ():Player[] => players.filter((player) => player.position === tileId)
	

	return (
		<Center textAlign='center' height='full' width='full'>
			{tilefamily_id || tilefamily_id === 0 ? (
				<Image
					source={require("../../assets/icons/pinkHome.png")}
					resizeMode='contain'
					width='50%'
					alt='pink home'
					tintColor={TileFamily.filter((family) => family.tilefamilyId === tilefamily_id)[0].color}
				/>
				
			) : tileName === "Action" || tileName === "Chance" ? (
				tileName === "Action" ? (
					<Image
						source={require("../../assets/icons/action.png")}
						resizeMode='contain'
						width='50%'
						alt='action'
					/>
				) : (
					<Image
						source={require("../../assets/icons/question.png")}
						resizeMode='contain'
						width='50%'
						alt='chance'
					/>
				)
			) : tileId === 0 ? (
				<Image
					source={require("../../assets/icons/left-arrow.png")}
					resizeMode='contain'
					width='50%'
					alt='left arrow'
				/>
			) : tileId === 6 ? (
				<Image
					source={require("../../assets/icons/jail.png")}
					resizeMode='contain'
					width='50%'
					alt='jail'
				/>
			) : tileId === 12 ? (
				<Image
					source={require("../../assets/icons/parking.png")}
					resizeMode='contain'
					width='50%'
					alt='parking'
				/>
			) : (
				<Image
					source={require("../../assets/icons/beer.png")}
					resizeMode='contain'
					width='60%'
					alt='beer'
				/>
			)}
			{tilefamily_id || tilefamily_id === 0 ? (
				<Box
					position='absolute'
					width='full'
					height='1.5'
					bgColor={TileFamily[tilefamily_id].color}
					bottom={0}></Box>
			) : null}

			{/* Display each player on the case */}
			<Row w='90%' h='90%' position='absolute' justifyContent='space-around' flexWrap='wrap' top='5%'>
				{playersOnCase().map((player,index) =>{
					return(
					<Box key={index} h='3' w='3' rounded='full' backgroundColor={player.color}/>
					)
				})}
			</Row>
		</Center>
	)
}

export default TileContent
