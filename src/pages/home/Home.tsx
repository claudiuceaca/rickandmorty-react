import { FC, useEffect, useState, useContext } from "react";
import { fetchData } from "../../hooks/use-http";
import useDebounce from "../../hooks/useDebounce";
import InputContext from "../../store/input/input-context";
import StatusContext from "../../store/input/status-context";
import { Container } from "../../styles/Container.style";

import Page from "./components/pagination/Pagination";
import Search from "./components/search/Search";
import Card from "./components/card/Card";
import { CardsContainer, Main } from "./Home.style";
import { RootObject } from "../../schema/singleCharacterSchema";
import PageContext from "../../store/page/page-context";

const Home: FC = () => {
  const inputCtx = useContext(InputContext);
  const statusCtx = useContext(StatusContext);
  const pageCtx = useContext(PageContext);
  const [apiData, setApiData] = useState<RootObject>();

  const debounceInput = useDebounce(inputCtx.input, 300);

  useEffect(() => {
    fetchData(
      `https://rickandmortyapi.com/api/character/?name=${debounceInput}&status=${
        statusCtx.status ? statusCtx.status : ""
      }&page=${pageCtx.page}`
    ).then((data) => setApiData(data));
  }, [debounceInput, statusCtx.status, pageCtx.page]);

  return (
    <Main>
      <Container>
        <Search />
        <CardsContainer>
          <Card data={apiData?.results} />
        </CardsContainer>
        <Page data={apiData?.info} />
      </Container>
    </Main>
  );
};

export default Home;
