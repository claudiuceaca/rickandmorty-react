import styled from "styled-components";
import { device } from "./DimensionDiveces";

interface ImageProps {
  borderradius: string;
}

export const Image = styled.img<ImageProps>`
  width: 300px;
  height: auto;
  object-fit: cover;
  border-radius: ${(props) => props.borderradius || "0"};

  @media ${device.laptop} {
    width: 80%;
  }

  @media ${device.tablet} {
    width: 70%;
  }
`;
