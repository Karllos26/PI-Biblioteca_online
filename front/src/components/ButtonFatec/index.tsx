import { Button } from '@chakra-ui/react'


interface Props{
    type: 'button' | 'submit' | 'reset'
    label: string
}

function ButtonFatec({type, label}: Props){
    return(
        <Button className='ButtonFatec' size='lg' colorScheme='red' type={type}>{label}
        </Button>
        
    )
}
export default ButtonFatec