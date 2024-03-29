import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './styles';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './index.css';

const container = document.getElementById('app');

// Initial render: Render an element to the root.
ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <GlobalStyles />
    <RecoilRoot>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
