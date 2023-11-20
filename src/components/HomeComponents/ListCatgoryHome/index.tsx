import React from 'react';
import {
  Button,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { cardData } from '../ListaLivros/CardData';
import Card from '../CardLivro';
import ScrollToTopButton from '../VoltarTopo';

export default function HomeListaCategoria() {
  const renderItemsByCategory = (category: string) => {
    const filteredData = cardData.filter((data) =>
      data.category?.includes(category)
    ).slice(0, 6);

    return (
      <Container maxW="90%" mt={12}>
        <Flex justify="space-between" flexWrap="wrap" alignItems="center" bg="rgba(255, 215, 0, 0.7)" borderRadius="10px">
          <Heading size="lg" mb={{ base: 4, md: 0 }}>
            {category}
          </Heading>
          <Link to={`/${category}`}>
            <Button variant="solid"  size="sm" colorScheme='blue' >
              Ver Mais
            </Button>
          </Link>
        </Flex>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {filteredData.map((data, index) => (
            <Card key={index} {...data} />
          ))}
        </SimpleGrid>
      </Container>
    );
  }

  return (
    <div>
      {renderItemsByCategory('Mais Avaliados')}
      {renderItemsByCategory('Classicos')}
      {renderItemsByCategory('Infantil')}
      {renderItemsByCategory('Fantasia')}
      {renderItemsByCategory('Ficção')}
      {renderItemsByCategory('Terror')}
      {renderItemsByCategory('Romance')}
    </div>
  );
}
