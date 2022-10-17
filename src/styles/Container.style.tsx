import styled from "styled-components";

interface Props  {
  justify?: string
}

export const Container = styled.div<Props>`
  width: 85%;
  margin: 0 auto;
  position: relative;
  height: auto;
  display: flex;
  justify-content: ${(props) => props.justify || "center"};
  flex-direction: column;
`;
