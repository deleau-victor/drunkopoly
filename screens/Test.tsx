import React, { FC } from "react"
import {Text, View } from "native-base"
import GameCard from "../components/GameCard"

type TestProps = {}

const Test: FC<TestProps> = ({}) => {
   return (
       <View>
            <GameCard/>
       </View>
   )
}

export default Test

