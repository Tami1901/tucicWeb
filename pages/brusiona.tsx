import { Box, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";
import BackgroundLayout from "../layouts/BackgroundLayout";
import Card from "../layouts/Card";

const Brusiona = () => {
  return (
    <BackgroundLayout page={5} title="Brusiona">
      <Box width="100%" display="flex" mt="10" justifyContent="space-around">
        <SimpleGrid columns={3} spacing="10">
          <Card
            image="dickKnife.jpeg"
            title="Brusenje svih vrsta noževa"
            price={15}
          />
          <Card
            image="skare.webp"
            title="Brusenje svih vrsta kucanskih i frizerskih skara"
            price={30}
          />
          <Card
            image="sajba.jpeg"
            title="Brusenje svih vrsta sajba za mljevenje mesa"
            price={30}
          />
          <Card
            image="lanac.jpeg"
            title="Brusenje svih vrsta lanaca za motorne pile"
            price={15}
          />
          {/* <Card />
          <Card /> */}
        </SimpleGrid>
      </Box>
    </BackgroundLayout>
  );
};

export default Brusiona;
