import styled from "styled-components";
import { device } from "../../../../styles/DimensionDiveces";

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
  position: relative;
`;

export const InputSearch = styled.input`
  padding: 0 24px 0 24px;
  outline: none;
  padding: 12px 24px;
  padding-left: 30px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #6e6d7a;
  width: 40%;

  ::placeholder {
    color: #6e6d7a;
    font-size: 1.2rem;
  }

  @media ${device.desktop} {
    width: 40%;
  }

  @media ${device.laptopL} {
    width: 40%;
    ::placeholder {
      color: #6e6d7a;
      font-size: 1.2rem;
    }

  @media ${device.laptop} {
    width: 60%;
    ::placeholder {
      color: #6e6d7a;
      font-size: 1rem;
    }

  @media ${device.tablet} {
    width: 60%;
    ::placeholder {
      color: #6e6d7a;
      font-size: 0.8rem;
    }
    
    @media ${device.mobileM} {
    width: 60%;
    ::placeholder {
      color: #6e6d7a;
      font-size: 0.7rem;
    }
  }
`;

export const ObtionContainer = styled.div`
  width: 40%;
  position: absolute;
  top: 34px;
  margin: 8px 0;
  background-color: white;
  z-index: 10;
  display: flex;
  flex-direction: column;
  border-radius: 5px;

  @media ${device.laptop} {
    width: 60%;
  }

  @media ${device.tablet} {
    width: 60%;
  }
`;

export const ObtionObject = styled.div`
  padding: 5px 0;
  padding-left: 1rem;
  background-color: white;
  color: #6e6d7a;
  position: relative;
  height: 35px;
  gap: 3px;
  width: 100%;

  &:hover {
    background-color: #6e6d7a;
    color: white;
  }
`;

export const OptionName = styled.h3`
  font-size: 20px;

  @media ${device.tablet} {
    font-size: 14px;
  }

  @media ${device.mobileL} {
    font-size: 11px;
  }

  @media ${device.mobileM} {
    font-size: 9px;
  }
`;

export const SearchIconContainer = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  left: 30.3%;

  @media ${device.laptopL} {
    left: 30.3%;
  }

  @media ${device.laptop} {
    left: 20.6%;
  }

  @media ${device.tablet} {
    left: 20.6%;
  }

  @media ${device.mobileL} {
    left: 21.5%;
  }
`;

export const DeleteIconContainer = styled.div`
  position: absolute;
  right: 28.8%;

  @media ${device.desktop} {
    right: 32.8%;
  }

  @media ${device.laptopL} {
    right: 32.8%;
  }

  @media ${device.laptop} {
    right: 24.8%;
  }

  @media ${device.tablet} {
    right: 26.4%;
  }

  @media ${device.mobileL} {
    right: 27.4%;
  }

  @media ${device.mobileM} {
    right: 28.4%;
  }
`;

export const CloseIconContainer = styled.div`
  position: absolute;
  right: 30.6%;

  @media ${device.laptop} {
    right: 20.8%;
  }

  @media ${device.tablet} {
    right: 21%;
  }

  @media ${device.mobileL} {
    right: 22%;
  }
`;
