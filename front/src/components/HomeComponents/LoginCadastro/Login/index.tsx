// components/Login.tsx

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
  Flex,
} from '@chakra-ui/react';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loginError, setLoginError] = useState(false);

  const handleLogin = async () => {
    try {
      const loginData = {
        email: email,
        password: senha,
      };

      const response = await fetch('http://localhost:3001/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        throw new Error('Credenciais inválidas');
      }

      console.log('Autenticação bem-sucedida');
      window.location.href = '/';
    } catch (error) {
      console.error('Erro de login:', error);
      setLoginError(true);
    }
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
