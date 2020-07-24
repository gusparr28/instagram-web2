import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div className="my-card">
            <div className="card form-card">
                <h2>Instagram</h2>
                <input type="text" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button className="btn waves-effect waves-light #42a5f5 blue darken-1">
                    Sign In
                </button>
                <h6><Link to="/signup">Don't have an account? Sign up!</Link></h6>
            </div>
        </div>
    );
};

export default SignIn;

