import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  font-size: 3rem;
`;

const Credits = () => {
  return (
    <div>
      <StyledH1>Credits</StyledH1>
      <p>
        Made by a 1st class student (and his dad) from St. Christopher's School
        (Dublin) as a school project. Hope you liked it!
      </p>
      <p>
        Photos are open source and have been sourced with{' '}
        <a href="https://unsplash.com/">unsplash.com</a>
      </p>
    </div>
  );
};

export default Credits;
