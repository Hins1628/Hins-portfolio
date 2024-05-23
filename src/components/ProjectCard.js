import { Col } from "react-bootstrap";
import githubIcon from '../assets/img/github.png';

import React, { useState, useEffect, useRef } from 'react';

export const ProjectCard = ({ title, description, sourcecodeUrl, imgUrl, relatedskill }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalId = useRef(null);

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
    return () => clearInterval(intervalId.current); // Clear the interval when the component unmounts
  }, []);

  return (
    <Col size={12} sm={6} md={4} onMouseEnter={startInterval} onMouseLeave={stopInterval}>
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
          <div className="proj-text ">
            {Array.isArray(description) ? description.map((desc, index) => (
              <li key={index}>{desc}</li>
            )) : <li>{description}</li>}
          </div>
          <span className="relatedskill">{relatedskill.join(' ')}</span>
        </ul>
      </div>
    </Col>
  )
}