import React, { FC } from "react"
import { Box, Button, Column, Row, Text } from "native-base"

type GameCardProps = {}

const GameCard: FC<GameCardProps> = ({}) => {
   return (
       <Box margin='auto' w='80%' h='60%' backgroundColor='primary.100'>
            {/* Header */}
            <Box h='20%' backgroundColor='secondary.pink'>
                <Text margin='auto' color='primary.white' fontSize='3xl' fontWeight='bold'>Title</Text>
            </Box>

            {/* Body */}
            <Column flex='1' padding='5' space='5'>
                <Text fontSize='xl' fontWeight='semibold'>Loyer</Text>
                
                <Box>
                    <Row marginX='auto' w='full' justifyContent='space-between'>
                        <Text>* Terrain nu</Text>
                        <Text>1 Gorgée</Text>
                    </Row>
                    <Row marginX='auto' w='full' justifyContent='space-between'>
                        <Text>* Terrain nu</Text>
                        <Text>1 Gorgée</Text>
                    </Row>
                    <Row marginX='auto' w='full' justifyContent='space-between'>
                        <Text>* Terrain nu</Text>
                        <Text>1 Gorgée</Text>
                    </Row>
                    <Row marginX='auto' w='full' justifyContent='space-between'>
                        <Text>* Terrain nu</Text>
                        <Text>1 Gorgée</Text>
                    </Row>
                </Box>

                <Button w='80%' marginX='auto' _text={{fontSize:'xl', fontWeight:'black', textAlign:'center'}}>
                    Achète le terrain et bois 1 gorgée
                </Button>
            </Column>
       </Box>
   )
}

export default GameCard

