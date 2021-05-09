import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Form, FormGroup, Label, Input, Button
} from 'reactstrap';
import { addTechnology, updateTechnology } from '../helpers/data/technologyData';

export default function TechnologyForm({
  setTechnologies, setTechForm, logo, firebaseKey, technologyName, setEditing
}) {
  const [technology, setTechnology] = useState({
    logo: logo || '',
    technologyName: technologyName || '',
    firebaseKey: firebaseKey || ''
  });

  const handleInputChange = (e) => {
    setTechnology((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (technology.firebaseKey) {
      updateTechnology(technology).then((technologiesArray) => setTechnologies(technologiesArray));
      setEditing(false);
    } else {
      addTechnology(technology).then((technologiesArray) => setTechnologies(technologiesArray));
      setTechForm(false);
    }
  };

  return (
    <Form
      id='addTechnologyForm'
      autoComplete='off'
      onSubmit={handleSubmit}
    >
      <FormGroup>
        <Label for="url">Add Picture of Technology</Label>
        <Input
          type="url"
          name="logo"
          id="logo"
          placeholder="Add logo"
          value={technology.logo}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="name">Technology Name</Label>
        <Input
          type="string"
          name="technologyName"
          id="technologyName"
          placeholder="Name of Technology"
          value={technology.technologyName}
          onChange={handleInputChange}
        />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

TechnologyForm.propTypes = {
  setTechnologies: PropTypes.func,
  setTechForm: PropTypes.func,
  logo: PropTypes.string,
  firebaseKey: PropTypes.string,
  technologyName: PropTypes.string,
  setEditing: PropTypes.func
};
