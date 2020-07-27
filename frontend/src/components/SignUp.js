import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import M from 'materialize-css';

const SignUp = () => {

    const history = useHistory();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const sendData = () => {
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            M.toast({html: 'Invalid email', classes: 'rounded #e53935 red darken-1'});
            return;
        } else {
            fetch("http://localhost:5000/signup", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    M.toast({html: data.error, classes: 'rounded #e53935 red darken-1'});
                } else {
                    M.toast({html: data.message, classes: 'rounded #43a047 green darken-1'});
                    history.push('/signin');
                };
            }).catch(err => console.error(err));
        }
    };

    return (
        <div className="my-card">
            <div className="card form-card">
                <h2>Instagram</h2>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <button onClick={sendData}className="btn waves-effect waves-light #42a5f5 blue darken-1">
                    Sign Up
                </button>
                <h6><Link to="/signin">Already have an account?</Link></h6>
            </div>
        </div>
    );
};

export default SignUp;
