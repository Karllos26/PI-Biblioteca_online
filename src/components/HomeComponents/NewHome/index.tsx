import { Box, Container } from "@chakra-ui/react";
import CardsHome from "../CardsHome";
import HomeListaCategoria from "../ListCatgoryHome";
import ScrollToTopButton from "../VoltarTopo";

const pageStyle = {
  width: '100vw',  // Largura igual à largura da tela
  height: '100vh',  // Altura igual à altura da tela
  overflow: 'hidden',  // Esconde a barra de rolagem
};

export default function HomeBiblioteca() {
  return(
  <Box maxWidth="100%" overflowX="hidden">
  <Container maxW="100vw">
    <CardsHome />
    <HomeListaCategoria />  
    <ScrollToTopButton/>
  </Container>
</Box>
  )}