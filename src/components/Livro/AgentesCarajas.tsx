import { Badge, Box, Flex, Text } from "@chakra-ui/react"
import moment from "moment"
import { useEffect, useState } from "react"
import TituloBadge from "../Layout/TituloBadge"

interface AgentesCarajasProps {
    id: string
}

const AgentesCarajas = (props: AgentesCarajasProps) => {

    const [dados, setDados] = useState([])

    useEffect(() => {
        async function getDataPlantao() {

        }
        getDataPlantao()

    }, [])

    return (
        <>
            <Box borderRadius="lg" my="2"  border="1px" borderColor="gray" p="2">
                <Box w={'100%'}>
                    <TituloBadge titulo="Carajás" />
                </Box>

                <Box>
                    {
                        dados.map(item => (
                            item.agentes.map((i, k) => (
                                <Box key={k} >
                                    <Flex mr="2">
                                        <Text>{k + 1} - {i}</Text>
                                        <Text ml="5">X</Text>
                                    </Flex>
                                </Box>
                            ))
                        ))
                    }

                </Box>
            </Box>
        </>
    )
}

export default AgentesCarajas
