import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Flex, Heading, Button, SimpleGrid } from '@chakra-ui/react';
import { cardData } from '../ListaLivros/CardData';
import Card from '../CardLivro';
import ScrollToTopButton from '../VoltarTopo';

const CategoriaPage = () => {
  const { nomeCategoria } = useParams();
  const categoria = nomeCategoria || '';

  useEffect(() => {
    window.scrollTo(0, 0); // Rolando para o topo quando a página é acessada
  }, []);

  // Filtrar os itens da categoria correspondente
  const filteredData = cardData.filter((data) =>
    data.category && data.category.includes(categoria)
  );

  return (
    <Container maxW="100%" mt={12}>
      <Flex justify="space-between" align="center">
        <Heading size="lg" mb={[4, 0]} flexBasis={['100%', 'auto']}>
          {categoria}
        </Heading>
        <Link to="/">
          <Button colorScheme="blue" size="sm">
            Voltar para a Home
          </Button>
        </Link>
      </Flex>
      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
        {filteredData.map((data, index) => (
          <Card key={index} {...data} />
        ))}
      </SimpleGrid>
      <ScrollToTopButton />
    </Container>
  );
};

export default CategoriaPage;
