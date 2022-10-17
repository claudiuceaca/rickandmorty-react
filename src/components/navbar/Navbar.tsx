import { FC } from "react";
import { Container } from "../../styles/Container.style";
import { NavbarContainer, NavBarLink, NavBarLinks } from "./Navbar.style";

const Navbar: FC = () => {
  return (
    <NavbarContainer>
      <Container>
        <NavBarLinks>
          <NavBarLink to="/">Rick and Morty</NavBarLink>
        </NavBarLinks>
      </Container>
    </NavbarContainer>
  );
};

export default Navbar;
