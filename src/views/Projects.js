import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import ProjectCards from '../components/ProjectCards';
import { getProjects } from '../helpers/data/projectData';
import ProjectForm from './ProjectForm';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    getProjects().then((projectsArray) => setProjects(projectsArray));
  }, []);

  const handleClick = () => {
    setShowForm((prevState) => !prevState);
  };

  return (
    <main>
      <section>
        {!showForm
          ? <Button color='info' onClick={handleClick}>Add Project</Button>
          : <div>
            <Button color='info' onClick={handleClick}>Close Form</Button>
            <ProjectForm setProjects={setProjects} setShowForm={setShowForm}/>
          </div>
        }
      </section>
      <section>
        <header>Projects</header>
        <hr />
        <div className='projectsContainer'>
          {projects.map((project) => (
            <ProjectCards key={project.firebaseKey}
              firebaseKey={project.firebaseKey}
              available={project.available}
              description={project.description}
              githubUrl={project.githubUrl}
              screenshot={project.screenshot}
              technologiesUsed={project.technologiesUsed}
              title={project.title}
              url={project.url}
              setProjects={setProjects}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
