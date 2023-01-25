import React from "react";
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
  Link,
} from "@chakra-ui/react";
import fotoLight from "../Assets/MatiPortfolioLight.png";
import fotoDark from "../Assets/MatiPortfolioDark.png";
import kinema from "../Assets/KinemaPreview.png";
import findYourActivity from "../Assets/findYourActivityPreview.png";
import wcFixture from "../Assets/WCFixturePreview.png";
import nodeIcon from "../Assets/nodejs.png";
import reactIcon from "../Assets/reactjs.png";
import reduxIcon from "../Assets/redux.png";
import expressIcon from "../Assets/express.png";
import mongoIcon from "../Assets/mongodb.png";
import chakraIcon from "../Assets/chakra.png";
import firebaseIcon from "../Assets/firebase.png";
import gitIcon from "../Assets/github.png";
import postgresIcon from "../Assets/postgres.png";
import scrumIcon from "../Assets/scrum.png";
import gitIconRepo from "../Assets/githubLink.png";
import enlace from "../Assets/enlace.png";

import ContactFormWithSocialButtons from "./ContactFormWithSocialButtons";

export default function Home() {
  const bg = useColorModeValue("#FFDAAC", "#1A202C");
  const foto = useColorModeValue(fotoLight, fotoDark);
  const circles = useColorModeValue("#ECCCB2", "#98467B");
  const colorSquares = useColorModeValue("#fccd92", "#28334a");
  /* const bgFoto = useColorModeValue(
    'radial-gradient(circle, #fff6ea, #ffefda, #ffe8cb, #ffe1bb, #ffdaac);',
    'radial-gradient(circle, #ffffff, #fef4fd, #ffe8ef, #ffded7, #ffd9bb, #ffdcb4, #ffdfad, #ffe3a7, #ffe7b8, #ffecc9, #fff1d9, #fff6ea)'
  ); */
  return (
    <Box bgColor={bg}>
      <Flex h={"93vh"} justify="center" alignItems="center" /* bg={bgFoto} */>
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
          flexDirection={"column"}
        >
          <Text fontFamily="Montserrat" fontSize={"2.5vw"} as="i">
            Hey, welcome to my portfolio!
          </Text>
          <br />
          <Flex>
            <Text fontFamily="Montserrat" fontSize={"2vw"} as="i">
              I'm <b>Matias Tonelli</b>, &nbsp;
            </Text>
            <Text fontFamily="Montserrat" fontSize={"2vw"} as="i">
              Full-Stack Developer
            </Text>
          </Flex>
        </Circle>
      </Flex>
      <Flex
        h={"93vh"}
        direction="column"
        alignItems={"center"}
        borderTop="1px"
        justifyContent={"center"}
      >
        <Text
          fontFamily="Montserrat"
          fontSize={"1.5vw"}
          my="5vh"
          fontWeight={700}
          as="i"
          mt={"-10vh"}
        >
          About me
        </Text>
        <br />
        <br />
        <br />
        <Circle
          border="1px solid black"
          h="40vh"
          w="60vw"
          bg={circles}
          borderRadius="100%"
          zIndex={11}
          flexDirection={"column"}
          fontFamily="Montserrat"
        >
          <Text fontSize="1vw" w={"63%"} align="center" as='kbd'>
            Hi! I'm Matias, I'm 24 years old, I recently graduated from Henry's
            Full-Stack Bootcamp and looking for job. Before I entered the
            bootcamp I been studying the career of Computer engineering in the
            University of Tres de Febrero (UNTREF) . I advanced and complete on
            the branch of programming. I consider myself a person who is
            persistent, adaptative and self-didactic, I love videogames and
            programming. I want to keep learning more and more about this field,
            currently doing it.
          </Text>
          <Text fontSize="1vw" w={"70%"} align="center" as='kbd'>
            See yah'!
          </Text>
        </Circle>
      </Flex>
      <Flex
        h={"100vh"}
        direction="column"
        alignItems={"center"}
        borderTop="1px"
      >
        <Text
          fontFamily="Montserrat"
          fontSize={"1.5vw"}
          marginY="5vh"
          fontWeight={700}
          as="i"
        >
          My projects
        </Text>
        <Flex
          fontFamily="Montserrat"
          m="0"
          p="0"
          w={"70vw"}
          alignItems={"center"}
          direction="column"
        >
          <Flex
            border={"1px"}
            borderRadius={"12px"}
            p="1vw 3vw 1vw 3vw"
            alignItems={"center"}
            justifyContent="space-around"
            wrap="wrap"
            w="67vw"
            py={"5vh"}
            backgroundColor={circles}
          >
            <Flex direction={"column"} w="30%" p={"2px"} alignItems={"center"}>
              <Image src={kinema} borderRadius="5px"></Image>
              <br />
              <Text fontSize={"1.1vw"} as="b" fontFamily="Montserrat">
                Kinema Entertainment
              </Text>
              <Text fontSize={"0.8vw"} fontFamily="Montserrat">
                Peliculas y series
              </Text>
              <br />
              <Divider orientation="horizontal" borderColor="black" w={"70%"} />
              <br />
              <Text
                fontSize={"1vw"}
                align={"center"}
                maxW="65%"
                fontFamily={"Roboto"}
              >
                Desarrollo de una App de contenido multimedia que incluye:
                sistema de usuarios, pasarela de pagos y filtrados.
              </Text>
              <br />
              <Divider orientation="horizontal" borderColor="black" w={"70%"} />
              <br />
              <Flex justifyContent="space-around">
                <Link
                  w={"15%"}
                  href="https://github.com/PG-Movies-Group-1/Kinema-Project"
                  target={"_blank"}
                >
                  <Image src={gitIconRepo}></Image>
                </Link>
                <Link
                  w={"15%"}
                  href="https://kinema-entertainment.vercel.app/"
                  target={"_blank"}
                >
                  <Image src={enlace}></Image>
                </Link>
              </Flex>
            </Flex>
            <Flex direction={"column"} w="30%" p={"2px"} alignItems={"center"}>
              <Image src={wcFixture} borderRadius="5px"></Image>
              <br />
              <Text fontSize={"1.1vw"} as="b" fontFamily="Montserrat">
                WCFixture
              </Text>
              <Text fontSize={"0.8vw"} fontFamily="Montserrat">
                Futbol y apuestas
              </Text>
              <br />
              <Divider orientation="horizontal" borderColor="black" w={"70%"} />
              <br />
              <Text
                fontSize={"1vw"}
                align={"center"}
                maxW="65%"
                fontFamily={"Roboto"}
              >
                App de apuestas sobre el mundial de futbol que incluye: sistema
                de usuarios, ranking de puntos y filtrados.
              </Text>
              <br />
              <Divider orientation="horizontal" borderColor="black" w={"70%"} />
              <br />
              <Flex justifyContent="space-around">
                <Link
                  w={"15%"}
                  href="https://github.com/WCFixture/WCFixture"
                  target={"_blank"}
                >
                  <Image src={gitIconRepo}></Image>
                </Link>
                <Link
                  w={"15%"}
                  href="https://www.wcfixture.com.ar/"
                  target={"_blank"}
                >
                  <Image src={enlace}></Image>
                </Link>
              </Flex>
            </Flex>
            <Flex direction={"column"} w="30%" p={"2px"} alignItems={"center"}>
              <Image src={findYourActivity} borderRadius="5px"></Image>
              <br />
              <Text fontSize={"1.1vw"} as="b" fontFamily="Montserrat">
                findYourActivity
              </Text>
              <Text fontSize={"0.8vw"} fontFamily="Montserrat">
                Paises y turismo
              </Text>
              <br />
              <Divider orientation="horizontal" borderColor="black" w={"70%"} />
              <br />
              <Text
                fontSize={"1vw"}
                align={"center"}
                maxW="65%"
                fontFamily={"Roboto"}
              >
                Desarrollo de una App de paises y actividades turisticas que
                incluye: filtrados, ordenamientos y creacion de tareas.
              </Text>
              <br />
              <Divider orientation="horizontal" borderColor="black" w={"70%"} />
              <br />
              <Flex justifyContent="space-around">
                <Link
                  w={"15%"}
                  href="https://github.com/MatiTonelli/ProyectoPaises"
                  target={"_blank"}
                >
                  <Image src={gitIconRepo}></Image>
                </Link>
                <Link
                  w={"15%"}
                  href="https://kinema-entertainment.vercel.app/"
                  target={"_blank"}
                  display="none"
                >
                  <Image src={enlace}></Image>
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        h={"100vh"}
        direction="column"
        alignItems={"center"}
        borderTop="1px"
      >
        <Text
          fontFamily="Montserrat"
          fontSize={"1.5vw"}
          my="5vh"
          fontWeight={700}
          as="i"
        >
          My knowledges
        </Text>
        <Flex
          fontFamily="Montserrat"
          m="0"
          p="0"
          w={"70vw"}
          alignItems={"center"}
          direction="column"
        >
          <Flex
            border={"1px"}
            borderRadius={"12px"}
            p="1vw 3vw 1vw 3vw"
            alignItems={"center"}
            direction="column"
            w="67vw"
            backgroundColor={circles}
          >
            <Text align={"center"} fontSize="1vw" fontWeight={600} mb="1vw">
              Tech Skills:
            </Text>
            <Flex justifyContent={"space-evenly"} w="100%">
              <Tooltip
                label="NodeJS"
                aria-label="A tooltip"
                hasArrow={true}
                closeDelay={250}
                placement="top"
              >
                <Image w={"8vw"} src={nodeIcon} mx="2vw"></Image>
              </Tooltip>
              <Tooltip
                label="React.js"
                aria-label="A tooltip"
                hasArrow={true}
                closeDelay={250}
                placement="top"
              >
                <Image w={"8vw"} src={reactIcon} mx="2vw"></Image>
              </Tooltip>
              <Tooltip
                label="Redux"
                aria-label="A tooltip"
                hasArrow={true}
                closeDelay={250}
                placement="top"
              >
                <Image w={"8vw"} src={reduxIcon} mx="2vw"></Image>
              </Tooltip>
              <Tooltip
                label="Express JS"
                aria-label="A tooltip"
                hasArrow={true}
                closeDelay={250}
                placement="top"
              >
                <Image w={"8vw"} src={expressIcon} mx="2vw"></Image>
              </Tooltip>
              <Tooltip
                label="MongoDB"
                aria-label="A tooltip"
                hasArrow={true}
                closeDelay={250}
                placement="top"
              >
                <Image w={"8vw"} src={mongoIcon} mx="2vw"></Image>
              </Tooltip>
            </Flex>
            <Flex justifyContent={"space-evenly"} w="100%">
              <Tooltip
                label="PostgreSQL"
                aria-label="A tooltip"
                hasArrow={true}
                closeDelay={250}
              >
                <Image w={"8vw"} src={postgresIcon} mx="2vw"></Image>
              </Tooltip>
              <Tooltip
                label="Firebase"
                aria-label="A tooltip"
                hasArrow={true}
                closeDelay={250}
              >
                <Image w={"8vw"} src={firebaseIcon} mx="2vw"></Image>
              </Tooltip>
              <Tooltip
                label="Chakra UI"
                aria-label="A tooltip"
                hasArrow={true}
                closeDelay={250}
              >
                <Image w={"8vw"} src={chakraIcon} mx="2vw"></Image>
              </Tooltip>
              <Tooltip
                label="GitHub"
                aria-label="A tooltip"
                hasArrow={true}
                closeDelay={250}
              >
                <Image w={"8vw"} src={gitIcon} mx="2vw"></Image>
              </Tooltip>
              <Tooltip
                label="Metodologia SCRUM"
                aria-label="A tooltip"
                hasArrow={true}
                closeDelay={250}
              >
                <Image w={"8vw"} src={scrumIcon} mx="2vw"></Image>
              </Tooltip>
            </Flex>
          </Flex>
          <Flex justifyContent={"space-between"} w="67vw">
            <Box
              border={"1px"}
              w="23vw"
              borderRadius={"12px"}
              p="1vw 3vw 1vw 3vw"
              mt={"3vw"}
              backgroundColor={circles}
            >
              <Text align={"center"} fontSize="1vw" fontWeight={600} mb="1vw">
                Soft Skills:
              </Text>
              <Text fontWeight={500}> - Adaptabilidad</Text>
              <Text fontWeight={500}> - Análisis de problemas</Text>
              <Text fontWeight={500}> - Actitud positiva</Text>
              <Text fontWeight={500}> - Automotivación</Text>
            </Box>
            <Box
              border={"1px"}
              w="23vw"
              borderRadius={"12px"}
              p="1vw 3vw 1vw 3vw"
              mt={"3vw"}
              backgroundColor={circles}
            >
              <Text align={"center"} fontSize="1vw" fontWeight={600} mb="1vw">
                Currently Learning:
              </Text>
              <Text fontWeight={500}> - Python</Text>
              <Text fontWeight={500}> - TypeScript</Text>
              {/* <Text fontWeight={500}> - Actitud positiva</Text>
              <Text fontWeight={500}> - Automotivación</Text> */}
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        h={"100vh"}
        direction="column"
        alignItems={"center"}
        borderTop="1px"
      >
        <Text
          fontFamily="Montserrat"
          fontSize={"1.5vw"}
          my="5vh"
          fontWeight={700}
          as="i"
        >
          Contact
        </Text>
        <ContactFormWithSocialButtons />
      </Flex>
    </Box>
  );
}
