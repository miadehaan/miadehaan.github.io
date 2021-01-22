import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { HashRouter } from 'react-router-dom'

ReactDOM.render(
    <HashRouter>
        <Router>
            <App />
        </Router>
    </HashRouter>
, document.getElementById('root') );


