import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import BubblePage from "./components/BubblePage";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import axiosWithAuth from "./helpers/axiosWithAuth";
import "./styles.scss";

function App() {
  const Logout = () => {
    axiosWithAuth()
      .post('http://localhost:5000/api/logout')
      .then(res => {
        localStorage.removeItem('token')
        window.location.href='/login'
      })
  }

  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" onClick={Logout} href="/">logout</a>
        </header>
        <Link to='/login'>Login</Link>
        {localStorage.getItem('token') && <div>
          <Link to='/bubbles'>Bubbles</Link></div>}
      
      <Switch>
        <PrivateRoute exact path='/bubbles' component={BubblePage} />
        <Route path='/login' component={Login} />
        <Route path='/' component={Login} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Add in two routes that link to the Login Component, one for the default path '/' and one for the '/login'.
//2. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.