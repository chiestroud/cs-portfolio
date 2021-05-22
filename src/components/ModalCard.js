import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter, CardImg
} from 'reactstrap';

const ModalCard = ({
  title,
  description,
  githubUrl,
  url,
  screenshot,
  technologiesUsed
}) => {
  const [modal, setModal] = useState(false);
  const [readMore, setReadMore] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button className="mt-4" id='projectBtn' onClick={toggle}>View {title}</Button>
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <CardImg className='modalImg' src={screenshot} alt={title} />
        <ModalBody>{readMore ? description : `${description.substring(0, 150)}...`
                }
              <a className="readMore" onClick={() => setReadMore(!readMore)}>
                {readMore ? ' Show less' : ' Read More'}
          </a>
        </ModalBody>
        <ModalFooter>
          <p>Technlogies used: {technologiesUsed}</p>
          <Button id='btnModal' onClick={toggle} href={githubUrl} target='_blank'>GitHub</Button>{' '}
          <Button id='btnModal' onClick={toggle} href={url} target='_blank'>URL</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

ModalCard.propTypes = {
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

export default ModalCard;
