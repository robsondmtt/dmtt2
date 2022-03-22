import { Badge, Box, Button, Flex, Icon, Textarea, toast, useToast } from "@chakra-ui/react"
import moment from "moment"
import { useEffect, useRef, useState } from "react"
import { FaEdit } from "react-icons/fa"
import TituloBadge from "../Layout/TituloBadge"

interface RelatorioPlantaoProps {
    id: string
    tipo: string
    update?: boolean
}

const RelatorioPlantao = (props: RelatorioPlantaoProps) => {

    const [relatorio, setRelatorio] = useState('')
    
    const [visible, setVisible] = useState(false)

    const textareaRef = useRef(null)
    const toast = useToast()

    const [rows, setRows] = useState(10)

    useEffect(() => {
        async function getDataPlantao() {
            // onSnapshot(doc(db,`plantoes/${props.id}/relatorios/plantao`), rel => {
            //     // setRelatorio(rel.data())
            //     switch (props.tipo) {
            //         case 'relatorioTransito':
            //             setRelatorio(rel.data() ? rel.data().relatorioTransito : '')
            //             break;
            //         case 'relatorioTransporte':
            //             setRelatorio(rel.data() ? rel.data().relatorioTransporte : '')
            //             break;
            //         case 'relatorioRotram':
            //             setRelatorio(rel.data() ? rel.data().relatorioRotram : '')
            //             break;
            //         case 'relatorioCarajas':
            //             setRelatorio(rel.data() ? rel.data().relatorioCarajas : '')
            //             break;
            //         case 'relatorioRadio':
            //             setRelatorio(rel.data() ? rel.data().relatorioRadio : '')
            //             break;

            //         default:
            //             break;
            //     }

            //     if (textareaRef.current.value.indexOf("\n") > -1) {
            //         setRows(textareaRef.current.value.split('\n').length)
            //     } else {
            //         setRows(10)

            //     }
            // })


        }
        getDataPlantao()

    }, [props.id, props.tipo, textareaRef])

    async function addREL(e) {
        e.preventDefault()
        
        const dados = defineTipo(props.tipo, relatorio)


        // const ref = doc(db, `plantoes/${props.id}`, 'relatorios', 'plantao')

        // await setDoc(ref, dados, { merge: true }).then(() => {
        //     toast({
        //         title: 'Success!!!',
        //         description: "Relatório Atualizado",
        //         status: 'success',
        //         duration: 3000,
        //         isClosable: true,
        //     })
        //     setVisible(false)
        // })

    }

    function defineTipo(tipo, info) {
        switch (tipo) {
            case 'relatorioTransito':
                return { 'relatorioTransito': info }
                break;
            case 'relatorioTransporte':
                return { 'relatorioTransporte': info }
                break;
            case 'relatorioRotram':
                return { 'relatorioRotram': info }
                break;
            case 'relatorioCarajas':
                return { 'relatorioCarajas': info }
                break;
            case 'relatorioRadio':
                return { 'relatorioRadio': info }
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
                    <TituloBadge titulo="Relatório" />
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
                        value={relatorio}
                        onKeyDown={handleKeyDown}
                        onChange={e => setRelatorio(e.target.value)} />
                  
                </Box>
                <Flex justifyContent="end" mt="1">
                    <Box>
                        {/* {visible && <Button size="xs" align="center" mr="1" onClick={() => setVisible(!visible)} >Cancelar</Button>}
                        {visible && <Button size="xs" align="center" onClick={addREL} >Salvar</Button>} */}
                    </Box>
                </Flex>
            </Box>
        </>
    )
}

export default RelatorioPlantao
