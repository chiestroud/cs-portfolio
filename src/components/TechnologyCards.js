import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, Button } from 'reactstrap';

export default function TechnologyCards({
  firebaseKey,
  technologyName,
  logo
}) {
  return (
    <div>
      <Card key={firebaseKey} className='m-4 techCard' >
        <CardImg id="technologyImg"top width="100%" src={logo} alt={technologyName} />
        <Button>Edit</Button>
        <Button>Delete</Button>
      </Card>
    </div>
  );
}

TechnologyCards.propTypes = {
  firebaseKey: PropTypes.string,
  technologyName: PropTypes.string,
  logo: PropTypes.string,
  setTechnologies: PropTypes.func
};
