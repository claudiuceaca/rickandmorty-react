import styled from "styled-components";
import { device } from "../../styles/DimensionDiveces";

export const DetailsContainer = styled.div`
  width: 100%;
  min-height: 80vh;
  height: auto;
  margin-bottom: 3rem;
  display: flex;
  padding-top: 2rem;
  background-color: #fafafa;
  background-image: url("https://www.transparenttextures.com/patterns/blizzard.png");
`;

export const DetailsCard = styled.div`
  width: 50%;
  min-height: 500px;
  height: auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  gap: 1rem;
  padding: 2rem;
  padding-top: 4rem;
  border: 1px solid #d6d6d6;
  border-radius: 15px;
  background-color: white;

  @media ${device.laptop} {
    padding: 4rem 5px 2rem 0px;
    width: 50%;
  }

  @media ${device.tablet} {
    padding: 4rem 5px 2rem 0px;
    width: 70%;
  }

  @media ${device.mobileL} {
    width: 80%;
  }

  @media ${device.mobileM} {
    width: 90%;
  }
`;
