import { Box, Heading, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import BackgroundLayout from "../layouts/BackgroundLayout";

const BojeILakovi = () => {
  return (
    <BackgroundLayout page={4}>
      <>
        <Heading
          display="flex"
          w="100%"
          justifyContent="center"
          color="white"
          size="4xl"
          p="6"
        >
          Boje i lakovi
        </Heading>
      </>
    </BackgroundLayout>
  );
};

export default BojeILakovi;
