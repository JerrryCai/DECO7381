import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (

        <nav id="navigation">
            <div id="logo">
                <img src="./detective-logo.png" id="logo-picture" />
                <p>LOGO</p>
            </div>

            <ul>
                <li><Link to="/about">Article</Link></li>
                <li>Video</li>

                <li>Q&A</li>
            </ul>
            <ul>
                <li>Sign in</li>
                <li id="signup">
                    <Link to="/signup">Sign Up</Link>

                </li>
            </ul>
        </nav>
    )
}