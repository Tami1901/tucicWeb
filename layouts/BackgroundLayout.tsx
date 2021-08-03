import { Box, Flex, Grid, GridItem, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import Link from "next/link";
import { useLocation } from "react-router-dom";

const BackgroundLayout = ({ page, children }) => {
  const [hover, setHover] = useState(0);
  return (
    <Flex
      direction="column"
      backgroundColor="gray.900"
      display="flex"
      w="100vw"
      h="100vh"
      pos="relative"
    >
      <Box width="16%" m="4" display="flex" position="fixed">
        <Link href="/">
          <Image
            src="tucic-logo.svg"
            alt="logo"
            _hover={{ cursor: "pointer" }}
          />
        </Link>
      </Box>

      {children}

      <Box
        width="16%"
        right="0"
        display="flex"
        position="absolute"
        color="white"
      >
        <Grid
          h="10em"
          w="40em"
          templateRows="repeat(4, 1fr)"
          templateColumns="repeat(6, 1fr)"
          gap={1}
          m="4"
        >
          <Link href="/graviranje">
            <GridItem
              gridColumnStart={1}
              gridRowStart={1}
              rowSpan={2}
              colSpan={1}
              bg={page === 1 ? "teal.100" : "teal.500"}
              onMouseEnter={() => setHover(1)}
              onMouseLeave={() => setHover(0)}
              _hover={
                page !== 1 && { backgroundColor: "teal.400", cursor: "pointer" }
              }
              _active={page !== 1 && { backgroundColor: "teal.500" }}
            />
          </Link>
          <Link href="/kontakt">
            <GridItem
              gridColumnStart={2}
              gridRowStart={1}
              rowSpan={1}
              colSpan={1}
              bg={page === 2 ? "purple.100" : "purple.500"}
              onMouseEnter={() => setHover(2)}
              onMouseLeave={() => setHover(0)}
              _hover={
                page !== 2 && {
                  backgroundColor: "purple.400",
                  cursor: "pointer",
                }
              }
              _active={page !== 2 && { backgroundColor: "purple.500" }}
            />
          </Link>
          <Link href="/mijesanje-boja">
            <GridItem
              gridColumnStart={3}
              gridRowStart={1}
              rowSpan={1}
              colSpan={1}
              bg={page === 3 ? "orange.100" : "orange.500"}
              onMouseEnter={() => setHover(3)}
              onMouseLeave={() => setHover(0)}
              _hover={
                page !== 3 && {
                  backgroundColor: "orange.400",
                  cursor: "pointer",
                }
              }
              _active={page !== 3 && { backgroundColor: "orange.500" }}
            />
          </Link>
          <Link href="/boje-i-lakovi">
            <GridItem
              gridColumnStart={2}
              gridRowStart={2}
              rowSpan={1}
              colSpan={2}
              bg={page === 4 ? "orange.100" : "orange.500"}
              gridRowGap="0"
              gridColumnGap="0"
              onMouseEnter={() => setHover(4)}
              onMouseLeave={() => setHover(0)}
              _hover={
                page !== 4 && {
                  backgroundColor: "orange.400",
                  cursor: "pointer",
                }
              }
              _active={page !== 4 && { backgroundColor: "orange.500" }}
            />
          </Link>
          <Link href="/brusiona">
            <GridItem
              gridColumnStart={4}
              gridRowStart={1}
              rowSpan={1}
              colSpan={3}
              bg={page === 5 ? "gray.100" : "gray.500"}
              onMouseEnter={() => setHover(5)}
              onMouseLeave={() => setHover(0)}
              _hover={
                page !== 5 && { backgroundColor: "gray.400", cursor: "pointer" }
              }
              _active={page !== 5 && { backgroundColor: "gray.500" }}
            />
          </Link>
          <Link href="/zeljeznarija">
            <GridItem
              gridColumnStart={4}
              gridRowStart={2}
              rowSpan={1}
              colSpan={3}
              bg={page === 6 ? "blue.100" : "blue.500"}
              onMouseEnter={() => setHover(6)}
              onMouseLeave={() => setHover(0)}
              _hover={
                page !== 6 && { backgroundColor: "blue.400", cursor: "pointer" }
              }
              _active={page !== 6 && { backgroundColor: "blue.500" }}
            />
          </Link>
        </Grid>
      </Box>
    </Flex>
  );
};

export default BackgroundLayout;
