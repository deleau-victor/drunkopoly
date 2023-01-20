import React, { FC } from "react"
import { Text, View } from "native-base"
import GameCard from "../components/card/gameCard"

type TestProps = {}

const Test: FC<TestProps> = ({}) => {
	return (
		<View>
			<GameCard close={() => {}} />
		</View>
	)
}

export default Test
