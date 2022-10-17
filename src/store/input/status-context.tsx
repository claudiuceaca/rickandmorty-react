import { createContext, Dispatch, SetStateAction} from "react";

type StatusContextObj = {
    status: string;
    setStatus: Dispatch<SetStateAction<string>>;
    handleStatus: (value:string) => void
}

const StatusContext = createContext({} as StatusContextObj)

export default StatusContext;