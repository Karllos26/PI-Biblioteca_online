import { Card, CardBody, Center, Grid, GridItem, Text } from "@chakra-ui/react";
import {MdPendingActions } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri"
import ButtonTaskInsert from "../ButtonTaskInsert";

interface Props {
    tarefa: string
}
export default function ItemTask({ tarefa }: Props) {

    return (
        <Center mb="3">
            <Card>
                
                    <CardBody>
                        <Grid templateColumns='repeat(5, 1fr)' gap={6} >

                            <GridItem w='100%' h='10' colSpan={3}>
                                <Text color="blackAlpha.800" fontWeight="extrabold" justifyContent="center" textAlign="start" fontSize='20px'>{tarefa}</Text>
                            </GridItem>

                            <GridItem colSpan={1}>
                                <ButtonTaskInsert label="Pendente" leftIcon={<MdPendingActions />} bg='orange' variant='solid' />
                            </GridItem>

                            <GridItem colSpan={1}>
                                <ButtonTaskInsert label="Excluir" leftIcon={<RiDeleteBin5Fill />} bg='red' variant='solid' />
                            </GridItem>
                        </Grid>
                    </CardBody>
                
            </Card>
        </Center>
    )
}