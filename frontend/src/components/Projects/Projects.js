import React from "react";
import styled from "styled-components";
import Container from "../Container";
import Img from "gatsby-image";

const Projects = ({ data }) => {
  return (
    <StyledSection className="projects" id="showcase">
      <Container>
        <h1>Showcase</h1>
        <div className="projectWrapper">
          {data.allSanityProjects.nodes.map((item) => (
            <div className="projectCard">
              <div className="projectCardImage">
                <Img fluid={item.projectPreview.asset.fluid} />
              </div>
              <div className="projectCardInfo">
                <h2>{item.projectTitle}</h2>
                <p>{item.projectDesc}</p>
                <div className="projectTech">
                  {item.projectTech.map((tech) => (
                    <span>{tech}</span>
                  ))}
                </div>
                <div className="projectLinks">
                  <a href={item.projectGithubUrl}>View Code</a>
                  <a href={item.projectUrl}>Live Preview</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  width: 100%;
  background: #25262a;
  .container {
    padding: 100px 0;
    h1 {
      color: whitesmoke;
    }
    .projectWrapper {
      padding: 10px 0 0 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      .projectCard {
        width: 100%;
        max-width: 360px;
        background: #2d2e32;
        margin: 20px 0;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
          0 6px 20px 0 rgba(0, 0, 0, 0.19);
        .projectCardInfo {
          padding: 24px 14px;
          border-left: 1px solid rgb(102, 102, 255);
          border-bottom: 1px solid rgb(102, 102, 255);
          h2 {
            color: rgb(102, 102, 255);
          }
          p {
            color: whitesmoke;
            padding: 10px 0 0 0;
          }
          .projectTech {
            padding: 14px 0;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            span {
              background: rgb(102, 102, 255);
              margin: 4px;
              padding: 0 4px;
              color: whitesmoke;
              border-radius: 4px;
              font-size: 0.9rem;
              &:first-child {
                margin-left: 0px;
              }
            }
          }
          .projectLinks {
            display: flex;
            justify-content: space-between;
            a {
              color: whitesmoke;
              text-decoration: transparent;
              &:hover {
                color: rgb(102, 102, 255);
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    h1 {
      text-align: center;
    }
    .container {
      .projectWrapper {
        justify-content: center;
        .projectCard {
          margin: 20px 0;
        }
      }
    }
  }
  @media(min-width: 769px) and (max-width: 1280px) {
    .container {
      .projectWrapper {
        justify-content: space-between;
        .projectCard {
          max-width: none;
          width: 48%;
          margin: 20px 0;
        }
      }
    }
  }
`;

export default Projects;
