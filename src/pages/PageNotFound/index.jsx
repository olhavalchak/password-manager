import React from 'react';
import { Link } from 'react-router-dom';
import { StyledErrorContainer } from '../../elements';
import { StyledImage } from './elements/Image';
import notFound from '../../theme/assets/notFound.png';

export const PageNotFound = () => (
  <StyledErrorContainer>
    <StyledImage
      src={notFound}
      alt="not found"
    />
    <h2>
      <Link to="/">Go Back </Link>
    </h2>
  </StyledErrorContainer>
);
