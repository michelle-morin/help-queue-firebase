import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

function Header(){
  const HelpQueueHeader = styled.h1`
  font-size: 24px;
  text-align: center;
  color: white;
`;

  const StyledWrapper = styled.section`
    background-color: #008081;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 25vh;
  `;

  const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    margin-left: 10px;
    margin-right: 10px;
  `;

  return (
    <StyledWrapper>
      <HelpQueueHeader>
        <h1>Help Queue</h1>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/signin">Sign In</StyledLink>
      </HelpQueueHeader>
    </StyledWrapper>
  );
}

export default Header;