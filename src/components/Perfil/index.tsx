import React, { useEffect, useState } from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Flex,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import axios from 'axios';

// Define um tipo para os dados do usuário
type UserData = {
  name: string;
  email: string;
  password: string;
};

const PerfilUsuario = () => {
  const [dadosUsuario, setDadosUsuario] = useState<UserData | null>(null);
  const [visualizarSenha, setVisualizarSenha] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token'); // Obtenha o token do localStorage

    if (!token) {
      // Lidar com a ausência de token, por exemplo, redirecionar para a tela de login
      return;
    }

    const buscarDadosUsuario = async () => {
      try {
        const token = localStorage.getItem('token'); // Obtenha o token do localStorage

        if (!token) {
          console.error('Token ausente'); // Verifique se o token está presente
          return;
        }

        console.log('Token:', token);

        const response = await axios.get('http://localhost:3001/auth/me', {
          headers: {
            Authorization: token, // Use o token armazenado no localStorage
          },
        });
        console.log('Resposta da API:', response);

        setDadosUsuario(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados do usuário', error);
      }
    };

    buscarDadosUsuario();
  }, []);

  const toggleVisualizarSenha = () => {
    setVisualizarSenha(!visualizarSenha);
  };

  return (
    <Flex
      align="center"
      justify="center"
      height="100vh"
    >
      <Box p={4} border="2px solid black" borderRadius="xl" maxWidth="400px">
        <Heading as="h2" size="lg" mb={4}>
          Perfil do Usuário
        </Heading>
        <FormControl>
          <FormLabel>Nome</FormLabel>
          <span>{dadosUsuario?.name}</span>
        </FormControl>
        <FormControl mt={2}>
          <FormLabel>Email</FormLabel>
          <span>{dadosUsuario?.email}</span>
        </FormControl>
        <FormControl mt={2}>
          <FormLabel>Senha</FormLabel>
          {visualizarSenha ? (
            <Input type="text" value={dadosUsuario?.password} />
          ) : (
            <Input type="password" value="********" />
          )}
          <Button
            mt={2}
            colorScheme="blue"
            onClick={toggleVisualizarSenha}
            leftIcon={visualizarSenha ? <ViewOffIcon /> : <ViewIcon />}
          >
            {visualizarSenha ? 'Ocultar Senha' : 'Mostrar Senha'}
          </Button>
        </FormControl>
      </Box>
    </Flex>
  );
};

export default PerfilUsuario;
