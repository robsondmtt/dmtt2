import { Badge, Box, Flex, Text } from "@chakra-ui/react"
import moment from "moment"
import { useEffect, useState } from "react"
import { useFetch } from "../../contexts/useFetch"
import { api } from "../../services/api"
import TituloBadge from "../Layout/TituloBadge"

interface AgentesEquipeProps {
    dados: any
}

const AgentesEquipe = (props: AgentesEquipeProps) => {

   
    const info = {
        mes: moment(props.dados.plantoes.date).month() + 1,
        ano: moment(props.dados.plantoes.date).year(),
        equipe: props.dados.plantoes.equipe._id
    }
    const {data} = useFetch(`api/agentesEquipe/${info.mes}/${info.ano}/${info.equipe}`)
    
    
    if (!data) {
       return <p>Carregando...</p>
    }
    
    
    return (
        <>
            <Box borderRadius="lg" my="2"  border="1px" borderColor="gray" p="2">
                <Box w={'100%'}>
                    <TituloBadge titulo="Agentes" />
                </Box>

                <Flex w="100%">
                    {
                        data && data.agentesEquipe.map(item => (
                            item.agentes.map((i,k) => (
                                <Text mr="2" key={k}>
                                    {k+1} - {i}
                                </Text>
                            ))
                        ))
                    }
                   
                </Flex>
            </Box>
        </>
    )
}

export default AgentesEquipe
