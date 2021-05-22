import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import TechnologyCards from '../components/TechnologyCards';
import { getTechnologies } from '../helpers/data/technologyData';
import TechnologyForm from './TechnologyForm';
import firebaseConfig from '../helpers/apiKeys';
import { getUsers } from '../helpers/data/userData';
import UserCards from '../components/UserCards';

export default function Technologies({ user }) {
  const [techForm, setTechForm] = useState(false);
  const [technologies, setTechnologies] = useState([]);
  const [userArray, setUserArray] = useState([]);

  useEffect(() => {
    getTechnologies().then((technologiesArray) => setTechnologies(technologiesArray));
  }, []);

  useEffect(() => {
    getUsers().then((users) => setUserArray(users));
  }, []);

  const handleTechClick = () => {
    setTechForm((prevState) => !prevState);
  };

  return (
    <main>
      {(user && user.uid === firebaseConfig.adminId)
        && <div>
      {!techForm
        ? <Button color='info' onClick={handleTechClick}>Add Technology</Button>
        : <div>
          <Button color='info' onClick={handleTechClick}>Close Form</Button>
          <TechnologyForm setTechnologies={setTechnologies} setTechForm={setTechForm}/>
          </div>}
      </div>
      }
      <div className="head">
        <header id="tech" className="title">Technologies</header>
      </div>
        <section className="techContainer">
        <div className="technlogyContainer mt-3 mb-5">
          {technologies.map((technology) => (
            <TechnologyCards
              key={technology.firebaseKey}
              setTechnologies={setTechnologies}
              setTechForm={setTechForm}
              user={user}
              {...technology}
            />
          ))}
        </div>
      </section>
      {(user && user.uid === firebaseConfig.adminId)
        && <div className="secret">
          {userArray.map((userInfo) => (
            <UserCards key={userInfo.firebaseKey}
              {...userInfo}
            />
          ))}
        </div>
      }
    </main>
  );
}

Technologies.propTypes = {
  user: PropTypes.any
};
