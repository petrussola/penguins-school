import React from 'react';
import styled from 'styled-components';

import Fact from '../Components/Fact';

// DATA
import { facts } from '../Data/facts';

const StyledContainer = styled.div`
  padding-top: 3rem;
`;

const StyledH1 = styled.h1`
  font-size: 3rem;
`;

const Facts = () => {
  return (
    <StyledContainer>
      <StyledH1>Facts</StyledH1>
      <div>
        {facts.map(fact => {
          return <Fact fact={fact} />;
        })}
      </div>
    </StyledContainer>
  );
};

export default Facts;
