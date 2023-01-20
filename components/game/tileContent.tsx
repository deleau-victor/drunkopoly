import React, { FC } from "react"
import { Box, Center, Image } from "native-base"
import { TileFamily } from "../../database"

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
	return (
		<Center textAlign='center' height='full' width='full'>
			{tilefamily_id || tilefamily_id === 0 ? (
				tilefamily_id === 0 ? (
					<Image
						source={require("../../assets/icons/pinkHome.png")}
						resizeMode='contain'
						width='50%'
						alt='pink home'
					/>
				) : tilefamily_id === 1 ? (
					<Image
						source={require("../../assets/icons/orangeHome.png")}
						resizeMode='contain'
						width='50%'
						alt='orange home'
					/>
				) : tilefamily_id === 2 ? (
					<Image
						source={require("../../assets/icons/greenHome.png")}
						resizeMode='contain'
						width='50%'
						alt='green home'
					/>
				) : (
					<Image
						source={require("../../assets/icons/blueHome.png")}
						resizeMode='contain'
						width='50%'
						alt='blue home'
					/>
				)
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
		</Center>
	)
}

export default TileContent
