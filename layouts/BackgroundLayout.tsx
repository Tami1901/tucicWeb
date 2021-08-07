import { Box, Flex, Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import Link from "next/link";

const BackgroundLayout = ({ page, title, children }) => {
  const [hover, setHover] = useState(0);
  return (
    <Flex
      direction="column"
      backgroundColor="gray.900"
      display="flex"
      w="100%"
      h="100vh"
      overflowY="scroll"
      pos="relative"
    >
      <Flex w="100%" pb="5" backgroundColor="gray.900" shadow="2xl">
        <Link href="/">
          <Box
            width="16%"
            m="6"
            display="flex"
            position="absolute"
            _hover={{ cursor: "pointer" }}
          >
            <Image src="tucic-logo.svg" alt="logo" />
          </Box>
        </Link>
        <Heading
          display="flex"
          w="100%"
          justifyContent="center"
          color="white"
          size="4xl"
          p="6"
        >
          {title}
        </Heading>
      </Flex>

      {children}

      <Box
        width="16em"
        height="10em"
        display="flex"
        color="white"
        position="absolute"
        right="8"
        flexDirection="column"
      >
        <Grid
          h="5em"
          w="16em"
          templateRows="repeat(2, 1fr)"
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

        {hover !== 0 && (
          <Heading
            display="flex"
            color="white"
            width="100%"
            justifyContent="center"
            size="md"
          >
            {hover === 1
              ? "Graviranje"
              : hover === 2
              ? "Kontakt"
              : hover === 3
              ? "Mijesanje boja"
              : hover === 4
              ? "Boje i lakovi"
              : hover === 5
              ? "Brusiona"
              : hover === 6
              ? "Željeznarija"
              : "nista"}
          </Heading>
        )}
      </Box>
    </Flex>
  );
};

export default BackgroundLayout;
