import { Box, Heading, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import BackgroundLayout from "../layouts/BackgroundLayout";

const Kontakt = () => {
  return (
    <BackgroundLayout page={2}>
      <>
        <Heading
          display="flex"
          w="100%"
          justifyContent="center"
          color="white"
          size="4xl"
          p="6"
        >
          Kontakt
        </Heading>
      </>
    </BackgroundLayout>
  );
};

export default Kontakt;
