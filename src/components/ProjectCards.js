import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardImg, CardBody, CardTitle, CardText, Button
} from 'reactstrap';
import ProjectForm from '../views/ProjectForm';

export default function ProjectCards({
  firebaseKey,
  description,
  githubUrl,
  screenshot,
  technologiesUsed,
  title,
  url,
}) {
  const [editing, setEditing] = useState(false);
  const handleClick = (type) => {
    if (type === 'edit') {
      setEditing((prevState) => !prevState);
    }
  };

  return (
    <Card body className='card m-1 text-center' key={firebaseKey}>
      <CardImg className='mx-auto d-block' id='projectImg' src={screenshot} alt={title} />
      <CardBody>
        <CardTitle tag='h5'>{title}</CardTitle>
        <CardText>{description}</CardText>
        <CardText>{technologiesUsed}</CardText>
        <a href={githubUrl} target='_blank' rel="noreferrer">Link to GitHub</a>
        <a href={url} target='_blank' rel="noreferrer">Link to Deployed Site</a>
      </CardBody>
      <Button color='success' onClick={() => handleClick('edit')}>
        {editing ? 'Close Form' : 'Update Project'}</Button>
      {editing && <ProjectForm />}
      <Button color='danger' onClick={() => handleClick('delete')}>Delete</Button>
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
  url: PropTypes.string
};
