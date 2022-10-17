import styled from "styled-components";
import { device } from "../../../../styles/DimensionDiveces";

interface PropsGender {
  gender: string;
}

interface PropsStatus {
  status: string;
}

export const StatusGenderContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Name = styled.h1`
  font-size: 35px;
  @media ${device.laptop} {
    font-size: 28px;
  }

  @media ${device.tablet} {
    font-size: 21px;
  }
  @media ${device.mobileL} {
    font-size: 18px;
  }
  @media ${device.mobileM} {
    font-size: 15px;
  }
`;

export const Species = styled.div`
  background-color: grey;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  @media ${device.mobileL} {
    flex-basis: 52%;
  }
`;

export const GenderDiv = styled.div<PropsGender>`
  background-color: ${(props) =>
    props.gender === "Male"
      ? "blue"
      : props.gender === "Female"
      ? "red"
      : "grey"};
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  @media ${device.mobileL} {
    flex-basis: 52%;
  }
`;

export const Status = styled.div<PropsStatus>`
  background-color: ${(props) =>
    props.status === "Alive"
      ? "green"
      : props.status === "Dead"
      ? "red"
      : "grey"};
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  @media ${device.mobileL} {
    flex-basis: 52%;
  }
`;

export const LocationOriginContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media ${device.laptop} {
    font-size: large;
    flex-direction: column;
    gap: 1rem;
  }

  @media ${device.tablet} {
    font-size: medium;
  }

  @media ${device.mobileL} {
    flex-direction: column;
    gap: 1rem;
    font-size: small;
  }
`;

export const EpisodesCard = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const EpisodesName = styled.li`
  list-style: none;
  padding-bottom: 1rem;
  flex-basis: 50%;
  display: flex;
  align-items: center;
  padding-left: 3rem;
  margin: 0 auto;

  @media ${device.laptop} {
    padding-left: 2rem;
    font-size: large;
  }

  @media ${device.tablet} {
    padding-left: 2rem;
    font-size: medium;
  }

  @media ${device.mobileL} {
    font-size: small;
    flex-basis: 70%;
    padding: 0rem;
    margin-bottom: 1rem;
  }
`;

export const BackButton = styled.div`
  padding: 1rem 2rem;
  background-color: white;
  color: #414147;
  font-size: medium;
  border: 1px solid #6e6d7ac1;
  border-radius: 0 10px 10px 0;
  position: absolute;
  left: 0;
  top: 11px;

  &:hover {
    background-color: #6e6d7a28;
    cursor: pointer;
  }

  @media ${device.laptop} {
    padding: 0.8rem 1.6rem;
  }

  @media ${device.tablet} {
    padding: 0.6rem 1.2rem;
    font-size: small;
  }
  @media ${device.mobileL} {
    padding: 0.4rem 0.8rem;
    font-size: smaller;
  }
  @media ${device.mobileM} {
    padding: 0.2rem 0.4rem;
    font-size: smaller;
  }
`;
