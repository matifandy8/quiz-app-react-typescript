import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Components
import Home from './pages/Home';


const App: React.FC = () => {
  return (
    <>
        <Router>
          <Navbar/>
      <Switch>
        <Route component={Home} path={'/'}/>
      </Switch>
    </Router>
    </>
  );
};

export default App;