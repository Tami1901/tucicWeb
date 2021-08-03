import { Box, Heading, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import BackgroundLayout from "../layouts/BackgroundLayout";

const Graviranje = () => {
  return (
    <BackgroundLayout page={1}>
      <>
        <Heading
          display="flex"
          w="100%"
          justifyContent="center"
          color="white"
          size="4xl"
          p="6"
        >
          Graviranje
        </Heading>
      </>
    </BackgroundLayout>
  );
};

export default Graviranje;
