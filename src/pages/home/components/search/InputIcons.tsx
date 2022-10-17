import React, { Dispatch, SetStateAction } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  CloseIconContainer,
  DeleteIconContainer,
  SearchIconContainer,
} from "./Search.style";

type InputIconsProps = {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  options: boolean;
  setOptions: Dispatch<SetStateAction<boolean>>;
};

const InputIcons = ({
  input,
  setInput,
  options,
  setOptions,
}: InputIconsProps) => {
  return (
    <>
      <SearchIconContainer>
        <SearchIcon />
      </SearchIconContainer>
      {input.length === 0 ? null : (
        <DeleteIconContainer onClick={() => setInput("")}>
          <DeleteIcon />
        </DeleteIconContainer>
      )}
      {options && (
        <CloseIconContainer onClick={() => setOptions(false)}>
          <CloseIcon />
        </CloseIconContainer>
      )}
    </>
  );
};

export default InputIcons;
