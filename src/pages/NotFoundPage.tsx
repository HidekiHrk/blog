import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BiLeftArrowAlt, BiXCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

export const NotFoundPage: React.FC = function () {
  return (
    <Flex
      w="100vw"
      h="100vh"
      justifyContent="center"
      direction="column"
      alignItems="center"
    >
      <Box color="red.300" fontSize="3rem">
        <BiXCircle />
      </Box>
      <Text fontSize="1.5rem">404 Not Found</Text>
      <Link to="/">
        <Text
          pt="2"
          display="flex"
          alignItems="center"
          fontSize="1.1rem"
          color="blue.300"
        >
          Go to Home
          <BiLeftArrowAlt />
        </Text>
      </Link>
    </Flex>
  );
};
