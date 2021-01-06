import React from "react";
import styled from "styled-components";
import Container from "../Container";

const Hero = () => {
  return (
    <StyledSection className="hero">
      <Container>
        <div className="box-1">
          <div className="main-title">
            <h1>
              <span>Front-End</span> Web Developer
            </h1>
          </div>
          <div className="main-info">
            <h1>Hello,</h1>
            <h2>I'm Eric Holdridge</h2>
            <p>
              I love developing the visual elements that a user can see and
              interact with on a website.
            </p>
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
        background: #25262A;
        display: inline-block;
        padding: 8px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        border-radius: 4px;
        margin: 0;
        h1 {
          text-align: left;
          color: whitesmoke;
          font-size: 1.2rem;
          font-weight: 300;
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
        h1,h2 {
          font-size: 3rem;
        }
        p {
          padding: 8px 0 0 0;
          font-size: 1.1rem;
        }
      }
    }
  }
`;

export default Hero;
