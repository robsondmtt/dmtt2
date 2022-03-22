import { GetServerSideProps } from "next";
import { Box, Container, Flex, Heading, Spacer } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"
import { Avatar, Image, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"

import { FaGoogle } from 'react-icons/fa';

import Link from "next/link";
import { parseCookies } from 'nookies'
import { getAPIClient } from "../../services/axios";
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Cookies from 'js-cookie';



const Navbar =  () => {

    const { signOut } = useContext(AuthContext)
    
    const {user} = useContext(AuthContext)
    

    return (
        <Box w="full" p={4}   bgGradient='linear(to-b,  orange.300, white)'>
            <Container maxW='container.lg'  >

                <Flex>
                    <Box>
                        <Link href={"/"} passHref>
                            <Image src={'/logo-24.png'} alt="DMTT" w="20" />
                        {/* <Heading size='lg' color={'gray'}>IPB</Heading> */}
                        </Link>
                    </Box>
                    <Spacer />
                    <Box>
                        {
                            user === null ?
                                <Button bg='white' 
                                // onClick={login} 
                                leftIcon={<FaGoogle />}>Entrar</Button>
                                :
                                <>

                                    <Menu>
                                        <MenuButton >
                                            <Avatar
                                                size="md"
                                                border="" borderColor="#fff"
                                                name={user.name}
                                                src={user.avatar} 
                                                />
                                        </MenuButton>
                                        <MenuList>
                                            <MenuItem 
                                            onClick={signOut}
                                            >
                                                Sair
                                            </MenuItem>
                                        </MenuList>
                                    </Menu>
                                </>

                        }
                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}

export default Navbar


