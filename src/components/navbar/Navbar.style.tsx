import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.85);
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f3f3f4;
  position: sticky;
`;

export const NavBarLink = styled(Link)`
  color: #6e6d7a;
  font-size: x-large;
  text-decoration: none;
  margin: 10px;
  text-align: left;
`;

export const NavBarLinks = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
`;