import firebase from 'firebase/app';
import 'firebase/auth';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { addUser, getSingleUser } from '../helpers/data/userData';
import Routes from '../helpers/Routes';
import './App.scss';

function App({
  setProjects, setTechnologies, setTechForm
}) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          username: authed.email.split('@')[0],
          email: authed.email
        };
        setUser(userInfoObj);
        getSingleUser(userInfoObj).then((response) => {
          if (Object.values(response.data).length === 0) {
            addUser(userInfoObj);
          }
        });
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <Router>
      <NavBar user={user}/>
      <Routes
        user={user}
        setProjects={setProjects}
        setTechnologies={setTechnologies}
        setTechForm={setTechForm}
      />
    </Router>
  );
}

App.propTypes = {
  setProjects: PropTypes.func,
  showForm: PropTypes.bool,
  setShowForm: PropTypes.func,
  handleClick: PropTypes.func,
  setTechnologies: PropTypes.func,
  setTechForm: PropTypes.func
};

export default App;
