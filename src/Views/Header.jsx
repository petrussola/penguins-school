import React from 'react';
import styled from 'styled-components';

import Title from '../Components/Title';
import NavBar from '../Components/NavBar';

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Title />
    </StyledHeader>
  );
};

export default Header;
