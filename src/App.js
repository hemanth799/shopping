import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './App.css';
import Login from './components/Login';
import Home from './components/home';
import Admin from './components/admin';

function App() {

  return (
    <Router>
      <div className="App">
        <Container fluid>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/admin" component={Admin} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
