import React from "react";
import NavbarLogo from "../Navbar/NavbarLogo";
import { Link } from "gatsby";
import Container from "../Container";
import styled from "styled-components";

const Navbar = () => {
  return (
    <StyledNav>
      <Container>
        <NavbarLogo />
        <StyledLinks>
          <Link to="/#">Home</Link>
          <Link to="/#tools">Tools</Link>
          <Link to="/#showcase">Showcase</Link>
          <Link to="/#contact">Contact</Link>
        </StyledLinks>
      </Container>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  width: 100%;
  padding: 20px 0 0 0;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const StyledLinks = styled.div`
  a {
    color: white;
    font-size: 1rem;
    margin: 0 40px;
    text-decoration: none;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export default Navbar;
