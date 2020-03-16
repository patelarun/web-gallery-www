import React from 'react';
import Navbar from 'components/Navbar';
import { HashRouter, Switch, Router, Route, Link } from 'react-router-dom';
import Profile from 'components/Profile';
import UsersList from 'containers/UsersList';
import PrivateRoute from 'components/PrivateRoute';

function App(props) {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <HashRouter basename="/">
        <div className="d-flex">
          <Link to="/profile">Profile</Link>
          <Link to="/users">Users</Link>
        </div>
        <Switch>
          <PrivateRoute path="/profile/:id" component={Profile} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/users" component={UsersList} />
        </Switch>
     </HashRouter>
    </div>
  );
}

export default App;
