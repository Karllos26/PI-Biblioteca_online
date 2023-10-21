import { Center, Checkbox, Grid, GridItem, Input, Text } from "@chakra-ui/react"
import ButtonTaskInsert from "../ButtonTaskInsert"
import { MdOutlineAddCircleOutline } from "react-icons/md"


interface Props {
    margem: string
}

export default function InputTask({ margem }: Props) {
    return (
        <Center mb={margem}>
            <Grid templateColumns='repeat(6, 1fr)' gap={6} height="56px">
                <GridItem w='100%' h='10' bg='#bcd2ee' colSpan={4} height="100%">
                    <Input placeholder='Digite o título da task' size='md' color="black" height="100%"  />
                </GridItem>
                <GridItem colSpan={1}>
                    <Center>
                        <Checkbox size='md' colorScheme='green' h="40px" >
                            <Text fontSize={"xl"}>
                                Realizada?
                            </Text>
                        </Checkbox>
                    </Center>
                </GridItem>
                <GridItem colSpan={1}>
                    <ButtonTaskInsert  label="Inserir" leftIcon={<MdOutlineAddCircleOutline />} bg="#32CD32" variant='solid' />
                </GridItem>
            </Grid>
        </Center>
        
    )
}