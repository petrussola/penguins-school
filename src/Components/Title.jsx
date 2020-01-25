import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  font-size: 5rem;
`;

const Title = () => {
  return (
    <div>
      <StyledH1>Penguins</StyledH1>
    </div>
  );
};

export default Title;
