import React from "react";
import styled from "styled-components";
import Container from "../Container";
import Typist from "react-typist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";

const Hero = () => {
  return (
    <StyledSection className="hero" id="#">
      <Container>
        <div className="box-1">
          <div className="main-title">
            <Typist
              cursor={{ show: false, hideWhenDone: true }}
              avgTypingDelay={90}
            >
              <h1>
                <span>Front-end</span> Web Developer
              </h1>
            </Typist>
          </div>
          <div className="main-info">
            <h1>Hello,</h1>
            <h2>I'm Eric Holdridge.</h2>
            <p>
              I turn ideas into fully functional and operational websites using
              HTML5, CSS3, Javascript and React.js. I'm a highly motivated
              front-end web developer who is able to work alongside other
              talented IT professionals in developing websites to the highest
              standards.
            </p>
            <a href="/#contact">
              Lets chat!{" "}
              <FontAwesomeIcon
                icon={faComment}
                classname="icon"
                size="2x"
                color="#6666ff"
              />
            </a>
          </div>
        </div>
      </Container>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  width: 100%;
  min-height: calc(100vh - 53px);
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    display: flex;
    justify-content: center;
    .box-1 {
      width: 100%;
      padding: 0 0 60px 0;
      text-align: left;
      .main-title {
        text-align: left;
        display: inline-block;
        margin: 0;
        h1 {
          text-align: left;
          color: whitesmoke;
          font-size: 1rem;
          font-weight: 400;
          margin: 0;
        }
        span {
          color: #6666ff;
          font-weight: 600;
        }
      }
      .main-info {
        padding: 10px 0 0 0;
        color: whitesmoke;
        h1,
        h2 {
          font-size: 3rem;
        }
        p {
          width: 100%;
          max-width: 700px;
          padding: 8px 0 20px 0;
          font-size: 1rem;
          line-height: 1.6;
        }
        a {
          color: whitesmoke;
          text-decoration: none;
        }
      }
    }
  }

  @media (min-width: 600px) and (max-width: 768px) {
    .container {
      .box-1 {
        padding: 0;
        .main-info {
          h1,
          h2 {
            font-size: 2.4rem;
          }
          p {
            font-size: 0.98rem;
          }
        }
      }
    }
  }

  @media (min-width: 320px) and (max-width: 413px) {
    .container {
      .box-1 {
        .main-title {
          h1 {
            font-size: 0.8rem;
          }
        }
        .main-info {
          h1,
          h2 {
            font-size: 1.4rem;
          }
          p {
            font-size: 0.8rem;
          }
          a {
            font-size: 0.8rem;
          }
          /* .icon {
            font-size: .1rem;
          } */
        }
      }
    }
  }

  @media (min-width: 414px) and (max-width: 600px) {
    .container {
      .box-1 {
        /* .main-title {
          h1 {
            font-size: 1rem;
          }
        } */
        .main-info {
          h1,
          h2 {
            font-size: 2rem;
          }
          p {
            /* width: 100%;
            max-width: 350px; */
            font-size: 0.9rem;
          }
          a {
            font-size: 0.9rem;
          }
          /* .icon {
            font-size: .1rem;
          } */
        }
      }
    }
  }
`;

export default Hero;
