import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './navigation';
import Ellipse from './ellipse';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
/* import Login from './login'; */



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div id="main">
    <Ellipse />
    <Header />
    <div id="main-content">
      <header id="title">
        <h1>Misinformation Detective</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore.</p>
        <h2 id="button">Explore</h2>
      </header>
    </div>

  </div>
);

