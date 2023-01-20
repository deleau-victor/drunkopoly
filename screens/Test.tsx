import React, { FC } from "react"
import { Text, View } from "native-base"
import GameCard from "../components/gameCard/gameCard"


type TestProps = {}

const Test: FC<TestProps> = ({}) => {
	return <View>
		<GameCard type="Chance"/>
	</View>
}

export default Test
