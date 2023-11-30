import {
    FormControl,
    FormLabel, 
    Input, Container, Flex
  } from '@chakra-ui/react'

function Contato() {
    return(
        <div>
            <Container>
                <Flex direction='column'>
                    <FormControl>
                        <FormLabel mt="5">Nome: </FormLabel>
                        <Input type='text' placeholder="Digite seu nome"/>
                    </FormControl>
                    <FormControl>
                        <FormLabel mt="5">Email address</FormLabel>
                        <Input type='email' placeholder="Digite seu email"/>
                    </FormControl>
                    <FormControl>
                        <FormLabel mt="5">Telefone com DDD</FormLabel>
                        <Input type='number' placeholder="Telefone ou Whatsapp"/>
                    </FormControl>
                </Flex>
                <Flex>

                </Flex>
            </Container>
        </div>
    )
}

export default Contato