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
  Heading,
  Center,
  Tooltip,
} from '@chakra-ui/react';
import fotoLight from '../Assets/MatiPortfolioLight.png';
import fotoDark from '../Assets/MatiPortfolioDark.png';
import nodeIcon from '../Assets/nodejs.png';
import reactIcon from '../Assets/reactjs.png';
import reduxIcon from '../Assets/redux.png';
import expressIcon from '../Assets/express.png';
import mongoIcon from '../Assets/mongodb.png';
import chakraIcon from '../Assets/chakra.png';
import firebaseIcon from '../Assets/firebase.png';
import gitIcon from '../Assets/github.png';
import postgresIcon from '../Assets/postgres.png';
import scrumIcon from '../Assets/scrum.png';

export default function Home() {
  const bg = useColorModeValue('#FFDAAC', '#1A202C');
  const foto = useColorModeValue(fotoLight, fotoDark);
  const circles = useColorModeValue('#ECCCB2', '#98467B');
  /* const bgFoto = useColorModeValue(
    'radial-gradient(circle, #fff6ea, #ffefda, #ffe8cb, #ffe1bb, #ffdaac);',
    'radial-gradient(circle, #ffffff, #fef4fd, #ffe8ef, #ffded7, #ffd9bb, #ffdcb4, #ffdfad, #ffe3a7, #ffe7b8, #ffecc9, #fff1d9, #fff6ea)'
  ); */
  return (
    <Box bgColor={bg}>
      <Flex h={'93vh'} justify="center" alignItems="center" /* bg={bgFoto} */>
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
          flexDirection={'column'}
        >
          <Text fontFamily="Montserrat" fontSize={'2.5vw'} as="i">
            Hey, welcome to my portfolio!
          </Text>
          <br />
          <Flex>
            <Text fontFamily="Montserrat" fontSize={'2vw'} as="i">
              I'm <b>Matias Tonelli</b>, &nbsp;
            </Text>
            <Text fontFamily="Montserrat" fontSize={'2vw'} as="i">
              Full-Stack Developer
            </Text>
          </Flex>
        </Circle>
      </Flex>
      <Flex h={'93vh'} direction="column" alignItems={'center'}>
        <Text
          fontFamily="Montserrat"
          fontSize={'1.5vw'}
          mb="5vh"
          fontWeight={700}
          as="i"
        >
          My knowledges
        </Text>
        <Flex
          fontFamily="Montserrat"
          m="0"
          p="0"
          w={'70vw'}
          alignItems={'center'}
          direction="column"
        >
          <Flex
            border={'1px'}
            borderRadius={'12px'}
            p="1vw 3vw 1vw 3vw"
            alignItems={'center'}
            direction="column"
          >
            <Text align={'center'} fontSize="1vw" fontWeight={600} mb="1vw">
              Tech Skills:
            </Text>
            <Flex justifyContent={'space-evenly'} w="100%">
              <Tooltip
                label="NodeJS"
                aria-label="A tooltip"
                hasArrow={true}
                closeDelay={250}
                placement="top"
              >
                <Image w={'8vw'} src={nodeIcon} mx="2vw"></Image>
              </Tooltip>
              <Tooltip
                label="React.js"
                aria-label="A tooltip"
                hasArrow={true}
                closeDelay={250}
                placement="top"
              >
                <Image w={'8vw'} src={reactIcon} mx="2vw"></Image>
              </Tooltip>
              <Tooltip
                label="Redux"
                aria-label="A tooltip"
                hasArrow={true}
                closeDelay={250}
                placement="top"
              >
                <Image w={'8vw'} src={reduxIcon} mx="2vw"></Image>
              </Tooltip>
              <Tooltip
                label="Express JS"
                aria-label="A tooltip"
                hasArrow={true}
                closeDelay={250}
                placement="top"
              >
                <Image w={'8vw'} src={expressIcon} mx="2vw"></Image>
              </Tooltip>
              <Tooltip
                label="MongoDB"
                aria-label="A tooltip"
                hasArrow={true}
                closeDelay={250}
                placement="top"
              >
                <Image w={'8vw'} src={mongoIcon} mx="2vw"></Image>
              </Tooltip>
            </Flex>
            <Flex justifyContent={'space-evenly'} w="100%">
              <Tooltip
                label="PostgreSQL"
                aria-label="A tooltip"
                hasArrow={true}
                closeDelay={250}
              >
                <Image w={'8vw'} src={postgresIcon} mx="2vw"></Image>
              </Tooltip>
              <Tooltip
                label="Firebase"
                aria-label="A tooltip"
                hasArrow={true}
                closeDelay={250}
              >
                <Image w={'8vw'} src={firebaseIcon} mx="2vw"></Image>
              </Tooltip>
              <Tooltip
                label="Chakra UI"
                aria-label="A tooltip"
                hasArrow={true}
                closeDelay={250}
              >
                <Image w={'8vw'} src={chakraIcon} mx="2vw"></Image>
              </Tooltip>
              <Tooltip
                label="GitHub"
                aria-label="A tooltip"
                hasArrow={true}
                closeDelay={250}
              >
                <Image w={'8vw'} src={gitIcon} mx="2vw"></Image>
              </Tooltip>
              <Tooltip
                label="Metodologia SCRUM"
                aria-label="A tooltip"
                hasArrow={true}
                closeDelay={250}
              >
                <Image w={'8vw'} src={scrumIcon} mx="2vw"></Image>
              </Tooltip>
            </Flex>
          </Flex>
          <Box
            border={'1px'}
            w="23vw"
            borderRadius={'12px'}
            p="1vw 3vw 1vw 3vw"
            mt={'3vw'}
          >
            <Text align={'center'} fontSize="1vw" fontWeight={600} mb="1vw">
              Soft Skills:
            </Text>
            <Text fontWeight={500}> - Adaptabilidad</Text>
            <Text fontWeight={500}> - Análisis de problemas</Text>
            <Text fontWeight={500}> - Actitud positiva</Text>
            <Text fontWeight={500}> - Automotivación</Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
