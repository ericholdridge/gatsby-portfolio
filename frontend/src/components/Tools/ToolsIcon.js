import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const ToolsIcon = ({ iconTitle, className, icon, size, color }) => {
  return (
    <StyledDiv>
      <FontAwesomeIcon
        className={className}
        icon={icon}
        size={size}
        color={color}
      />
      <span>{iconTitle}</span>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  .html5Icon {
    padding: 10px 0;
  }
  span {
    display: block;
    color: whitesmoke;
  }
`;

export default ToolsIcon;
