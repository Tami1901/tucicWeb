import { Box } from "@chakra-ui/layout";
import React, { useState } from "react";
import {
  Button,
  Flex,
  Heading,
  IconButton,
  Image,
  Link,
  VStack,
} from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { FaInfoCircle, FaPaintRoller, FaPrint, FaStamp } from "react-icons/fa";
import {
  GiLaserburn,
  GiLargePaintBrush,
  GiTrowel,
  GiScrew,
  GiHandSaw,
} from "react-icons/gi";
import { GoKey, GoLightBulb, GoPaintcan } from "react-icons/go";
import { RiKnifeLine, RiLightbulbLine, RiScissors2Fill } from "react-icons/ri";

const Home = () => {
  const [hover, setHover] = useState(2);

  return (
    <Flex
      direction="column"
      backgroundColor="gray.900"
      display="flex"
      w="100vw"
      h="100vh"
      pos="relative"
    >
      <Box
        boxSize="sm"
        display="flex"
        m="2em auto"
        mb="4em"
        w="400px"
        h="180px"
      >
        <Image src="tucic-logo.svg" alt="logo" />
      </Box>
      <Box
        display="flex"
        w="auto"
        h="auto"
        justifyContent="center"
        alignContent="center"
      >
        <Grid
          h="30em"
          w="200em"
          templateRows="repeat(4, 1fr)"
          templateColumns="repeat(12, 1fr)"
          gap={2}
        >
          {hover === 0 && (
            <Heading
              position="absolute"
              display="flex"
              w="100%"
              justifyContent="center"
              color="gray.200"
              mt="-8"
              size="2xl"
            >
              <i>Istraži ponudu po na našem tlocrtu</i>
            </Heading>
          )}
          {hover === 1 && (
            <>
              <Heading
                position="absolute"
                display="flex"
                w="100%"
                justifyContent="center"
                color="white"
                mt="-10"
                size="2xl"
                textDecoration="underline"
                textDecorationColor="teal.500"
              >
                Graviranje
              </Heading>
              <GridItem
                as={Link}
                gridColumnStart={3}
                rowSpan={2}
                colSpan={1}
                gridRowStart={2}
              >
                <Box h="auto" w="auto" justifyContent="space-around">
                  <Box ml="12" mb="10" mt="6">
                    <FaStamp color="white" size="40" />
                  </Box>
                  <FaPrint color="white" size="40" />
                  <Box ml="12" mb="10" mt="8">
                    <GiLaserburn color="white" size="40" />
                  </Box>
                </Box>
              </GridItem>
            </>
          )}

          {hover === 2 && (
            <>
              <Heading
                position="absolute"
                display="flex"
                w="100%"
                justifyContent="center"
                color="white"
                mt="-10"
                size="2xl"
                textDecoration="underline"
                textDecorationColor="purple.500"
              >
                Informacije
              </Heading>
              <GridItem
                as={Link}
                gridColumnStart={5}
                rowSpan={1}
                colSpan={1}
                gridRowStart={1}
              >
                <Box
                  h="100%"
                  w="auto"
                  display="flex"
                  justifyContent="center"
                  alignItems="flex-end"
                  pb="4"
                >
                  <FaInfoCircle color="white" size="40" />
                </Box>
              </GridItem>
            </>
          )}
          {hover === 3 && (
            <>
              <Heading
                position="absolute"
                display="flex"
                w="100%"
                justifyContent="center"
                color="white"
                mt="-10"
                size="2xl"
                textDecoration="underline"
                textDecorationColor="orange.500"
              >
                Miješanje boja
              </Heading>
              <GridItem
                as={Link}
                gridColumnStart={6}
                rowSpan={1}
                colSpan={1}
                gridRowStart={1}
              >
                <Box
                  h="100%"
                  w="auto"
                  display="flex"
                  justifyContent="center"
                  alignItems="flex-end"
                  pb="4"
                >
                  <GoPaintcan color="white" size="40" />
                </Box>
              </GridItem>
            </>
          )}
          {hover === 4 && (
            <>
              <Heading
                position="absolute"
                display="flex"
                w="100%"
                justifyContent="center"
                color="white"
                mt="-10"
                size="2xl"
                textDecoration="underline"
                textDecorationColor="orange.500"
              >
                Kemoboja
              </Heading>
              <GridItem
                as={Link}
                gridColumnStart={5}
                rowSpan={1}
                colSpan={2}
                gridRowStart={4}
              >
                <Flex h="100%" w="100%" justifyContent="space-around" pt="4">
                  <GiLargePaintBrush color="white" size="40" />
                  <Box pt="8">
                    <FaPaintRoller color="white" size="40" />
                  </Box>

                  <GiTrowel color="white" size="40" />
                </Flex>
              </GridItem>
            </>
          )}
          {hover === 5 && (
            <>
              <Heading
                position="absolute"
                display="flex"
                w="100%"
                justifyContent="center"
                color="white"
                mt="-10"
                size="2xl"
                textDecoration="underline"
                textDecorationColor="gray.500"
              >
                Brusiona i izrada ključeva
              </Heading>
              <GridItem
                as={Link}
                gridColumnStart={7}
                rowSpan={1}
                gridRowStart={1}
                colSpan={3}
              >
                <Flex
                  h="100%"
                  w="100%"
                  justifyContent="space-around"
                  alignItems="flex-end"
                  pb="4"
                >
                  <GoKey color="white" size="40" />
                  <Box pb="8">
                    <RiKnifeLine color="white" size="40" />
                  </Box>

                  <RiScissors2Fill color="white" size="40" />
                </Flex>
              </GridItem>

              <GridItem
                as={Link}
                gridColumnStart={10}
                gridRowStart={2}
                rowSpan={1}
                colSpan={1}
              >
                <Flex
                  h="100%"
                  w="100%"
                  alignItems="center"
                  justifyContent="space-around"
                  pl="4"
                >
                  <Box pr="4">
                    <img src="van.svg" alt="logo" width="60em" />
                  </Box>
                  <Box>
                    <img src="van.svg" alt="logo" width="60em" />
                  </Box>
                </Flex>
              </GridItem>
            </>
          )}
          {hover === 6 && (
            <>
              <Heading
                position="absolute"
                display="flex"
                w="100%"
                justifyContent="center"
                color="white"
                mt="-10"
                size="2xl"
                textDecoration="underline"
                textDecorationColor="blue.500"
              >
                Željeznarija
              </Heading>
              <GridItem
                as={Link}
                gridColumnStart={7}
                gridRowStart={4}
                rowSpan={1}
                colSpan={3}
              >
                <Flex h="100%" w="100%" justifyContent="space-around" pt="4">
                  <GiScrew color="white" size="40" />
                  <Box pt="8">
                    <RiLightbulbLine color="white" size="40" />
                  </Box>
                  <GiHandSaw color="white" size="40" />
                </Flex>
              </GridItem>

              <GridItem
                as={Link}
                gridColumnStart={10}
                gridRowStart={3}
                rowSpan={1}
                colSpan={1}
              >
                <Flex
                  h="100%"
                  w="100%"
                  alignItems="center"
                  justifyContent="start"
                  pl="4"
                >
                  <img src="kombi.svg" alt="logo" width="60em" />
                </Flex>
              </GridItem>
            </>
          )}
          <GridItem
            as={Link}
            gridColumnStart={4}
            gridRowStart={2}
            rowSpan={2}
            colSpan={1}
            bg="teal.500"
            onMouseEnter={() => setHover(1)}
            onMouseLeave={() => setHover(0)}
            _hover={{ backgroundColor: "teal.400" }}
            _active={{ backgroundColor: "teal.500" }}
          />
          <GridItem
            as={Link}
            gridColumnStart={5}
            gridRowStart={2}
            rowSpan={1}
            colSpan={1}
            bg="purple.500"
            onMouseEnter={() => setHover(2)}
            onMouseLeave={() => setHover(0)}
            _hover={{ backgroundColor: "purple.400" }}
            _active={{ backgroundColor: "purple.500" }}
          />
          <GridItem
            as={Link}
            gridColumnStart={6}
            gridRowStart={2}
            rowSpan={1}
            colSpan={1}
            bg="orange.500"
            onMouseEnter={() => setHover(3)}
            onMouseLeave={() => setHover(0)}
            _hover={{ backgroundColor: "orange.400" }}
            _active={{ backgroundColor: "orange.500" }}
          />

          <GridItem
            as={Link}
            gridColumnStart={5}
            gridRowStart={3}
            rowSpan={1}
            colSpan={2}
            bg="orange.500"
            gridRowGap="0"
            gridColumnGap="0"
            onMouseEnter={() => setHover(4)}
            onMouseLeave={() => setHover(0)}
            _hover={{ backgroundColor: "orange.400" }}
            _active={{ backgroundColor: "orange.500" }}
          />
          <GridItem
            as={Link}
            gridColumnStart={7}
            gridRowStart={2}
            rowSpan={1}
            colSpan={3}
            bg="gray.500"
            onMouseEnter={() => setHover(5)}
            onMouseLeave={() => setHover(0)}
            _hover={{ backgroundColor: "gray.400" }}
            _active={{ backgroundColor: "gray.500" }}
          />
          <GridItem
            as={Link}
            gridColumnStart={7}
            gridRowStart={3}
            rowSpan={1}
            colSpan={3}
            bg="blue.500"
            onMouseEnter={() => setHover(6)}
            onMouseLeave={() => setHover(0)}
            _hover={{ backgroundColor: "blue.400" }}
            _active={{ backgroundColor: "blue.500" }}
          />
        </Grid>
      </Box>
    </Flex>
  );
};

export default Home;
