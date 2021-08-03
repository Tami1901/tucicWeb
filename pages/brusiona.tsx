import { Box, Heading, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import BackgroundLayout from "../layouts/BackgroundLayout";

const Brusiona = () => {
  return (
    <BackgroundLayout page={5}>
      <>
        <Heading
          display="flex"
          w="100%"
          justifyContent="center"
          color="white"
          size="4xl"
          p="6"
        >
          Brusiona
        </Heading>
      </>
    </BackgroundLayout>
  );
};

export default Brusiona;
