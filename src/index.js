import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import Navegecao from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navegecao/>
  </React.StrictMode>
);

