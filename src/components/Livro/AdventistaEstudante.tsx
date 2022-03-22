import { Badge, Box, Button, Flex, FormControl, FormLabel, Icon, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Table, Tbody, Td, Tr, useDisclosure } from "@chakra-ui/react"
import moment from "moment"
import { useEffect, useState } from "react"
import { FaEdit } from "react-icons/fa"
import TituloBadge from "../Layout/TituloBadge"

interface AdventistaEstudanteProps {
    id: string
    data: any
    equipe: string
    update?: boolean
}

const AdventistaEstudante = (props: AdventistaEstudanteProps) => {

    const [dados, setDados] = useState([])
    const [agente, setAgente] = useState(null)
    const { isOpen, onOpen, onClose } = useDisclosure()


    useEffect(() => {
        async function getDataPlantao() {

        }
        getDataPlantao()

    }, [props.id])

    

    return (
        <>
            <Box borderRadius="lg" my="2" border="1px" borderColor="gray" p="2">
                <Flex justifyContent="space-between">
                    <TituloBadge titulo="Adventista/Estudante" />
                    {
                        <Icon as={FaEdit} onClick={onOpen} width="5" height="5" cursor="pointer" color="gray.800" />
                    }
                </Flex>
                <Box>
                    <Table size='sm'>
                        <Tbody>
                            {
                                // dados && dados.map(item => (
                                //     <Tr key={item.id}>
                                //         <Td>{item.agente}</Td>
                                //         <Td>{item.status}</Td>
                                //         <Td>botao</Td>
                                //     </Tr>

                                // ))
                            }
                        </Tbody>
                    </Table>
                </Box>
            </Box>



            <Modal isOpen={isOpen} size="xl" onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Observações Adventista/Estudante</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>

                        <FormControl>
                            <FormLabel mt="2" htmlFor='viatura'>Agente</FormLabel>
                            <Select placeholder='Selecione...'>
                                   
                            </Select>
                        </FormControl>
                        
                        <Flex>
                            <FormControl mr="1">
                                <FormLabel mt="2" htmlFor='zona'>Hora Entrada</FormLabel>
                                <Input
                                    id='zona'
                                    type='time'
                                />
                            </FormControl>
                            <FormControl ml="1">
                                <FormLabel mt="2" htmlFor='zona'>Hora Saída</FormLabel>
                                <Input
                                    id='zona'
                                    type='time'
                                />
                            </FormControl>
                        </Flex>

                        <FormControl>
                            <FormLabel mt="2" htmlFor='viatura'>Categoria</FormLabel>
                            <Select placeholder='Selecione...'>
                                <option >dggd</option>
                            </Select>
                        </FormControl>

                        <FormControl>
                            <FormLabel mt="2" htmlFor='viatura'>Compondo/ausência</FormLabel>
                            <Select placeholder='Selecione...'>
                                <option >dggd</option>
                            </Select>
                        </FormControl>

                        <FormControl>
                            <FormLabel mt="2" htmlFor='viatura'>Equipe</FormLabel>
                            <Select placeholder='Selecione...'>
                                <option >dggd</option>
                            </Select>
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button mr={3} onClick={onClose}>
                            Cancelar
                        </Button>
                        <Button colorScheme='orange' >Salvar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default AdventistaEstudante
