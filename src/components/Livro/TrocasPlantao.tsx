import { Badge, Box, Flex, Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react"
import moment from "moment"
import { useEffect, useState } from "react"
import TituloBadge from "../Layout/TituloBadge"
// import Troca from "./Troca"

interface TrocasPlantaoProps {
    id: string
    data: any
    equipe: string
}

const TrocasPlantao = (props: TrocasPlantaoProps) => {

    const [dadosPlantoes, setDadosPlantoes] = useState([])


    useEffect(() => {
        async function getDataPlantao() {
            // if (props.equipe) {
            //     onSnapshot(query(collection(db, 'trocasServico'),
            //         where('data', '==', props.data),
            //         where('equipe', '==', (props.equipe).substring(0, (props.equipe).length - 1))), snapshot => {
            //             setDadosPlantoes(snapshot.docs.map(doc => ({
            //                 ...doc.data(),
            //                 id: doc.id
            //             })));
            //         })
            // }

        }
        getDataPlantao()

    }, [props.data, props.equipe])


    return (
        <>
            <Box borderRadius="lg" my="2"  border="1px" borderColor="gray" p="2">
                <Box w={'100%'}>
                    <TituloBadge titulo="Trocas de Serviço" />
                </Box>

                <Box>
                    {
                        dadosPlantoes.length > 0 ? (
                            <Table size='sm'>
                                <Thead>
                                    <Tr>
                                        <Th>Data</Th>
                                        <Th>Plantão</Th>
                                        <Th>Substituto</Th>
                                        <Th>Equipe</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {/* {
                                        dadosPlantoes && dadosPlantoes.map(item => (
                                            <Troca key={item.id} dados={item} />
                                        ))
                                    } */}
                                </Tbody>
                            </Table>
                        ) : 'Nenhuma troca de serviço...'
                    }

                </Box>
            </Box>
        </>
    )
}

export default TrocasPlantao
