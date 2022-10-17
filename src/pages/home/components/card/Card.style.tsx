import styled from "styled-components";
import { device } from "../../../../styles/DimensionDiveces";

interface Props {
  status?: string;
  top?: string;
  img?: string;
}

export const CardContainer = styled.div`
  min-height: 330px;
  max-height: 310px;
  background-color: #e6e6e7;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  flex-basis: 18%;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
  }

  @media ${device.desktop} {
    flex-basis: 18%;
  }

  @media ${device.laptopL} {
    flex-basis: 29%;
  }

  @media ${device.laptop} {
    flex-basis: 34%;
  }

  @media ${device.tablet} {
    flex-basis: 46%;
  }

  @media ${device.mobileL} {
    flex-basis: 80%;
  }
`;

export const ImgContainer = styled.div<Props>`
  width: 100%;
  height: 280px;
  border-radius: 7px 7px 0 0;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
`;

export const Banner = styled.div<Props>`
  background-color: ${(props) =>
    props.status === "Alive"
      ? "green"
      : props.status === "Dead"
      ? "red"
      : "grey"};
  color: white;
  position: absolute;
  top: ${(props) => props.top || "10px"};
  right: 10px;
  padding: 5px 10px;
  border-radius: 5px;

  @media ${device.laptop} {
    font-size: 17px;
    padding: 4px 8px;
  }

  @media ${device.tablet} {
    font-size: 14px;
    padding: 4px 8px;
  }

  @media ${device.mobileL} {
    font-size: 10px;
    padding: 3px 6px;
  }
  @media ${device.mobileM} {
    font-size: smaller;
    padding: 2px 4px;
  }
`;

export const NameCard = styled.h3`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  margin-top: 10px;
`;
