import React, { useEffect } from 'react';
import {
  Routes, Route, Navigate, useNavigate,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  SignUpPage, LogInPage, TaskList, PageNotFound,
} from './pages';
import { book } from './navigation/book';
import { selectProfile } from './lib/redux/selectors';
import { authActions } from './lib/redux/actions';
import { PrivateRoute } from './navigation/PrivateRoute';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profile = useSelector(selectProfile);

  useEffect(() => {
    const savedId = localStorage.getItem('id');
    if (savedId) {
      dispatch(authActions.fillUserProfileAsync(savedId));
    }
  }, []);

  useEffect(() => {
    if (profile) {
      navigate(book.toDoList);
    }
  }, [profile]);

  return (
    <Routes>
      <Route path={book.root} element={<Navigate to={book.login} replace />} />
      <Route path={book.signUp} element={<SignUpPage />} />
      <Route path={book.login} element={<LogInPage />} />
      <Route
        path={book.toDoList}
        element={(
          <PrivateRoute>
            <TaskList />
          </PrivateRoute>
        )}
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
