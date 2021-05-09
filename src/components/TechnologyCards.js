import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, Button } from 'reactstrap';
import TechnologyForm from '../views/TechnologyForm';
import { deleteTechnology } from '../helpers/data/technologyData';

export default function TechnologyCards({
  firebaseKey,
  technologyName,
  logo,
  setTechnologies,
  setTechForm
}) {
  const [editing, setEditing] = useState(false);
  const handleClick = (type) => {
    if (type === 'edit') {
      setEditing((prevState) => !prevState);
    } else if (type === 'delete') {
      deleteTechnology(firebaseKey).then((technologyArray) => setTechnologies(technologyArray));
    }
  };

  return (
    <div>
      <Card key={firebaseKey} className='m-4 techCard' >
        <CardImg id="technologyImg"top width="100%" src={logo} alt={technologyName} />
        <Button color="primary" size="sm" onClick={() => handleClick('edit')}>
          {editing ? 'Close' : 'Edit'}
        </Button>{' '}
        {editing
          && <TechnologyForm key={firebaseKey}
          firebaseKey={firebaseKey}
          logo={logo}
          technologyName={technologyName}
          setEditing={setEditing}
          setTechForm={setTechForm}
          setTechnologies={setTechnologies}
        />
        }
        <Button color="danger" size="sm" onClick={() => handleClick('delete')}>Delete</Button>
      </Card>
    </div>
  );
}

TechnologyCards.propTypes = {
  firebaseKey: PropTypes.string,
  technologyName: PropTypes.string,
  logo: PropTypes.string,
  setTechnologies: PropTypes.func,
  setTechForm: PropTypes.func
};
