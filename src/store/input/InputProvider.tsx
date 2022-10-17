import { useState, ChangeEvent } from "react";

import InputContext from "./input-context";

const InputProvider = (props: { children: React.ReactNode }) => {
  const [input, setInput] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const inputContext = {
    input: input,
    setInput: setInput,
    handleInputChange: handleInputChange,
  };

  return (
    <InputContext.Provider value={inputContext}>
      {props.children}
    </InputContext.Provider>
  );
};

export default InputProvider;
