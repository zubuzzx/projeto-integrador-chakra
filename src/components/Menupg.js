import { Link } from "react-router-dom";
import { Link as Reference, Flex, Spacer, Box, Heading } from '@chakra-ui/react'
// import { ExternalLinkIcon } from '@chakra-ui/icons'


function Menupg() {
    return (
        <div>
            <Flex p="4" minWidth='max-content' alignItems='center' gap='4' bg="#001242" color="white">
                <Box p='2'>
                    <Heading size='md'>Clínica das Clínicas</Heading>
                </Box>
                <Spacer />
                
                <Reference><Link to="/">Clínica</Link></Reference>
                <Reference><Link to="/contato">Contato</Link></Reference>
                <Reference><Link to="/agenda">Agenda</Link></Reference>
                <Reference><Link to="/sobre">Login</Link></Reference>
                
            </Flex>
        </div>
    )
}

export default Menupg