import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './Components/App';
import Header from './Components/Header';
import './index.css';
import './css/Header.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
