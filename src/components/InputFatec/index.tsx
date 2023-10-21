
import { HTMLInputTypeAttribute } from 'react'
import styles from './InputFatec.module.css'


interface Props{
    type: HTMLInputTypeAttribute | undefined
    value: string
placeholder: string | undefined
}

export default function InputFatec({type, value,placeholder }: Props){
    return(
        <div>
        <input className={styles.inputFatec} type={type} defaultValue={value} placeholder={placeholder}/>
        </div>
    )
}