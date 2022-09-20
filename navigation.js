import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './login';
import './index.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Header() {
    return (

            <nav id="navigation">
                <div id="logo">
                    <img src="./detective-logo.png" id="logo-picture" />
                    <p>LOGO</p>
                </div>

                <ul>
                    <li>Article</li>
                    <li>Video</li>
                    <li>Q&A</li>
                </ul>
                <ul>
                    <li>Sign in</li>
                    <li id="signup">
                        Sign Up
                    </li>
                </ul>
            </nav>
    )
}

function Signup() {
    return (<h2>Signup page</h2>);
}
