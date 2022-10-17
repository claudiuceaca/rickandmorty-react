import React from "react";
import { useNavigate } from "react-router-dom";
import { Banner, CardContainer, ImgContainer, NameCard } from "./Card.style";
import { Result } from "../../../../schema/singleCharacterSchema";

interface CardComponentProps {
  data: Result[] | undefined;
}

const Card: React.FC<CardComponentProps> = ({ data }: CardComponentProps) => {
  const nav = useNavigate();
  return (
    <>
      {data ? (
        data.map((dataItem) => {
          return (
            <CardContainer
              key={dataItem.id}
              onClick={(event: React.MouseEvent<HTMLElement>) => {
                nav(`${dataItem.id}`);
              }}
            >
              <ImgContainer img={dataItem.image} />
              <Banner status={dataItem.status}>{dataItem.status}</Banner>
              <NameCard>{dataItem.name}</NameCard>
            </CardContainer>
          );
        })
      ) : (
        <h1>Nothing for the moment ...</h1>
      )}
    </>
  );
};

export default Card;
