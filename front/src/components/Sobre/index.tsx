import { Stack, useColorModeValue, Text, Box, Avatar } from "@chakra-ui/react";

export default function SobreLayout(){
    return(
        <>
        <Stack
      bg={useColorModeValue('gray.50', 'gray.800')}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
             <Box textAlign={'center'}>
        <Avatar src={'https://avatars.githubusercontent.com/u/105250817?v=4'} mb={2} />
        <Text fontSize={"xl"}>Desenvolvido Por:</Text>
        <Text fontSize={"lg"} color={"red.500"}>
          Karllos Eduardo
        </Text>
      </Box>
      <Text fontSize={"x-large"} textAlign={'center'} maxW={'3xl'}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
      Blanditiis similique aliquam maxime doloremque quos voluptatum harum asperiores quia, 
      officia quas illo voluptatem recusandae ab accusamus totam molestiae pariatur eveniet. 
      Iure.
      </Text>
 
    </Stack>
    </>
    )
}