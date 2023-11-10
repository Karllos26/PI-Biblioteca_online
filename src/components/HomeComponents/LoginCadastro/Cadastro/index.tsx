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
    <Box p={4} maxW="400px" mx="auto">
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
        />
      </FormControl>
      <FormControl mt={2}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          placeholder="Seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl mt={2}>
        <FormLabel>Senha</FormLabel>
        <Input
          type="password"
          placeholder="Sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
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
  );
};

export default Cadastro;
