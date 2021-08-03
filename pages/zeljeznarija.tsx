import { Box, Heading, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import BackgroundLayout from "../layouts/BackgroundLayout";

const Željeznarija = () => {
  return (
    <BackgroundLayout page={6}>
      <>
        <Heading
          display="flex"
          w="100%"
          justifyContent="center"
          color="white"
          size="4xl"
          p="6"
        >
          Željeznarija
        </Heading>
      </>
    </BackgroundLayout>
  );
};

export default Željeznarija;
