import React from 'react';
import {
  Box,
  Heading,
  useBreakpointValue,
  Flex,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface CardProps {
  heading: string;
  imageUrl: string;
  href: string;
  rating?: number;
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const maxRating = 5;
  const starElements = [];

  for (let i = 1; i <= maxRating; i++) {
    const isFilled = i <= rating;
    starElements.push(
      <Box
        key={i}
        as="span"
        fontSize="18px"
        _hover={{ color: 'yellow.1000',  background: 'red' }}
        borderColor="2px solid red" // Adicionando contorno preto
        borderRadius="full" // Deixa as estrelas com forma de círculo
        w="20px" // Tamanho das estrelas
        h="20px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        backgroundColor="black" // Cor de preenchimento amarelo ou transparente
        color={isFilled ? 'yellow.400' : 'white'} // Mantendo o texto preto
       
      >
        ★
      </Box>
    );
  }

  return <Flex>{starElements}</Flex>;
};

const Card: React.FC<CardProps> = ({ heading, href, imageUrl, rating }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const imageSize = isMobile ? '150px' : '180px';
  const containerWidth = isMobile ? 'full' : '90%';
  const mobileContainerWidth = isMobile ? '100%' : '90%';

  return (
    <Link to={href}>
      <Box
        w="full"
        maxW={isMobile ? mobileContainerWidth : containerWidth}
        borderWidth="1.5px"
        borderRadius="xl"
        borderColor="black"
        overflow="hidden"
        p={5}
        _hover={{ color: 'blue', background: 'yellow.400' }}
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <img
          src={imageUrl}
          alt={heading}
          style={{ height: imageSize, maxWidth: '100%' }}
        />
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          
        </Box>
        <Box mt={2}>
        {rating !== undefined && <StarRating rating={rating} />}
        </Box>
      </Box>
    </Link>
  );
}

export default Card;
