import { FC, useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { fetchData } from "../../hooks/use-http";
import { Container } from "../../styles/Container.style";

import { DetailsContainer } from "./Details.style";
import DetailsCardComponent from "./components/detailsCard/DetailsCard";
import { SingleCharacterSchema } from "../../schema/singleCharacterSchema";

const Details: FC = () => {
  const { id } = useParams();
  const [singleCaracter, setSingleCaracter] =
    useState<SingleCharacterSchema | null>(null);

  useEffect(() => {
    fetchData(`https://rickandmortyapi.com/api/character/${id}`).then((data) =>
      setSingleCaracter(data)
    );
  }, [id]);

  if (!singleCaracter) {
    return <h1>Loading ...</h1>;
  }

  return (
    <DetailsContainer>
      <Container justify="start">
        <DetailsCardComponent data={singleCaracter} />
      </Container>
    </DetailsContainer>
  );
};

export default Details;
