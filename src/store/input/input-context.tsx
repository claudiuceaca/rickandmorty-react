import { ChangeEvent, createContext,Dispatch, SetStateAction } from "react";

type InputContextObj = {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>)=> void;
}

const InputContext = createContext({} as InputContextObj)


export default InputContext;