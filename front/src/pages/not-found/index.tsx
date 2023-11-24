
import { GridItem,Text, Divider, } from "@chakra-ui/react";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";

export default function NotFound(){
    return(
<Layout>
<GridItem alignItems={"center"}>
            <Text fontSize={"3xl"}>Pagina não encontrada</Text>
            <Text fontSize={"xl"}>A URL digitada nao foi encontrada</Text>
         <Divider/>
            <Link to='/'>Voltar para a home</Link>
        </GridItem>
</Layout>
    )
}