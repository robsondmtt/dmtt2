import {
    FormControl,
    FormLabel,
    Select
} from '@chakra-ui/react'

interface FormSelectProps {
    label: string
    data: any
    chefia?: number
    onChange?: (value: any) => void

}
const FormSelect = (props: FormSelectProps) => {
    
    
    return (
        <div>
            <FormControl mb="3">
                <FormLabel>{props.label}</FormLabel>
                <Select placeholder='Selecione...'
                    onChange={props.onChange}
                >
                    <>
                        {
                            !props.data === null && (
                                props.chefia ? (
                                    props.data.filter(chef => chef.funcao === props.chefia)
                                        .map((i) => (
                                            <option key={i.id} value={i.nome}>{i.nome}a</option>
                                        ))
                                ) : (
                                    
                                    props.data && props.data.map((i,k) => (
                                        <option key={i.id} value={i.nome}>{i.nome}a</option>
                                    ))
                                )
                            )

                        }

                    </>

                </Select>
            </FormControl>
        </div>
    )
}

export default FormSelect
