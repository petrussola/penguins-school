import React from 'react';
import styled from 'styled-components';

const StyledNavBar = styled.div`
  display: flex;
  flex-direction: row;
`;

const NavBar = () => {
  return (
    <StyledNavBar>
      <h1>Facts</h1>
      <h1>Species</h1>
      <h1>Photos</h1>
    </StyledNavBar>
  );
};

export default NavBar;
