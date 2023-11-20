import { Grid, GridItem } from "@chakra-ui/react";

import Rodape from "../Rodape";
import Topo from "../Topo";
interface Props{
    children: React.ReactNode
}

export default function Layout(props: Props){
const {children} = props
    return (
    <Grid className='grid' templateColumns='1fr' templateRows='auto auto 64px' >
      <GridItem colSpan={1} rowSpan={2} >
        <Topo />
      </GridItem>
      <GridItem colSpan={4} rowSpan={2}
       bgImage="url('/Egipt.png')" // Substitua pelo caminho real da sua imagem
       // Garante que a imagem cobre todo o elemento
       bgPosition='center' // Centraliza a imagem
      >
        {children}
      </GridItem>
      <GridItem colSpan={1} rowSpan={1}>
        <Rodape />
      </GridItem>
    </Grid>
  )
}