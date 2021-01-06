import React from "react";
import styled from "styled-components";
import Container from "../Container";
import ToolsIcon from "./ToolsIcon";
import { faHtml5, faCss3 } from "@fortawesome/free-brands-svg-icons";

const Tools = () => {
  return (
    <StyledSection className="tools">
      <h1>Technologies & Tools</h1>
      <Container>
        <ToolsIcon icon={faHtml5} size="4x" color="#6666ff" iconTitle="HTML5"/>
        <ToolsIcon icon={faCss3} size="4x" color="#6666ff" iconTitle="CSS3" />
      </Container>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  width: 100%;
  background: #25262a;
  h1 {
    padding: 100px 0;
    text-align: center;
    color: whitesmoke;
    font-size: 2rem;
  }
  .container {
    display: flex;
    justify-content: space-between;
  }
`;

export default Tools;
