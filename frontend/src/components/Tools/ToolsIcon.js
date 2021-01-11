import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const ToolsIcon = ({ iconTitle, icon, size, color }) => {
  return (
    <StyledDiv>
      <FontAwesomeIcon
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
  align-items: center;
  span {
    display: block;
    text-align: center;
    color: whitesmoke;
    padding: 6px 0 0 0;
  }
`;

export default ToolsIcon;
