import { Box, Center, Flex, Spacer, Text } from "@chakra-ui/react"
import moment from "moment"
import { useEffect, useState } from "react"
import { useFetch } from "../../contexts/useFetch";
import { api } from "../../services/api";
import { getAPIClient } from "../../services/axios";

interface HeaderProps {
    dados: any;
}

const Header = (props: HeaderProps) => {



    return (
        <>
            <Center>
                <Text>{moment(props.dados && props.dados.plantoes.date).format('DD/MM/YYYY')}</Text>
            </Center>
            <Box borderRadius="lg" border="1px" borderColor="gray" p="2">
                <Flex>

                    <Flex>
                        <Text mr="2"><strong>Inspetor:</strong></Text>
                        <Text>
                            {props.dados.plantoes.inspTransito && props.dados.plantoes.inspTransito.name}
                        </Text>
                    </Flex>
                    <Spacer />
                    <Flex>
                        <Text mr="2"><strong> Coordenador:</strong></Text>
                        <Text>
                            {props.dados.plantoes.coordenador && props.dados.plantoes.coordenador.name}
                        </Text>
                    </Flex>
                </Flex>
                <Flex>
                    <Flex>
                        <Text mr="2"><strong>Equipe:</strong></Text>
                        <Text>
                            {props.dados.plantoes.equipe && props.dados.plantoes.equipe.nome}
                        </Text>
                    </Flex>
                    <Spacer />
                    <Box>
                        <Text mr="2"><strong> Operador:</strong></Text>
                        <Text>
                            {props.dados.plantoes.operador && props.dados.plantoes.operador.name}
                        </Text>
                    </Box>
                </Flex>
            </Box>

        </>
    )
}

export default Header

