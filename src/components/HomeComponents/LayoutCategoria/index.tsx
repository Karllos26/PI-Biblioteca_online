import { Grid, GridItem } from "@chakra-ui/react";
import Topo from "../../Topo";
import Rodape from "../../Rodape";


interface Props{
    children: React.ReactNode
}

export default function LayoutCategoria(props: Props){
const {children} = props
    return (
    <Grid className='grid' templateColumns='1fr' templateRows='auto auto 64px' >
      <GridItem colSpan={1} rowSpan={2} >
        <Topo />
      </GridItem>
      <GridItem colSpan={4} rowSpan={2}
       bgImage="url('/Egipt.png')" 
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