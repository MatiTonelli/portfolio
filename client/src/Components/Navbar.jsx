import React from 'react';
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
} from '@chakra-ui/react';

export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode()
    const bg = useColorModeValue('#FFCEDE', '#9F73AB');
  return (
    <Box h="7vh" bgColor={bg}>
        <Button onClick={toggleColorMode}>
            Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
      
    </Box>
  );
}
