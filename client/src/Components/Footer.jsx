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
  IconButton,
} from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsPerson, BsTwitter } from "react-icons/bs";

export default function Footer() {
    const bg = useColorModeValue("linear-gradient(0deg, rgba(238, 202, 171, 1) 79%, rgba(238, 202, 171 ,0.8) 90%, rgba(238, 202, 171, 0.7) 93%, rgba(238, 202, 171, 0.6) 96%, rgba(238, 202, 171, 0.3) 98%, rgba(238, 202, 171, 0.2) 100%, rgba(238, 202, 171, 0) 100%);", "linear-gradient(0deg, rgba(30,30,50,1) 79%, rgba(30,30,50,0.8) 90%, rgba(30,30,50,0.7) 93%, rgba(30,30,50,0.6) 96%, rgba(30,30,50,0.3) 98%, rgba(30,30,50,0.2) 100%, rgba(30,30,50,0) 100%);" )
    const dividerColor = useColorModeValue('black', 'white')
    return (
    <Box
      mt={"-80px"}
      h={"20vh"}
      bgGradient={bg}
    >
      <Box
        pos="absolute"
        bottom="0.1"
        left={"50%"}
        background-color="black"
        transform={"translate(-50%, -50%)"}
      >
        <Box fontSize={"1vw"}>
          <Link href="https://github.com/MatiTonelli" target="_blank">
            GitHub
          </Link>
          &nbsp;|&nbsp;
          <Link href="https://twitter.com/matias_tonelli" target="_blank">
            Twitter
          </Link>
          &nbsp;|&nbsp;
          <Link
            href="https://www.linkedin.com/in/matias-tonelli/"
            target="_blank"
          >
            Linkedin
          </Link>
        </Box>
        <br />
        <Divider w={'80vw'} borderColor={dividerColor}></Divider>
      </Box>
      <Box
        pos="absolute"
        bottom="-4"
        left={"50%"}
        background-color="black"
        transform={"translate(-50%, -50%)"}
      >
        <Text as="i" align={"center"}>
          Matias Tonelli 2023
        </Text>
      </Box>
    </Box>
  );
}
