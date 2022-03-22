import {  Box, Button, Flex, FormControl, FormLabel, Icon, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Table, Tbody, Th, Thead, Tr, useDisclosure, useToast } from "@chakra-ui/react"
import { FaEdit } from 'react-icons/fa'

import { useEffect, useState } from "react"
import TituloBadge from "../Layout/TituloBadge"
// import Vtr from "./Vtr"

interface ViaturasPlantaoProps {
    id: string
    update: boolean
}

const ViaturasPlantao = (props: ViaturasPlantaoProps) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [viaturas, setViaturas] = useState(null)
    const [listaVtrs, setListaVtrs] = useState(null)

    const [prefixoVtr, setPrefixoVtr] = useState('')
    const [agentes, setAgentes] = useState('')
    const [zona, setZona] = useState('')

    const toast = useToast()

    useEffect(() => {
        async function getDataPlantao() {
            // onSnapshot(query(collection(db, `plantoes/${props.id}/viaturas`), 
            // orderBy('vtr','asc')), vtr => {
            //     setViaturas(vtr.docs.map(item => ({ ...item.data(), id: item.id })))
            // })

            // getDocs(query(collection(db, "viaturas"), 
            // where("situacao", "==", 'ativo'), 
            // orderBy('vtr','asc'))).then(res => {
            //     setListaVtrs(res.docs.map(v => v.data()))
            // })

        }
        getDataPlantao()

    }, [props.id])
   
    async function addVtr(e) {
        e.preventDefault()
        
        // const ref = doc(db, `plantoes/${props.id}`, 'viaturas', prefixoVtr)

        // setDoc(ref, { agentes, zona, vtr: prefixoVtr }, { merge: true })
        // .then(() => {
        //     toast({
        //         title: 'Success!!!',
        //         description: "Vtr Adicionada/atualizada",
        //         status: 'success',
        //         duration: 3000,
        //         isClosable: true,
        //     })
            
        // })
        // onClose()

    }

    return (
        <>
            <Box borderRadius="lg" my="2"  border="1px" borderColor="gray" p="2">
                <Flex justifyContent="space-between">
                    <TituloBadge titulo="Viaturas" />
                    {
                        props.update && <Icon as={FaEdit} onClick={onOpen} width="5" height="5" cursor="pointer" color="gray.800" />
                    }
                    
                </Flex>

                <Box>
                    <Table size='sm'>
                        <Thead>
                            <Tr>
                                <Th>VTR</Th>
                                <Th>Agentes</Th>
                                <Th>Zona</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {/* {viaturas && viaturas.map(vtr => (
                                <Vtr key={vtr.id} dados={vtr} />
                            ))} */}
                        </Tbody>
                    </Table>
                </Box>
            </Box>

            <Modal isOpen={isOpen} size="xl" onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Adicionar Viatura</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel htmlFor='viatura'>Viatura</FormLabel>
                            <Select placeholder='Selecione...'
                                onChange={e => setPrefixoVtr(e.target.value)} >
                                    {
                                        listaVtrs && listaVtrs.map(item => (
                                            <option key={item.vtr} value={item.vtr}>{item.vtr}</option>

                                        ))
                                    }
                            </Select>
                        </FormControl>
                        <FormControl my="4">
                            <FormLabel htmlFor='agentes'>Agentes</FormLabel>
                            <Input
                                id='agentes'
                                type='text'
                                onChange={(e) => setAgentes(e.target.value)} />
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor='zona'>Zona</FormLabel>
                            <Input
                                id='zona'
                                type='text'
                                onChange={(e) => setZona(e.target.value)} />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button mr={3} onClick={onClose}>
                            Cancelar
                        </Button>
                        <Button colorScheme='orange' onClick={addVtr}>Salvar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ViaturasPlantao
