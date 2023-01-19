import React, { FC } from "react"
import { Box, Center, Row, Text } from "native-base"
import { useAppSelector } from "../../hooks/typedReduxHooks"

type PlayerlistProps = {}

const Playerlist: FC<PlayerlistProps> = ({}) => {
	const players = useAppSelector((state) => state.players)
	return (
		<Row flexWrap='wrap' space='4' width='80%' justifyItems='center'>
			{players.map(({ name, id, color }) => (
				<Row alignItems='center' key={id}>
					<Box
						width='3'
						height='3'
						rounded='full'
						backgroundColor={color}></Box>
					<Text paddingLeft='2' color='primary.white'>
						{name}
					</Text>
				</Row>
			))}
		</Row>
	)
}

export default Playerlist
