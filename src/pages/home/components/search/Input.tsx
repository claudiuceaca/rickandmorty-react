import { useState, useEffect, useContext } from "react";
import { fetchData } from "../../../../hooks/use-http";
import useDebounce from "../../../../hooks/useDebounce";
import InputContext from "../../../../store/input/input-context";
import InputOptionContext from "../../../../store/input/input-option-context";
import PageContext from "../../../../store/page/page-context";
import { Banner } from "../card/Card.style";
import InputIcons from "./InputIcons";
import {
  InputContainer,
  InputSearch,
  ObtionContainer,
  ObtionObject,
  OptionName,
} from "./Search.style";

interface IData {
  id: number;
  name: string;
  image: string;
  status: string;
}

const Input = () => {
  const inputCtx = useContext(InputContext);
  const inputOptionsCtx = useContext(InputOptionContext);
  const pageCtx = useContext(PageContext);
  const [data, setData] = useState<IData[]>();

  const debounceInput = useDebounce(inputCtx.input, 300);

  useEffect(() => {
    fetchData(
      `https://rickandmortyapi.com/api/character/?name=${debounceInput}`
    ).then((data) => setData(data.results));
  }, [debounceInput]);

  return (
    <InputContainer onChange={() => pageCtx.setPage(1)}>
      <InputIcons
        input={inputCtx.input}
        setInput={inputCtx.setInput}
        options={inputOptionsCtx.options}
        setOptions={inputOptionsCtx.setOptions}
      />
      <InputSearch
        placeholder="Search..."
        onChange={inputCtx.handleInputChange}
        value={inputCtx.input}
        onClick={() => {
          inputOptionsCtx.setOptions(true);
        }}
      />
      {inputOptionsCtx.options && (
        <ObtionContainer>
          {data
            ? data
                ?.filter((result) =>
                  result.name
                    .toLowerCase()
                    .includes(debounceInput.toLowerCase())
                )
                .map((data) => {
                  return (
                    <ObtionObject key={data.id}>
                      <OptionName
                        onClick={() => {
                          inputCtx.setInput(data.name);
                          inputOptionsCtx.setOptions(false);
                        }}
                      >
                        {data.name}
                        <Banner top={"1px"} status={data.status}>
                          {data.status}
                        </Banner>
                      </OptionName>
                    </ObtionObject>
                  );
                })
            : null}
        </ObtionContainer>
      )}
    </InputContainer>
  );
};

export default Input;
