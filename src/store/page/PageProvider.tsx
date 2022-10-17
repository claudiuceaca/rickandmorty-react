import { useState } from "react";
import PageContext from "./page-context";

const PageProvider = (props: { children: React.ReactNode }) => {
  const [page, setPage] = useState<number>(1);

  const pageContext = {
    page: page,
    setPage: setPage,
  };

  return (
    <PageContext.Provider value={pageContext}>
      {props.children}
    </PageContext.Provider>
  );
};

export default PageProvider;
