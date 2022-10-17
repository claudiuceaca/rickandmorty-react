import {createContext,Dispatch, SetStateAction} from "react"

type InputOptionContextObj = {
    options: boolean;
    setOptions: Dispatch<SetStateAction<boolean>>;
}

const InputOptionContext = createContext({} as InputOptionContextObj)

export default InputOptionContext