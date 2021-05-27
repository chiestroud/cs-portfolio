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
      className='card m-5 text-center marginLeft'
      key={firebaseKey} id={firebaseKey}>
      {!editing
        ? <CardBody>
            <CardImg className='mx-auto d-block' id='projectImg' src={screenshot} alt={title} />
          <ModalCard title={title} description={description} githubUrl={githubUrl} url={url} screenshot={screenshot} technologiesUsed={technologiesUsed}/>
            <CardTitle tag='h4'>{title}</CardTitle>
          </CardBody>
        : ''
      }
      {(user && user.uid === firebaseConfig.adminId)
        ? <div className='btnContainer'>
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
  user: PropTypes.any
};
