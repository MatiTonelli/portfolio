import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  Divider,
  Circle,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import styles from "./Navbar.module.css";
import lightMode from "../Assets/light-mode.png";
import darkMode from "../Assets/night-mode.png";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue(
    "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,206,222,0.6110819327731092) 24%, rgba(255,206,222,0.8743872549019608) 50%, rgba(255,206,222,1) 100%)",
    "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(159, 115, 171, 0.6110819327731092) 24%, rgba(159, 115, 171, 0.8743872549019608) 50%, rgba(159, 115, 171, 1) 100%)"
  );
  const bgBase = useColorModeValue('rgb(255,206,222)', 'rgb(159, 115, 171)')

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
    });
  }, []);

  return (
    <Flex
      h="7vh"
      bgGradient={bg}
      bgColor={scroll ? 'transparent' : bgBase }
      position="sticky"
      top={0}
      zIndex="10"
      flexDirection={"row"}
      justifyContent="center"
    >
      <nav>
        <a href="#">Home</a>
        <a href="#about">About me</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
        <div class={styles.animation}></div>
      </nav>
      <Button
        onClick={toggleColorMode}
        position="absolute"
        bgColor={"transparent"}
        right={10}
        top={3}
      >
        {colorMode === "light" ? (
          <Image src={darkMode} h="50%"></Image>
        ) : (
          <Image src={lightMode} h="50%"></Image>
        )}
      </Button>
    </Flex>
  );
}
