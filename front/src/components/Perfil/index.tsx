import React, { useState, useEffect } from 'react';
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

// Define um tipo para os dados do usuário
type UserData = {
  name: string;
  email: string;
  password: string;
  photoUrl?: string;
};

const PerfilUsuario = () => {
  const [dadosUsuario, setDadosUsuario] = useState<UserData | null>(null);
  const [visualizarSenha, setVisualizarSenha] = useState(false);

  useEffect(() => {
    // Simulação de dados do usuário
    const dadosSimulados: UserData = {
      name: 'Usuário de Teste',
      email: 'teste@example.com',
      password: 'senha123',
      photoUrl: 'https://via.placeholder.com/150', // URL da imagem simulada
    };

    // Atualiza o estado com os dados simulados
    setDadosUsuario(dadosSimulados);
  }, []);

  const toggleVisualizarSenha = () => {
    setVisualizarSenha(!visualizarSenha);
  };

  return (
    <Flex align="center" justify="center" height="100vh">
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
        {dadosUsuario?.photoUrl && (
          <FormControl mt={2}>
            <FormLabel>Imagem</FormLabel>
            <img src={dadosUsuario.photoUrl} alt="Imagem do usuário" />
          </FormControl>
        )}
      </Box>
    </Flex>
  );
};

export default PerfilUsuario;
