import {useState} from "react"
import InputOptionContext from "./input-option-context";


const InputOptionsProvider = (props: { children: React.ReactNode }) => {
    const [options, setOptions] = useState<boolean>(false)

    const inputOptionsValue = {
        options: options,
        setOptions: setOptions
    }

    return(
        <InputOptionContext.Provider value={inputOptionsValue}>
            {props.children}
        </InputOptionContext.Provider>
    )
}

export default InputOptionsProvider;