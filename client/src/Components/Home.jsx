import React from 'react';
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  Divider,
  Circle,
  useColorModeValue,
} from '@chakra-ui/react';
import fotoLight from '../Assets/MatiPortfolioLight.png';
import fotoDark from '../Assets/MatiPortfolioDark.png';

export default function Home() {
  const bg = useColorModeValue('#FFF6EA', '#1A202C');
  const foto = useColorModeValue(fotoLight, fotoDark);
  const circles = useColorModeValue("#ECCCB2", '#98467B');
  return (
    <Box bgColor={bg}>
      <Flex
        p="10vh 0 10vh"
        left="15vw"
        top="20vh"
        justify="center"
        alignItems="flex-end"
      >
        <Image src={foto} zIndex={10} w="30vw" />
        <Circle
          border="1px solid black"
          ml="-7vw"
          mb="-1vw"
          h="20vw"
          w="50vw"
          bg={circles}
          borderRadius="100%"
          zIndex={11}
        >
          <Text color="black">Matias Tonelli</Text>
          <Text color="black">Full-Stack Developer</Text>
        </Circle>
      </Flex>
    </Box>
  );
}
