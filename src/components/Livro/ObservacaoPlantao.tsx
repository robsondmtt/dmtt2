import { Box, Button, Flex, Icon,  Textarea,  useToast } from "@chakra-ui/react"
import moment from "moment"
import { useEffect, useRef, useState } from "react"
import { FaEdit } from "react-icons/fa"
import TituloBadge from "../Layout/TituloBadge"

interface ObservacaoPlantaoProps {
    id: string
    tipo: string
    update?: boolean
}

const ObservacaoPlantao = (props: ObservacaoPlantaoProps) => {

    const [observacao, setObservacao] = useState('')
    const [visible, setVisible] = useState(false)

    const textareaRef = useRef(null)
    const toast = useToast()

    const [rows, setRows] = useState(2)


    useEffect(() => {

        async function getDataPlantao() {
           
        }
        getDataPlantao()


    }, [props.id, props.tipo, textareaRef])
   
    async function addOBS(e) {
        e.preventDefault()
        const campo = props.tipo

        const dados = defineTipo(props.tipo, observacao)


        // const ref = doc(db, `plantoes/${props.id}`, 'obs', 'plantao')

        // await setDoc(ref, dados, { merge: true }).then(() => {
        //     toast({
        //         title: 'Success!!!',
        //         description: "Observação Atualizada",
        //         status: 'success',
        //         duration: 3000,
        //         isClosable: true,
        //     })
        //     setVisible(false)
        // })

    }

    function defineTipo(tipo, info) {
        switch (tipo) {
            case 'obsTransito':
                return { 'obsTransito': info }
                break;
            case 'obsTransporte':
                return { 'obsTransporte': info }
                break;
            case 'obsRotram':
                return { 'obsRotram': info }
                break;
            case 'obsCarajas':
                return { 'obsCarajas': info }
                break;
            case 'obsRadio':
                return { 'obsRadio': info }
                break;

            default:
                break;
        }
    }

    function handleKeyDown(e) {
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight}px`;
    }

    const style = {
        overflow: 'hidden',
        height: '100%',
        
    }

    
    return (
        <>
            <Box borderRadius="lg" my="2"  border="1px" borderColor="gray" p="2">
                <Flex justifyContent="space-between">
                    <TituloBadge titulo="Observações" />
                    {
                        props.update && !visible && <Icon as={FaEdit} onClick={() => setVisible(!visible)} width="5" height="5" cursor="pointer" color="gray.800" />
                    }
                </Flex>

                <Box>
                    <Textarea
                        isReadOnly={!visible}
                        ref={textareaRef}
                        rows={rows}
                        style={style}
                        variant="unstyled"
                        color="gray"
                        value={observacao}
                        onKeyDown={handleKeyDown}
                        onChange={e => setObservacao(e.target.value)} />


                </Box>
                <Flex justifyContent="end" mt="1">
                    <Box>
                        {/* {visible && <Button size="xs" align="center" mr="1" onClick={() => setVisible(!visible)} >Cancelar</Button>}
                        {visible && <Button size="xs" align="center" onClick={addOBS} >Salvar</Button>} */}
                    </Box>
                </Flex>
            </Box>



        </>
    )
}

export default ObservacaoPlantao
