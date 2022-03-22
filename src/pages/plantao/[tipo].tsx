import { Button, Center, Flex, SimpleGrid, FormControl, FormLabel, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Table, Tbody, Td, Th, Thead, Tr, useDisclosure, useToast, Alert, AlertIcon } from "@chakra-ui/react"
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons"
import moment from "moment"
import { GetServerSideProps } from "next"
import Link from "next/link"
import { useRouter } from 'next/router'
import { parseCookies } from "nookies"
import { useState } from "react"
import FormInput from "../../components/Forms/FormInput"
import FormSelectChefia from "../../components/Forms/FormSelect"
import LayoutContent from "../../components/Layout/LayoutContent"
import LayoutModal from "../../components/Layout/LayoutModal"
import { api } from "../../services/api"
import { getAPIClient } from '../../services/axios';
import Navbar from '../../components/Nav/Navbar'


const ListaPlantoes = ({ operadores, plantoes, chefia, equipes }) => {
    const router = useRouter()
    const { tipo } = router.query

    // console.log(plantoes);


    const toast = useToast()

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [limitPage, setLimitPage] = useState(plantoes.limit)
    const [page, setPage] = useState(plantoes.page)
    const [totalDocs, setTotalDocs] = useState(plantoes.totalDocs)

    const [mes, setMes] = useState(+moment().month() + 1)
    const [ano, setAno] = useState(+moment().year())

    const [listaPlantoes, setListaPlantoes] = useState(plantoes)
    const [listaChefia, setListaChefia] = useState(chefia)
    const [listaEquipes, setListaEquipes] = useState(equipes)
    const [listaOperadores, setListaOperadores] = useState(operadores)

    const [coordenador, setCoordenador] = useState('')
    const [inspTransito, setInspTransito] = useState('')
    const [inspTransporte, setInspTransporte] = useState('')
    const [inspRotran, setInspRotran] = useState('')
    const [inspCarajas, setInspCarajas] = useState('')
    const [operador, setOperador] = useState('')
    const [equipe, setEquipe] = useState('')
    const [data, setData] = useState('')
    const [erro, setErro] = useState(null)



    async function abrePlantao() {
        if (data === '' || equipe === '') {
            setErro('Campos data e equipe são obrigatórios')
            setTimeout(() => {
                setErro(null)
            }, 3000);

            return
        }



        let hora = ''
        if (equipe === 'Alfa1' || equipe === 'Alfa2' || equipe === 'Alfa3') {
            hora = ' 19:00:00'
        } else if (equipe === 'Rotran1' || equipe === 'Rotran2' || equipe === 'Rotran3') {
            hora = '13:00:00'
        } else {
            hora = '07:00:00'
        }


        const dadosModal = {
            coordenador,
            date: new Date(data + ' ' + hora),
            equipe,
            inspRotran,
            inspTransito,
            inspTransporte,
            inspCarajas,
            operador,
        }



        const salvarDados = await api.post(`api/plantoes`, dadosModal)
            .then(res => {
                onClose()
                toast({
                    title: 'Success!!!',
                    description: res.data.message,
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                })


                router.push(`/plantao/livrotransito/${res.data.plantao._id}`)

            }).catch(e => {
                onClose()
                toast({
                    title: 'Error!!!',
                    description: `Erro ao inserir o plantão!`,
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                })
            })




    }

    async function pageBefore() {
        console.log(listaPlantoes.page);
        
        if (page > 1) {
            setPage(page-1)
            const buscaPlantoes = await api.get(`api/plantoes?page=${page}`)
            const busca = buscaPlantoes.data.plantoes
            setListaPlantoes(busca);
            console.log(listaPlantoes);

        }else{
            console.log('primeira pagina');
            
        }
    }
    async function pageAfter() {
        console.log(listaPlantoes.totalDocs);
        if (page === totalDocs) {
            setPage(page+1)
            const buscaPlantoes = await api.get(`api/plantoes?page=${page}`)
            const busca = buscaPlantoes.data.plantoes
            setListaPlantoes(busca);
            console.log(listaPlantoes);
            
        }else{
            console.log('ultima pagina');
            
        }
    }
//   console.log(listaOperadores);
  

    return (
        <>
            <Navbar />
            <LayoutContent>
                <Center>
                    <Heading mb="4">Lista de Plantões</Heading>
                </Center>
                <Flex justifyContent="end" >

                    <Button size="sm" colorScheme="orange" onClick={onOpen}>Novo Plantão</Button>
                </Flex>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>Data</Th>
                            <Th>Plantão</Th>
                            <Th>Inspetor</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            listaPlantoes && listaPlantoes.length === 0 &&
                            <Tr>
                                <Td>Nenhum Plantao cadastrado...</Td><Td></Td>
                                <Td></Td>
                                <Td></Td>
                            </Tr>
                        }
                        {
                            listaPlantoes && listaPlantoes.docs.map(item => (

                                <Tr key={item._id}>
                                    <Td>
                                        {moment(item.date).format('DD/MM')}
                                    </Td>
                                    <Td>
                                        <Link href={`/plantao/livro${tipo}/${item._id.toString()}`}>
                                            <a>
                                                {item.equipe.nome.toUpperCase()}
                                            </a>
                                        </Link>
                                    </Td>
                                    <Td>
                                        {tipo === 'transito' && item.inspTransito.name}
                                        {tipo === 'transporte' && item.inspTransporte.name}
                                    </Td>
                                </Tr>

                            ))
                        }
                    </Tbody>
                </Table>
                <Flex mt="4" justify="space-between">
                    <Button onClick={() => pageBefore()}>
                        <ArrowLeftIcon />
                    </Button>
                    <Button onClick={pageAfter}>
                        <ArrowRightIcon />
                    </Button>
                </Flex>
            </LayoutContent>

            <LayoutModal
                header="teste"
                isOpen={isOpen} onClose={onClose} onClick={abrePlantao}>
                {
                    erro && <Alert status='error'>
                        <AlertIcon />
                        {erro}
                    </Alert>
                }
                <SimpleGrid mb={3} columns={[1, 2]} spacing='20px'>

                    <FormInput
                        type="date"
                        label="Data"
                        required
                        onChange={
                            e => {
                                setData(e.target.value)
                                setMes(moment(e.target.value).month() + 1)
                                setAno(moment(e.target.value).year())
                            }} />

                    <FormControl>
                        <FormLabel htmlFor='equipe'>Equipe</FormLabel>
                        <Select placeholder='Selecione...'
                            required
                            onChange={e => setEquipe(e.target.value)}
                        >
                            {
                                listaEquipes && listaEquipes
                                    .map(item => (
                                        <option key={item._id} value={item._id}>{item.nome}</option>
                                    ))
                            }
                        </Select>
                    </FormControl>

                    <FormControl>
                        <FormLabel htmlFor='equipe'>Operador</FormLabel>
                        <Select placeholder='Selecione...'
                            onChange={e => setOperador(e.target.value)}
                        >
                            {
                                listaOperadores && listaOperadores
                                    .map(item => (
                                        <option key={item._id} value={item.nome._id}>{item.nome.name}</option>
                                    ))
                            }
                        </Select>
                    </FormControl>

                    <FormControl>
                        <FormLabel htmlFor='equipe'>Insp.Transito</FormLabel>
                        <Select placeholder='Selecione...'
                            onChange={e => setInspTransito(e.target.value)}
                        >
                            {
                                listaChefia && listaChefia
                                    .filter(chef => chef.funcao === 1)
                                    .map(item => (
                                        <option key={item._id} value={item.nome._id}>{item.nome.name}</option>
                                    ))
                            }
                        </Select>
                    </FormControl>

                    <FormControl>
                        <FormLabel htmlFor='equipe'>Insp.Transporte</FormLabel>
                        <Select placeholder='Selecione...'
                            onChange={e => setInspTransporte(e.target.value)}
                        >
                            {
                                listaChefia && listaChefia
                                    .filter(chef => chef.funcao === 2)
                                    .map(item => (
                                        <option key={item.id} value={item.nome._id}>{item.nome.name}</option>
                                    ))
                            }
                        </Select>
                    </FormControl>

                    <FormControl>
                        <FormLabel htmlFor='equipe'>Insp.Carajas</FormLabel>
                        <Select placeholder='Selecione...'
                            onChange={e => setInspCarajas(e.target.value)}
                        >
                            {
                                listaChefia && listaChefia
                                    .filter(chef => chef.funcao === 10)
                                    .map(item => (
                                        <option key={item.id} value={item.nome._id}>{item.nome.name}</option>
                                    ))
                            }
                        </Select>
                    </FormControl>

                    <FormControl>
                        <FormLabel htmlFor='equipe'>Insp.Rotran</FormLabel>
                        <Select placeholder='Selecione...'
                            onChange={e => setInspRotran(e.target.value)}
                        >
                            {
                                listaChefia && listaChefia
                                    .filter(chef => chef.funcao === 11)
                                    .map(item => (
                                        <option key={item.id} value={item.nome._id}>{item.nome.name}</option>
                                    ))
                            }
                        </Select>
                    </FormControl>

                    <FormControl>
                        <FormLabel htmlFor='equipe'>Coordenador</FormLabel>
                        <Select placeholder='Selecione...'
                            onChange={e => setCoordenador(e.target.value)}
                        >
                            {
                                listaChefia && listaChefia
                                    .filter(chef => chef.funcao === 3)
                                    .map(item => (
                                        <option key={item.id} value={item.nome._id}>{item.nome.name}</option>
                                    ))
                            }
                        </Select>
                    </FormControl>



                </SimpleGrid>
            </LayoutModal>


        </>
    )
}


export default ListaPlantoes


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const apiClient = getAPIClient(ctx);
    const { ['admin-auth']: token } = parseCookies(ctx)


    if (!token) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    const buscaOperadores = await apiClient.get(`api/operadores`)
    const operadores = buscaOperadores.data.operador

    const buscaPlantoes = await apiClient.get(`api/plantoes`)
    const plantoes = buscaPlantoes.data.plantoes

    const buscaChefia = await apiClient.get(`api/chefia`)
    const chefia = buscaChefia.data.chefia

    const buscaEquipes = await apiClient.get(`api/equipe`)
    const equipes = buscaEquipes.data.equipe


    return {
        props: {
            operadores,
            plantoes,
            chefia,
            equipes
        }
    }
}


