import styled from "styled-components";
import { device } from "../../../../styles/DimensionDiveces";

export const SearchBarFilterItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
  flex-wrap: wrap;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const FilterItem = styled.button`
  padding: 10px 12px;
  color: #6e6d7a;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #6e6d7a;
  font-size: large;
  display: flex;
  flex-basis: 9%;

  &:hover {
    background-color: #f0f0f1;
  }

  @media ${device.desktop} {
    flex-basis: 13%;
  }

  @media ${device.laptopL} {
    flex-basis: 15%;
    font-size: medium;
  }

  @media ${device.laptop} {
    flex-basis: 33%;
  }

  @media ${device.tablet} {
    flex-basis: 35%;
    font-size: small;
  }

  @media ${device.mobileL} {
    flex-basis: 70%;
    font-size: smaller;
  }

  @media ${device.mobileM} {
    flex-basis: 70%;
  }

  @media ${device.mobileS} {
    flex-basis: 60%;
  }
`;
