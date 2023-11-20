import { Box, Container } from "@chakra-ui/react";
import CardsHome from "../CardsHome";
import HomeListaCategoria from "../ListCatgoryHome";
import ScrollToTopButton from "../VoltarTopo";

export default function HomeBiblioteca() {
  return(
  <Box >
  
    <CardsHome />
    <HomeListaCategoria />  
    <ScrollToTopButton/>
  
</Box>
  )}