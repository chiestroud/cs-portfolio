import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import About from '../views/About';
import Contact from '../views/Contact';
import Home from '../views/Home';
import NotFound from '../views/NotFound';
import NssJourney from '../views/NssJourney';
import Projects from '../views/Projects';
import Technologies from '../views/Technologies';

export default function Routes({ setProjects }) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About} />
        <Route path='/nss' component={NssJourney} />
        <Route path='/projects' component={() => <Projects setProjects={setProjects}/>} />
        <Route path='/technologies' component={Technologies} />
        <Route path='/contact' component={Contact} />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  setProjects: PropTypes.func
};
