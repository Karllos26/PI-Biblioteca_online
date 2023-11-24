import React from 'react';
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FcAssistant, FcCollaboration, FcDonate, FcManager, FcAbout } from 'react-icons/fc';
import { cardData } from '../ListaLivros/CardData';
import Card from '../CardLivro';

export default function HomeCategoria() {


  return (
    <Container maxW={'90%'} mt={12}>
      <Flex justify="space-between">
        <Heading size="lg">Recentes</Heading>
        <Button variant="outline" colorScheme="blue" size="sm">
          Ver Mais
        </Button>
      </Flex>
      <Flex flexWrap="wrap" gridGap={6} justify="center">
        {cardData.map((data, index) => (
          <Card key={index} {...data} />
        ))}
      </Flex>


      <Flex
        style={{ backgroundColor: 'rgba(0, 0, 205, 0.65)' }}
        justify="space-between"
        alignItems="center"
        flexWrap="wrap" // Permitir que os itens quebrem para a próxima linha
        flexDirection="row" // Garantir que os itens estejam alinhados horizontalmente
        w="100%" // Definir largura máxima
      >
        <Heading size="lg" style={{ color: 'black', stroke: '2px solid white' }}>
          Classicos
        </Heading>
        <Button
          variant="outline"
          colorScheme="blue"
          size="sm"
          style={{
            backgroundColor: 'black',
            fontSize: '20px',
            color: 'white',
            border: '2px solid white',
          }}
        >
          Ver Mais
        </Button>
      </Flex>

      <Flex flexWrap="wrap" gridGap={6} justify="center">
        {cardData.map((data, index) => (
          <Card key={index} {...data} />
        ))}
      </Flex>


      <Flex justify="space-between">
        <Heading size="lg">Mais Lidos</Heading>
        <Button variant="outline" colorScheme="blue" size="sm">
          Ver Mais
        </Button>
      </Flex>
      <Flex flexWrap="wrap" gridGap={6} justify="center">
        {cardData.map((data, index) => (
          <Card key={index} {...data} />
        ))}
      </Flex>


      <Flex justify="space-between">
        <Heading size="lg">Poesias</Heading>
        <Button variant="outline" colorScheme="blue" size="sm">
          Ver Mais
        </Button>
      </Flex>
      <Flex flexWrap="wrap" gridGap={6} justify="center">
        {cardData.map((data, index) => (
          <Card key={index} {...data} />
        ))}
      </Flex>


      <Flex justify="space-between">
        <Heading size="lg">Mais Avaliados</Heading>
        <Button variant="outline" colorScheme="blue" size="sm">
          Ver Mais
        </Button>
      </Flex>
      <Flex flexWrap="wrap" gridGap={6} justify="center">
        {cardData.map((data, index) => (
          <Card key={index} {...data} />
        ))}
      </Flex>
    </Container>
  );
}
