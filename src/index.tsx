import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import { AppContext } from './app/AppContext';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <AppContext.Provider value={null}>
            <App />
        </AppContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
