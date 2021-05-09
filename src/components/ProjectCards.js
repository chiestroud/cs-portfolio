import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardImg, CardBody, CardTitle, CardText, Button
} from 'reactstrap';
import ProjectForm from '../views/ProjectForm';
import { deleteProject } from '../helpers/data/projectData';

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
      className='card m-1 text-center'
      key={firebaseKey} id={firebaseKey}>
      {!editing
        ? <CardBody>
            <CardImg className='mx-auto d-block' id='projectImg' src={screenshot} alt={title} />
            <CardTitle tag='h5'>{title}</CardTitle>
            <CardText>{description}</CardText>
            <CardText>{technologiesUsed}</CardText>
            <a href={githubUrl} target='_blank' rel="noreferrer">Link to GitHub</a>
            <a href={url} target='_blank' rel="noreferrer">Link to Deployed Site</a>
          </CardBody>
        : ''
      }
      <div className='btnContainer'>
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
  setProjects: PropTypes.func
};
