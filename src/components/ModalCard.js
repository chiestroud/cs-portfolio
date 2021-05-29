import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

const ModalCard = ({
  title,
  description,
  githubUrl,
  url,
  technologiesUsed,
  loom
}) => {
  const [modal, setModal] = useState(false);
  const [readMore, setReadMore] = useState(false);

  const toggle = () => setModal(!modal);
  // https://lh3.googleusercontent.com/w-z38oO6XVRvueOBdacjppFF3NnIG_LQM4CBmwtv-Bc6cd9wX9gMSLPrV4wDGvJvH6AND5oVvEZXz6KFNV2BF5VeJvY40VohJBXAaSLeiy-KVxKSMAh-2c7JVAy_zkBGC0s0-3eroos=w2400
  return (
    <div>
      <Button className="mt-4" id='viewBtn' onClick={toggle}>View {title}</Button>
      <Modal className="modalCard" isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <div className="videoContainer"><iframe width="100%" height="100%" src={loom}></iframe></div>
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
  user: PropTypes.any,
  loom: PropTypes.string
};

export default ModalCard;
