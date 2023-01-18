import React, { FC } from "react"
import { AspectRatio, Box, Button, Image, Text, View } from "native-base"

type HomeProps = {}

const Home: FC<HomeProps> = ({}) => {
   return (
       <View>
            <Box 
                style={{transform: [{ rotate: '-15deg' }]}}
            >
                <Image
                    source={require('../assets/images/logo.png')}
                    resizeMode="contain"
                    width="80%"
                    alt="logo"
                    background='amber.100'
                />
                <Text color="primary.white" position="absolute" bottom={0} left='0' fontWeight="bold" fontSize="xl">Le Monopoly des soirées</Text>
            </Box>
           <Button width="60%" marginX='auto' _text={{fontWeight:'bold', fontSize:'2xl'}} background='primary.red' onPress={() => console.log("hello world")}>Jouer</Button>
       </View>
   )
}

export default Home

