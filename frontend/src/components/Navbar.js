import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="nav-wrapper #42a5f5 blue lighten-1">
            <div className="container">
                <Link className="brand-logo left" to="/">Instagram</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link className="nav-link" to="/signin">Sign In</Link></li>
                    <li><Link className="nav-link" to="/signup">Sign Up</Link></li>
                    <li><Link className="nav-link" to="/profile">Profile</Link></li>
                    <li><Link className="nav-link" to="/create">Create Post</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;