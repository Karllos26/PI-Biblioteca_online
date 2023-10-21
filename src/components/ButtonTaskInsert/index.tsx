import { Button } from "@chakra-ui/react"


interface Props{
    leftIcon?: React.ReactElement
    label: string
    bg: string
    variant:string
    
}

export default function ButtonTaskInsert({leftIcon, label, bg}:Props){
    return(
        <Button size='lg' bg={bg} leftIcon={leftIcon} _hover={{bg: "#ffee00"}}>
            {label}
        </Button>
    )
}