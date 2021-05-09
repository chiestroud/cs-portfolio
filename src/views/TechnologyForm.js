import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Form, FormGroup, Label, Input, Button
} from 'reactstrap';
import { addTechnology } from '../helpers/data/technologyData';

export default function TechnologyForm({ setTechnologies }) {
  const [technology, setTechnology] = useState({
    logo: '',
    technologyName: ''
  });

  const handleInputChange = (e) => {
    setTechnology((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTechnology(technology).then((technologiesArray) => setTechnologies(technologiesArray));
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
  setTechnologies: PropTypes.func
};
