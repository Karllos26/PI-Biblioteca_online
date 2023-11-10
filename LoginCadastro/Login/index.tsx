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
} from '@chakra-ui/react';
import axios from 'axios';
import { isUserAuthenticated } from './authUtils'; // Importe a função

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
        // Redireciona apenas após o login bem-sucedido
        window.location.href = '/';
      })
      .catch((error) => {
        console.error('Erro de login:', error);
        setLoginError(true);
      });
  };

  return (
    <Center h="100vh">
      <VStack spacing={4}>
        <Heading>Login</Heading>
        <Box borderWidth="1px" borderRadius="lg" p={4} w="300px">
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Senha</FormLabel>
            <Input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </FormControl>
          {loginError && (
            <Box color="red" textAlign="center">
              Falha no login. Verifique suas credenciais.
            </Box>
          )}
          <Button colorScheme="blue" onClick={handleLogin}>
            Login
          </Button>
        </Box>
        <Link to="/usuarios">Criar uma conta</Link>
      </VStack>
    </Center>
  );
}

export default Login;
