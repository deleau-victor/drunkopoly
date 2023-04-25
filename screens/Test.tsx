import React, { FC } from 'react'
import { Center, Text, View } from 'native-base'
import GameCard from '../components/card/gameCard'
import { useAppSelector } from '../hooks/typedReduxHooks'

type TestProps = {}

const Test: FC<TestProps> = ({}) => {
   const player = useAppSelector((state) => state.PlayerState.players[0])

   return (
      <View justifyContent={'center'} alignItems={'center'}>
         <GameCard close={() => {}} propertyId={1} owner={player} context={'noOwner'} />
      </View>
   )
}

export default Test
