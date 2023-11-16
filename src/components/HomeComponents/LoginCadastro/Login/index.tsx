import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Center,
  Container,
  Flex,
} from '@chakra-ui/react';
import axios from 'axios';
import { isUserAuthenticated } from './authUtils';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loginError, setLoginError] = useState(false);

  const handleLogin = () => {
    const loginData = {
      email: email,
      password: senha,
    };

    axios
      .post('http://localhost:3001/auth/login', loginData)
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        window.location.href = '/';
      })
      .catch((error) => {
        console.error('Erro de login:', error);
        setLoginError(true);
      });
  };

  return (
    <Flex minH="100vh" alignItems="center" justifyContent="center">
      <VStack spacing={4}>
        <Box borderWidth="2px" borderRadius="lg" p={4} w="300px" borderColor="black">
          <Heading>Login</Heading>

          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              bg="white"
              border="2px solid black"
              _hover={{ borderColor: 'yellow.400' }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Senha</FormLabel>
            <Input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              bg="white"
              border="2px solid black"
              _hover={{ borderColor: 'yellow.400' }}
            />
          </FormControl>
          {loginError && (
            <Box color="red" textAlign="center">
              Falha no login. Verifique suas credenciais.
            </Box>
          )}
          <Center>
          <Button mt={4} colorScheme="blue" onClick={handleLogin}>
            Login
          </Button>
          </Center>
        </Box>
        <Link to="/usuarios">Criar uma conta</Link>
      </VStack>
    </Flex>
  );
}

export default Login;
