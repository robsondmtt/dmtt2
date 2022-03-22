import {
    FormControl,
    FormLabel,
    Select
} from '@chakra-ui/react'
import moment from 'moment'

interface FormSelectDataProps {
    label: string
    // value?: number
    mes: boolean
    ano: boolean
    className?: any 
    onChange?: (value: any) => void

}
const FormSelectData = (props: FormSelectDataProps) => {

    const meses = [1,2,3,4,5,6,7,8,9,10,11,12]
    return (
        <div>
            <FormControl mb="3" >
                <FormLabel>{props.label}</FormLabel>
                <Select placeholder='Selecione...'
                    className={props.className}
                    // value={props.value}
                    onChange={props.onChange}
                >
                    <>
                    {   
                        props.mes && (
                            meses.map((item,k) => ( 
                                <option key={k} value={+k+1}>{moment().month(k).format('MMMM')}</option>
                            ))
                        )
                    }

                    {   
                        props.ano && (
                            <>
                            <option  value={moment().year()}>{moment().year()}</option>
                            <option  value={moment().year()-1}>{moment().year()-1}</option>
                            <option  value={moment().year()}>{moment().year()}</option>
                            <option  value={moment().year()+1}>{moment().year()+1}</option>
                            </>
                        )
                    }
                       

                    </>

                </Select>
            </FormControl>
        </div>
    )
}

export default FormSelectData
