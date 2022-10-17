import { createContext, Dispatch, SetStateAction } from "react";

type PageContextObj = {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};

const PageContext = createContext({} as PageContextObj);

export default PageContext;
