import {
    FormControl,
    FormLabel,
    Select
} from '@chakra-ui/react'

interface FormSelectChefiaProps {
    label: string
    data: any
    chefia: number
    onChange?: (value: any) => void

}
const FormSelectChefia = (props: FormSelectChefiaProps) => {
    
    console.log(props.chefia);
    
    return (
        <div>
            <FormControl mb="3">
                <FormLabel>{props.label}</FormLabel>
                <Select placeholder='Selecione...'
                    onChange={props.onChange}
                >
                    <>
                        {
                           
                               

                                props.data && props.data
                                .filter(chef => chef.funcao === props.chefia)
                                    .map(item => (
                                        <option key={item.id} value={item.nome}>{item.nome}</option>
                                    ))
                            

                        }

                    </>

                </Select>
            </FormControl>
        </div>
    )
}

export default FormSelectChefia
