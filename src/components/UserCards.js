import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardText
} from 'reactstrap';

export default function TechnologyCards({
  firebaseKey,
  fullName,
  email
}) {
  return (
      <Card key={firebaseKey} className='techCard' >
      <CardText className='userName'>{fullName}</CardText>
      <CardText className='userName'>{email}</CardText>
      </Card>
  );
}

TechnologyCards.propTypes = {
  firebaseKey: PropTypes.string,
  fullName: PropTypes.string,
  email: PropTypes.string
};
