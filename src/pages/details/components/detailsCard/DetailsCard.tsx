import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../../../../hooks/use-http";
import { SingleCharacterSchema } from "../../../../schema/singleCharacterSchema";
import { Image } from "../../../../styles/Image.style";
import { DetailsCard } from "../../Details.style";
import {
  BackButton,
  EpisodesCard,
  EpisodesName,
  GenderDiv,
  LocationOriginContainer,
  Name,
  Species,
  Status,
  StatusGenderContainer,
} from "./DetailsCard.style";

interface DetailsCardComponentProps {
  data: SingleCharacterSchema;
}

interface TitleName {
  id: number;
  name: string;
}

const DetailsCardComponent = ({ data }: DetailsCardComponentProps) => {
  const nav = useNavigate();
  // data destructure
  const { name, image, status, gender, species, location, origin, episode } =
    data;

  const [titleNames, setTitleNames] = useState<TitleName[] | undefined>([]);

  useEffect(() => {
    const numEp =
      episode?.map((url) => url.slice(url.lastIndexOf("/") + 1)) || "";

    fetchData(`https://rickandmortyapi.com/api/episode/${numEp}`).then(
      (data) => {
        if (Array.isArray(data)) {
          setTitleNames(data);
        } else {
          setTitleNames([data]);
        }
      }
    );
  }, [episode]);

  return (
    <DetailsCard>
      <BackButton onClick={() => nav("/")}>Home page</BackButton>
      <Name>{name}</Name>
      <Image src={image} alt="Caracter" borderradius="10px" />
      <StatusGenderContainer>
        <Species>{species}</Species>
        <Status status={status}>{status}</Status>
        <GenderDiv gender={gender}>{gender}</GenderDiv>
      </StatusGenderContainer>
      <LocationOriginContainer>
        <h4>Location: {location.name}</h4>
        <h4>Origin: {origin.name}</h4>
      </LocationOriginContainer>

      <EpisodesCard>
        {titleNames?.map((names) => (
          <EpisodesName key={names.id}>{names.name}</EpisodesName>
        ))}
      </EpisodesCard>
    </DetailsCard>
  );
};

export default DetailsCardComponent;
