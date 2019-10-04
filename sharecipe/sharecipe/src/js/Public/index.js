import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home/';
import Login from './Login/';
import Password from './Password/';
import Signup from './Signup/'; 


function Public() {
  return (
    <main>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/password" component={Password} />
      </BrowserRouter>
    </main>
  );
}

export default Public;
