import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  height: 180px;
  padding: 0.5rem;
  img {
    height: 100%;
  }
`;

const Photo = props => {
  debugger;
  return (
    <StyledDiv>
      <img src={props.photo} alt={props.photo} />
    </StyledDiv>
  );
};

export default Photo;
