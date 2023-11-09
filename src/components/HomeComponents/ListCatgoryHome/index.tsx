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
    ).slice(0, 5);

    return (
      <Container maxW="90%" mt={12}>
        <Flex justify="space-between" flexWrap="wrap" alignItems="center">
          <Heading size="lg" mb={{ base: 4, md: 0 }}>
            {category}
          </Heading>
          <Link to={`/categoria/${category}`}>
            <Button variant="outline" colorScheme="blue" size="sm">
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
      {renderItemsByCategory('Classicos')}
      {renderItemsByCategory('Fantasia')}
      {renderItemsByCategory('Mais Lidos')}
      {renderItemsByCategory('Poesias')}
      {renderItemsByCategory('Mais Avaliados')}
    </div>
  );
}
