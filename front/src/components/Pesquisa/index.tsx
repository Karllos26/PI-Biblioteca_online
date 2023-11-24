import React, { useState } from 'react';

import { Box, Button, Container, Divider, Flex, Heading, Input, SimpleGrid } from '@chakra-ui/react';

import { FaSearch } from 'react-icons/fa';
import unorm from 'unorm';
import { cardData } from '../HomeComponents/ListaLivros/CardData';
import Card from '../HomeComponents/CardLivro';
import ScrollToTopButton from '../HomeComponents/VoltarTopo';

const SearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const normalizeString = (str: string) => {
    return unorm.nfkd(str).replace(/[\u0300-\u036F]/g, '').toLowerCase();
  };

  const handleSearch = (searchTerm: string) => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      return;
    }

    const normalizedSearchTerm = normalizeString(searchTerm);

    const results = cardData.filter((card) => {
      const normalizedTitle = normalizeString(card.heading);
      return normalizedTitle.includes(normalizedSearchTerm);
    });

    setSearchResults(results);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch(searchTerm);
    }
  };

  const handleButtonClick = () => {
    handleSearch(searchTerm);
  };

  return (
    <Box p={4} h="100%" minH="100vh" display="flex" flexDirection="column" alignItems="center">
      <Container maxW="container.lg" mt={12}>
        <Heading as="h1" size="xl" mt={4} textAlign="center">
          Pesquisa de Livros
        </Heading>
        <Flex mt={4} justifyContent="center" alignItems="center">
          <Input
            type="text"
            placeholder="Pesquisar livros"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            border="2px solid black"
            _hover={{ borderColor: 'yellow.400' }}
            backgroundColor='white'
          />
          <Button
            ml={2}
            colorScheme="blue"
            onClick={handleButtonClick}
            border="2px"
            _hover={{ borderColor: 'black' }}
            _active={{ bg: 'black' }}
          >
            <FaSearch color="yellow" />
          </Button>
        </Flex>
        <Divider my={4} color="black" />
        {searchResults.length > 0 && (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {searchResults.map((card, index) => (
              <Card
                key={index}
                heading={card.heading}
                imageUrl={card.imageUrl}
                href={card.href}
                rating={card.rating}
              />
            ))}
          </SimpleGrid>
        )}
        <ScrollToTopButton />
      </Container>
    </Box>
  );
};

export default SearchPage;
