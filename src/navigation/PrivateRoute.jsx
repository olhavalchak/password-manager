import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import propTypes from 'prop-types';
import { selectProfile } from '../lib/redux/selectors';
import { book } from './book';

export const PrivateRoute = ({ children }) => {
  const profile = useSelector(selectProfile);

  if (profile) {
    return children;
  }
  return <Navigate to={book.login} replace />;
};
PrivateRoute.propTypes = {
  children: propTypes.element.isRequired,
};
