import {
    FormControl,
    FormLabel,
    Input
  } from '@chakra-ui/react'

interface FormInputProps {
    label: string
    type: string
    required: boolean | false
    my?: string | 2
    onChange: (value: any) => void
    value?: any
}
const FormInput = (props: FormInputProps) => {
    return (
        <div>
            <FormControl my={props.my}>
                <FormLabel>{props.label}</FormLabel>
                <Input type={props.type}
                    required={props.required}
                    onChange={props.onChange}
                />
            </FormControl>
        </div>
    )
}

export default FormInput
