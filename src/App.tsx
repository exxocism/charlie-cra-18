import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import MainPage from './pages/MainPage';
import PageWithHeader from './pages/PageWithHeader';

const Container = styled.div`
  background-color: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  height: 100vh;
`;

const App = () => {
  return (
    <Container>
      <Routes>
        <Route element={<PageWithHeader />}>
          <Route path="/" element={<MainPage />} />
        </Route>
      </Routes>
    </Container>
  );
};

export default App;
