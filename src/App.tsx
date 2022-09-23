import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

import { MainRouter } from "./pages/routes";

export const App: React.FC = function () {
  return (
    <>
      <ChakraProvider>
        <MainRouter />
      </ChakraProvider>
    </>
  );
};
