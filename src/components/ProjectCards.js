import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardImg, CardBody, CardTitle, Button
} from 'reactstrap';
import ProjectForm from '../views/ProjectForm';
import { deleteProject } from '../helpers/data/projectData';
import firebaseConfig from '../helpers/apiKeys';
import ModalCard from './ModalCard';

export default function ProjectCards({
  firebaseKey,
  description,
  githubUrl,
  screenshot,
  technologiesUsed,
  title,
  url,
  loom,
  setProjects,
  available,
  user
}) {
  const [editing, setEditing] = useState(false);
  const handleClick = (type) => {
    if (type === 'edit') {
      setEditing((prevState) => !prevState);
    } else if (type === 'delete') {
      deleteProject(firebaseKey).then((projectsArray) => setProjects(projectsArray));
    }
  };

  return (
    <Card body
      className='card m-5 text-center marginLeft projectCont'
      key={firebaseKey} id={firebaseKey}>
      {!editing
        ? <CardBody id='cardDisplay'>
            <CardImg className='mx-auto d-block' id='projectImg' src={screenshot} alt={title} />
            <div className='hiddenModal'>
              <CardTitle className='hidden' tag='h4'>{title}</CardTitle>
            <ModalCard
              title={title}
              description={description}
              githubUrl={githubUrl}
              url={url}
              screenshot={screenshot}
              loom={loom}
              technologiesUsed={technologiesUsed} />
            </div>
          </CardBody>
        : ''
      }
      {(user && user.uid === firebaseConfig.adminId)
        ? <div id="projectEdit" className='btnContainer'>
            <Button color='success' onClick={() => handleClick('edit')}>
            {editing ? 'Close Form' : 'Update Project'}</Button>
              {editing
                && <ProjectForm key={firebaseKey}
                  firebaseKey={firebaseKey}
                  description={description}
                  githubUrl={githubUrl}
                  screenshot={screenshot}
                  technologiesUsed={technologiesUsed}
                  title={title}
                  url={url}
                  setProjects={setProjects}
                  available={available}
                  setEditing={setEditing}
                  loom={loom}
                />}
              <Button color='danger' onClick={() => handleClick('delete')}>Delete</Button>
          </div>
        : ''}
    </Card>
  );
}

ProjectCards.propTypes = {
  firebaseKey: PropTypes.string,
  description: PropTypes.string,
  githubUrl: PropTypes.string,
  screenshot: PropTypes.string,
  technologiesUsed: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  available: PropTypes.any,
  setProjects: PropTypes.func,
  user: PropTypes.any,
  loom: PropTypes.string
};
