import React from 'react';
import styled from 'styled-components';

import Photo from '../Components/Photo';
import { photos } from '../Data/photos';

const StyledGallery = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 75%;
  margin: 0 auto;
`;

const StyledH1 = styled.h1`
  font-size: 3rem;
`;

const Photos = () => {
  return (
    <div>
      <StyledH1>Penguin Photos</StyledH1>
      <StyledGallery>
        {photos.map(photo => {
          return <Photo photo={photo} />;
        })}
      </StyledGallery>
    </div>
  );
};

export default Photos;
