import React from "react";
import styled from "styled-components";
import Container from "../Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <div className="author">
          <p>Developed by</p>
          <span>Eric Holdridge</span>
        </div>
        <div className="social">
          <a href="https://www.linkedin.com/in/eric-holdridge-bb6183144/">
            <FontAwesomeIcon
              icon={faLinkedinIn}
              size="lg"
              color="rgb(102, 102, 255)"
            />
          </a>
          <a href="https://github.com/ericholdridge">
            <FontAwesomeIcon
              icon={faGithub}
              size="lg"
              color="rgb(102, 102, 255)"
            />
          </a>
        </div>
        <div className="copyright">
          <p>&#169; 2021. All right reserved.</p>
        </div>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  width: 100%;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 30px 0;
    .author {
      display: flex;
      align-items: center;
      p {
        color: whitesmoke;
      }
      span {
        margin: 0 0 0 4px;
        color: rgb(102, 102, 255);
        font-weight: 600;
      }
    }
    .social {
      width: 60px;
      display: flex;
      justify-content: space-between;
    }
    .copyright {
      padding: 10px 0 0 0;
      p {
        color: whitesmoke;
      }
    }
  }
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      .social {
        padding: 10px 0 0 0;
      }
    }
  }
`;

export default Footer;
