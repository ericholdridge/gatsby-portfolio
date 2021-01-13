import React, { useState } from "react";
import NavbarLogo from "../Navbar/NavbarLogo";
import { Link } from "gatsby";
import Container from "../Container";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignRight } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <StyledNav>
      <Container>
        <div className="wrapper">
          <NavbarLogo />
          <FontAwesomeIcon
            icon={faAlignRight}
            size="lg"
            color="#6666ff"
            className="mobileDropdown"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
        <ul className={showMenu ? "nav" : "nav hide"}>
          <Link to="/#">Home</Link>
          <Link to="/#tools">Tools</Link>
          <Link to="/#showcase">Showcase</Link>
          <Link to="/#contact">Contact</Link>
        </ul>
      </Container>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  width: 100%;
  padding: 20px 0 0 0;
  .container {
    display: flex;
    /* flex-direction: column; */
    justify-content: space-between;
    .wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .mobileDropdown {
        display: none;
      }
    }
    .nav {
      display: flex;
      align-items: center;
      a {
        color: white;
        font-size: 1rem;
        margin: 0 40px;
        text-decoration: none;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
  @media (max-width: 768px) {
    .container {
      display: flex;
      flex-direction: column;
      .wrapper {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .mobileDropdown {
          display: block;
          cursor: pointer;
        }
      }
      .nav {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        a {
          margin: 10px 0;
        }
        &.hide {
          display: none;
        }
      }
    }
  }
`;

export default Navbar;
