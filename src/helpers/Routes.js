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

export default function Routes({
  setProjects, setTechnologies, setTechForm, setShowForm, user, setUser
}) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About} />
        <Route path='/nss' component={NssJourney} />
        <Route path='/projects' component={() => <Projects setProjects={setProjects} setShowForm={setShowForm} user={user} setUser={setUser}/>} />
        <Route path='/technologies' component={() => <Technologies user={user} setTechnologies={setTechnologies} setTechForm={setTechForm} setUser={setUser}/>} />
        <Route path='/contact' component={Contact} />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  setProjects: PropTypes.func,
  setTechnologies: PropTypes.func,
  setTechForm: PropTypes.func,
  setShowForm: PropTypes.func,
  user: PropTypes.any,
  setUser: PropTypes.func
};
