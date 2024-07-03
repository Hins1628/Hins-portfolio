import { Col, Modal } from "react-bootstrap";
import githubIcon from '../assets/img/github.png';
import React, { useState, useEffect, useRef } from 'react';

export const ProjectCard = ({ title, description, sourcecodeUrl, imgUrl, relatedskill }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalId = useRef(null);
  const [showModal, setShowModal] = useState(false);

  const startInterval = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imgUrl.length); // Change the image immediately
    intervalId.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imgUrl.length);
    }, 2000);
  };

  const stopInterval = () => {
    clearInterval(intervalId.current);
  };

  useEffect(() => {
    if (showModal) {
      startInterval();
    } else {
      stopInterval();
    }
  
    return () => clearInterval(intervalId.current); // Clear the interval when the component unmounts
  }, [showModal]);

  const handleShow = () => {
    if (!showModal) {
      setShowModal(true);
    }
  };

  const handleClose = () => {
    console.log('handleClose called');
    setShowModal(false);
    stopInterval(); // Stop the interval when the modal is closed
  };

  return (
    <Col size={12} sm={6} md={4} onClick={handleShow}>
      <div className="proj-imgbx" style={{ position: 'relative' }}>
        <img src={imgUrl[currentImageIndex]} />
        <button style={{ 
          position: 'absolute', 
          top: '10px', 
          right: '10px' 
        }}>
          <div className="github-icon" style={{ display: 'flex', alignItems: 'center' }}>
            {sourcecodeUrl ? (
              <a href={sourcecodeUrl}>
                <img src={githubIcon} alt="Click here" />
              </a>
            ) : null}
          </div>
        </button>
        <h4 className="title-spacing text-center">{title}</h4>
        <ul className="description-list">
        <div className="proj-text">
          {Array.isArray(description) ? <li>{description[0]}</li> : <li>{description}</li>}
        </div>
        <span className="relatedskill">{relatedskill.join(' ')}</span>
      </ul>
      </div>

      <Modal show={showModal} onHide={handleClose} dialogClassName="custom-modal">
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-body-content">
          <img src={imgUrl[currentImageIndex]} className="modal-image" />
          <div className="modal-description">
            {Array.isArray(description) ? description.map((desc, index) => (
              <p key={index} className="modal-paragraph">{desc}</p>
            )) : <p className="modal-paragraph">{description}</p>}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <span className="relatedskill">{relatedskill.join(' ')}</span>
        <div className="github-icon" style={{ display: 'flex', alignItems: 'center' }}>
          {sourcecodeUrl ? (
            <a href={sourcecodeUrl}>
              <img src={githubIcon} alt="Click here" />
            </a>
          ) : null}
        </div>
        
      </Modal.Footer>
    </Modal>
    </Col>
  )
}