import React, { FC } from "react"
import { Box, Button, Center, Divider, Text } from "native-base"

type GameCardProps = {
    type : 'Chance' | 'Action'
}

const GameCard: FC<GameCardProps> = ({type}) => {
   return (
       <Box margin='auto' w='80%' h='60%' background='gray.700' padding='3%' rounded='3xl'>
            <Center backgroundColor='primary.white' w='full' h='full' rounded='3xl' borderWidth='10' borderColor={type === 'Action'? 'primary.red' : 'secondary.blue'}>
                <Center width='full'>
                    <Text color={type === 'Action'? 'primary.red' : 'secondary.blue'} fontWeight='bold' fontSize='2xl'>Carte {type}</Text>
                    <Divider orientation='horizontal' my='2' h='0.5' w='40%' background='primary.black' />
                </Center>
                
                <Text width='80%' marginY='5%' h='55%'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet expedita dolore, tempore sapiente provident nemo, reprehenderit qui cumque perspiciatis esse velit et assumenda sint voluptas veritatis veniam, laudantium incidunt vel.</Text>
                <Button width='60%' backgroundColor={type === 'Action'? 'primary.red' : 'secondary.blue'} _text={{fontWeight:'bold', fontSize:'lg'}}>Suivant</Button>
            </Center>
       </Box>
   )
}

export default GameCard

