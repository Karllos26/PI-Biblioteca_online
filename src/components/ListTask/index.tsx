import {
    Heading,
    Spacer,
    ButtonGroup,
    Button,
    Box,
    Flex
} from "@chakra-ui/react"

export default function ListTask() {
    return (
        <>
            <Flex minWidth='max-content' margin='10px' alignItems='center' gap='2'>
                <Box p='2'>
                    <Heading size='md'>Tarefa</Heading>
                </Box>
                <Spacer />
                <ButtonGroup gap='2'>
                    <Button colorScheme='red'>Pendente</Button>
                    <Button colorScheme='red'>Excluir</Button>
                </ButtonGroup>
            </Flex>
        </>
    )
}