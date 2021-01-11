import React from "react";
import styled from "styled-components";
import Container from "../Container";
import ToolsIcon from "./ToolsIcon";
import {
  faHtml5,
  faCss3,
  faSass,
  faJs,
  faReact,
  faGit,
} from "@fortawesome/free-brands-svg-icons";

const Tools = () => {
  return (
    <StyledSection className="tools">
      <h1>Technologies & Tools</h1>
      <Container>
        <ToolsIcon
          icon={faHtml5}
          size="4x"
          color="#6666ff"
          iconTitle="HTML 5"
        />
        <ToolsIcon icon={faCss3} size="3x" color="#6666ff" iconTitle="CSS 3" />
        <ToolsIcon icon={faSass} size="3x" color="#6666ff" iconTitle="SCSS" />
        <ToolsIcon
          icon={faJs}
          size="3x"
          color="#6666ff"
          iconTitle="Javascript"
        />
        <ToolsIcon
          icon={faReact}
          size="3x"
          color="#6666ff"
          iconTitle="React JS"
        />
        <ToolsIcon icon={faGit} size="3x" color="#6666ff" iconTitle="Git" />
      </Container>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  width: 100%;
  background: #25262a;
  h1 {
    padding: 100px 0 50px 0;
    text-align: center;
    color: whitesmoke;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 900px;
    padding: 0 0 60px 0;
    border-bottom: 2px solid #2d2e32;
  }
`;

export default Tools;
