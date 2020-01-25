import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  font-size: 3rem;
`;

const Videos = () => {
  return (
    <div>
      <StyledH1>Videos</StyledH1>
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/OF0w9z_JUJs"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <h3>
        What have your learned in this video? Explain it to your friend and
        family
      </h3>
    </div>
  );
};

export default Videos;
