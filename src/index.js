import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';

import './css/reset.css';
import './css/style.css';
import './css/grid_12.css';
import './css/slider.css';
import './css/bootstrap.css';
import './css/body.css';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);