import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  HStack,
  useColorModeValue,
  Stack,
  IconButton,
  useDisclosure,
  Button,
  Text,
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { RiSearch2Line } from 'react-icons/ri';
import { BiUser } from 'react-icons/bi';
import axios from 'axios';

interface Props {
  children: React.ReactNode;
}

const Links = [
  { href: '/', texto: 'Home' },
  { href: '/pesquisa', texto: 'Pesquisa' },
];

const NavLink = (props: Props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}
    >
      {children}
    </Box>
  );
};

export default function Topo() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState<{ name: string } | null>(null);

  useEffect(() => {
    // Verifique a autenticação do usuário aqui
    const token = localStorage.getItem('token');

    if (token) {
      axios
        .get('http://localhost:3001/auth/me', {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          // Atualize o estado com os dados do usuário da API
          setUserData(response.data);
          setIsAuthenticated(true);
        })
        .catch((error) => {
          console.error('Erro ao buscar dados do usuário', error);
        });
    }
  }, []);

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', overflow: 'hidden' }}>
              <img
                src="Logo.png"
                alt="Logo"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <Link to={link.href} key={link.texto}>
                  <NavLink>{link.texto}</NavLink>
                </Link>
              ))}
            </HStack>
          </HStack>
          <HStack spacing={4}>
            <Link to="/pesquisa">
              <IconButton
                aria-label="Pesquisar"
                icon={<RiSearch2Line />}
                variant="ghost"
                colorScheme="blue"
                size="md"
              />
            </Link>
            {isAuthenticated ? (
              <HStack>
                <Text>{userData?.name}</Text>
                <IconButton
                  aria-label="Perfil"
                  icon={<BiUser />}
                  variant="ghost"
                  colorScheme="blue"
                  size="md"
                />
              </HStack>
            ) : (
              <>
                <Link to="/usuarios">
                  <Button colorScheme="blue" size="md">
                    Cadastro
                  </Button>
                </Link>
                <Link to="/login">
                  <Button colorScheme="blue" size="md">
                    Login
                  </Button>
                </Link>
              </>
            )}
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <Link to={link.href} key={link.texto}>
                  <NavLink>{link.texto}</NavLink>
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
