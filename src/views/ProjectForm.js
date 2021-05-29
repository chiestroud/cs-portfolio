import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Form, FormGroup, Label, Input, FormText
} from 'reactstrap';
import { addProjects, updateProject } from '../helpers/data/projectData';

export default function ProjectForm({
  firebaseKey,
  description,
  githubUrl,
  screenshot,
  technologiesUsed,
  title,
  loom,
  url,
  setProjects,
  available,
  setShowForm,
  setEditing
}) {
  const [project, setProject] = useState({
    firebaseKey: firebaseKey || '',
    title: title || '',
    available: available || false,
    description: description || '',
    githubUrl: githubUrl || '',
    screenshot: screenshot || '',
    url: url || '',
    technologiesUsed: technologiesUsed || '',
    loom: loom || ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (project.firebaseKey) {
      updateProject(project).then((projectArray) => setProjects(projectArray));
      setEditing(false);
    } else {
      addProjects(project).then((projectArray) => setProjects(projectArray));
      setShowForm(false);
    }
  };
  const handleInputChange = (e) => {
    setProject((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.name === 'available' ? e.target.checked : e.target.value
    }));
  };

  return (
    <Form
      id="addProjectForm"
      autoComplete='off'
      onSubmit={handleSubmit}
      className='container'>
      <FormGroup>
        <Label for="title">Title</Label>
        <Input
          type="text"
          name="title"
          id="title"
          placeholder="Project Title"
          value={project.title}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input
          type="text"
          name="description"
          id="description"
          value={project.description}
          onChange={handleInputChange}
        />
        <FormText color="muted">
          Write Description of the Project
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label for="screenshot">Screen Shot</Label>
        <Input
          type="url"
          name="screenshot"
          id="screenshot"
          value={project.screenshot}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="loom">Loom Video</Label>
        <Input
          type="url"
          name="loom"
          id="loom"
          value={project.loom}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="technologies">Technologies Used</Label>
        <Input
          type="text"
          name="technologiesUsed"
          id="technologies"
          value={project.technologiesUsed}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="githubUrl">GitHub URL</Label>
        <Input
          type="url"
          name="githubUrl"
          id="githubUrl"
          value={project.githubUrl}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="depolyedSite">Deployed Site</Label>
        <Input
          type="url"
          name="url"
          id="deployedSite"
          value={project.url}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup tag="fieldset">
        <legend>Availability</legend>
        <FormGroup check>
          <Label check>
            <Input
              type="radio"
              name="available"
              id="available"
              checked={project.available}
              onChange={handleInputChange}
            />{' '}
            Available
          </Label>
        </FormGroup>
      </FormGroup>
      <Button color='info' type='submit'>Submit</Button>
    </Form>
  );
}

ProjectForm.propTypes = {
  firebaseKey: PropTypes.string,
  description: PropTypes.string,
  githubUrl: PropTypes.string,
  screenshot: PropTypes.string,
  technologiesUsed: PropTypes.string,
  title: PropTypes.string,
  loom: PropTypes.string,
  url: PropTypes.string,
  setProjects: PropTypes.func,
  available: PropTypes.any,
  setShowForm: PropTypes.func,
  setEditing: PropTypes.func
};
