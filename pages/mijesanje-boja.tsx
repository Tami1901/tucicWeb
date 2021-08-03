import { Box, Heading, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import BackgroundLayout from "../layouts/BackgroundLayout";

const MijesanjeBoja = () => {
  return (
    <BackgroundLayout page={3}>
      <>
        <Heading
          display="flex"
          w="100%"
          justifyContent="center"
          color="white"
          size="4xl"
          p="6"
        >
          Mijesanje boja
        </Heading>
      </>
    </BackgroundLayout>
  );
};

export default MijesanjeBoja;
