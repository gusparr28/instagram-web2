import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import CreatePost from './components/CreatePost';

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Home}></Route>
      <Route path="/profile" component={Profile}></Route>
      <Route path="/signin" component={SignIn}></Route>
      <Route path="/signup" component={SignUp}></Route>
      <Route path="/create" component={CreatePost}></Route>
    </Router>
  );
}

export default App;
