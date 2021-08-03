import { StarIcon } from "@chakra-ui/icons";
import { Box, Badge } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import React from "react";

const Card = ({ image, price, title }) => {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Brusenje svih vrsta noževa",
    formattedPrice: "15kn",
    reviewCount: 34,
    rating: 4,
  };
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={image} alt={image} />

      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          color="white"
          isTruncated
        >
          {title}
        </Box>

        <Box color="white">
          <Box as="span" color="gray.600" fontSize="sm">
            ~
          </Box>
          {price}kn
          <Box as="span" color="gray.600" fontSize="sm">
            / kom
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
