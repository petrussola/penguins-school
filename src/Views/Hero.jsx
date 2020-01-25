import React from 'react';
import penguin from '../Media/Hero.jpg';
import styled from 'styled-components';

const StyledHero = styled.div`
  width: 48%;
  margin: 0 auto;
  img {
    width: 90%;
  }
`;

const Hero = () => {
  return (
    <StyledHero>
      <img src={penguin} alt="Penguin" />
    </StyledHero>
  );
};

export default Hero;
