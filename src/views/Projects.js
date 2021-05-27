import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import ProjectCards from '../components/ProjectCards';
import { getProjects } from '../helpers/data/projectData';
import ProjectForm from './ProjectForm';
import firebaseConfig from '../helpers/apiKeys';

export default function Projects({ user }) {
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    getProjects().then((projectsArray) => setProjects(projectsArray));
  }, []);

  const handleClick = () => {
    setShowForm((prevState) => !prevState);
  };

  return (
    <motion.main
      initial={{ y: '200vw' }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', duration: 1 }}
    >
      {(user && user.uid === firebaseConfig.adminId)
      && <div>
      {!showForm
        ? <Button color='info' onClick={handleClick}>Add Project</Button>
        : <div>
          <Button color='info' onClick={handleClick}>Close Form</Button>
          <ProjectForm setProjects={setProjects} setShowForm={setShowForm} />
        </div>
        }
        </div>
      }
      <section>
        <div className="head">
          <header className="title">Projects</header>
        </div>
        <div className='projectsContainer mt-2'>
          {projects.map((project) => (
            <ProjectCards key={project.firebaseKey}
              setProjects={setProjects}
              setShowForm={setShowForm}
              user={user}
              {...project}
            />
          ))}
        </div>
      </section>
    </motion.main>
  );
}

Projects.propTypes = {
  user: PropTypes.any
};
