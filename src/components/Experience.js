import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import React, { useRef, useEffect } from 'react';
import 'animate.css';
import "react-vertical-timeline-component/style.min.css";
import CASWCMC from "../assets/img/Caswcmc_logo.png";
import AVATech from "../assets/img/avatech_logo.png";
import CareerHackers from "../assets/img/career_hackers_logo.png";




export const Experience = () => {

  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated', 'animate__fadeIn');
        } else {
          entry.target.classList.remove('animate__animated', 'animate__fadeIn');
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );
  
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const experiences = [
    {
      title: "Part Time - IT support",
      company_name: "Christian Alliance SW Chan Memorial College",
      icon: CASWCMC,
      date: "Oct 2021 - Apr 2022",
      points: [
        "Assist and answer teachers' questions about classes device problem on the secondary school campus.",
      ],
    },
    {
      title: "Freelance - Research Assistant",
      company_name: "AVATech Innovation Limited",
      icon: AVATech,
      date: "Apr 2022 - May 2022",
      points: [
        "Research and analysis of the current WebAR Library.",
        "Develop a treasure hunt game for children with WebAR using three.js, JavaScript, CSS and html.",
      ],
    },
    {
      title: "Internship - Software Engineer",
      company_name: "Career Hackers | Speakmanity Limited",
      icon: CareerHackers,
      date: "June 2024 - Present",
      points: [
        "Develop a 3D metaverse world using three.js",
        "Contributing to both frontend and backend platform using React, three.js, Node.js, MongoDB.",
        "Acquired experience in using Git for version control and following agile development methodologies.",
      ],
    },
  ];
    return (
    <section className="work" id="work">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div ref={sectionRef}>
                <h2>Working Experience</h2>
                <div className="parent-container">
                <VerticalTimeline>
                  {experiences.map((experience, index) => (
                    <VerticalTimelineElement
                      className={`animate__animated animate__slideInRight ${index % 2 === 0 ? 'timeline-element-left' : 'timeline-element-right'}`}
                      key={`exp-${index}`}
                      date={experience.date}
                      icon={<img src={experience.icon} alt={experience.company_name} />}
                    >
                      <div className="description-list">
                        <h3 className="vertical-timeline-element-title">{experience.title}</h3>
                        <div className="top-spacing">
                          <h5 className="vertical-timeline-element-subtitle">{experience.company_name}</h5>
                          <ul className="top-spacing">
                            {experience.points.map((point, pointIndex) => (
                              <li key={`point-${pointIndex}`}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      </div>               
                    </VerticalTimelineElement>
                  ))}
            
                </VerticalTimeline>
                </div>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
