import {
    FormControl,
    FormLabel,
    Select
} from '@chakra-ui/react'

interface FormSelectArrayProps {
    label: string
    data: any
    chefia?: number
    onChange?: (value: any) => void

}
const FormSelectArray = (props: FormSelectArrayProps) => {
    return (
        <div>
            <FormControl mb="3">
                <FormLabel>{props.label}</FormLabel>
                <Select placeholder='Selecione...'
                    onChange={props.onChange}
                >
                    <>
                        {

                            props.data && props.data.map((i,k) => (
                                <option key={k} value={i}>{i}</option>
                            ))
                        }

                    </>

                </Select>
            </FormControl>
        </div>
    )
}

export default FormSelectArray
