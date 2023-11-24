import { Divider, GridItem, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <GridItem>
            <Text fontSize={"3xl"}>Pagina não encontrada</Text>
            <Text fontSize={"xl"}>A URL digitada nao foi encontrada</Text>
         <Divider/>
            <Link to='/'>Voltar para a home</Link>
        </GridItem>
    )
}