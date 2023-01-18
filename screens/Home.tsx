import React, { FC } from "react"
import { Box, Text, View } from "native-base"

type HomeProps = {}

const Home: FC<HomeProps> = ({}) => {
   return (
       <Box>
           <Text color="primary.white" fontWeight="bold" fontSize="xl">Le Monopoly des soirées</Text>
       </Box>
   )
}

export default Home

