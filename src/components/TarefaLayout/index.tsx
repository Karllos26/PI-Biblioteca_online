import { Box, Center, Checkbox, Divider, Flex, Grid, GridItem, Heading, Stack } from "@chakra-ui/react";
import Layout from "../Layout";
import InputTask from "../InputTask";
import ItemTask from "../ItemTask";
import ButtonTaskInsert from "../ButtonTaskInsert";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri"


export default function TarefaLayout() {
    return (
        <Box>
            <Stack spacing={3} alignItems="center">
                <Heading fontSize={"2xl"}>Lista de Tarefas</Heading>
            </Stack>
            <Center>
                <Divider width="50%" fontWeight="extrabold" mb="20px" />
            </Center>

            <Center>
                <InputTask margem="30px" />
            </Center>
            <Center>
                <Divider width="50%" fontWeight="200" mb="20px" />
            </Center>
            <Center>
            <Flex flexDirection="column">
                <ItemTask tarefa="Tarefa 1"/>
                <ItemTask tarefa="Tarefa 2"/>
                <ItemTask tarefa="Tarefa 3"/>
            </Flex>
            </Center>
        </Box>
    )
}