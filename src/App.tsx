import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


// Components
import Home from './pages/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <>
        <Router>
          <Navbar/>
      <Switch>
        <Route exact component={Home} path='/'/>
        <Route exact component={Login} path='/login'/>
      </Switch>
    </Router>
    </>
  );
};

export default App;