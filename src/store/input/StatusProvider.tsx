import React, {useState} from "react"
import StatusContext from "./status-context"


const StatusProvider = (props: { children: React.ReactNode }) => {
    const [status, setStatus] = useState<string>("")

    const handleStatus = (value: string) =>{
        setStatus(value)
    }

    const statusProviderValue =  {
        status: status,
        setStatus: setStatus,
        handleStatus: handleStatus
    }

    return (<StatusContext.Provider value={statusProviderValue}>
        {props.children}
    </StatusContext.Provider>)
}

export default StatusProvider;