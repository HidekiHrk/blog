import { Box, Button, Flex, Image, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import { BiMoon, BiSun } from "react-icons/bi";

import Logo from "../../assets/logo.png";

export const Home: React.FC = function () {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      py="2"
      px="4"
      alignItems="center"
      justifyContent="center"
      bg="Background"
      boxShadow="md"
    >
      <Flex
        alignItems="center"
        gap="0.6rem"
        w="100%"
        maxWidth="800px"
        mx="30px"
      >
        <Image
          src={Logo}
          width={50}
          height={50}
          borderRadius="0.50rem"
          alt="logo"
          fallbackSrc="https://via.placeholder.com/50"
          draggable="false"
          userSelect="none"
        />
        <Text color="#9fb" textShadow="2px 2px 2px #0003" fontSize="1.8rem">
          0x9fb
        </Text>
        <Box ms="auto">
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <BiMoon /> : <BiSun />}
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};
