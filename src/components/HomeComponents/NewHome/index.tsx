import { Box, Container } from "@chakra-ui/react";
import CardsHome from "../CardsHome";
import HomeListaCategoria from "../ListCatgoryHome";
import ScrollToTopButton from "../VoltarTopo";

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