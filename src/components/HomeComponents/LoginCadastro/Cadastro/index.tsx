import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Container,
  Center,
} from '@chakra-ui/react';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleCadastro = () => {
    const cadastroData = {
      name: nome,
      email: email,
      password: senha,
    };

    axios
      .post('http://localhost:3001/auth/register', cadastroData)
      .then((response) => {
        setMensagem('Cadastro realizado com sucesso');
      })
      .catch((error) => {
        console.error('Erro de cadastro:', error);
        setMensagem('Erro de cadastro');
      });
  };

  return (
    <Center minH="100vh" minW="100vw">
    <Container centerContent >
      <Box
        p={4}
        borderWidth="2px"
        borderRadius="lg"
        w="300px"
        textAlign="center"
        boxShadow="lg"
        borderColor="black"
      >
        <Heading as="h2" size="lg" mb={4}>
          Cadastro
        </Heading>
        <FormControl>
          <FormLabel>Nome</FormLabel>
          <Input
            type="text"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            bg="white" // Configura a cor do fundo para branco
            border="2px solid black" // Adiciona uma borda de 2px preta
            _hover={{ borderColor: 'yellow.400' }}
          />
        </FormControl>
        <FormControl mt={2}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="Seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            bg="white" // Configura a cor do fundo para branco
            border="2px solid black" // Adiciona uma borda de 2px preta
            _hover={{ borderColor: 'yellow.400' }}
          />
        </FormControl>
        <FormControl mt={2}>
          <FormLabel>Senha</FormLabel>
          <Input
            type="password"
            placeholder="Sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            bg="white" // Configura a cor do fundo para branco
            border="2px solid black" // Adiciona uma borda de 2px preta
            _hover={{ borderColor: 'yellow.400' }}
          />
        </FormControl>
        <Button mt={4} colorScheme="blue" onClick={handleCadastro}>
          Cadastrar
        </Button>
        {mensagem && (
          <Text mt={2} color="green.500">
            {mensagem}
          </Text>
        )}
      </Box>
    </Container>
    </Center>
  );
};

export default Cadastro;
