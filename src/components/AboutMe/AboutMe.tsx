import React from 'react';
import AcademicJourney from './AcademicJourney';
import RoleOfCommunication from './RoleOfCommunication';
import NotableCommunicationExperience from './NotableCommunicationExperience';
import './AboutMe.css';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="section-underline"></div>
        
        <div className="about-content">
          <div className="subsection-wrapper">
            <AcademicJourney />
          </div>
          <div className="subsection-wrapper">
            <RoleOfCommunication />
          </div>
          <div className="subsection-wrapper">
            <NotableCommunicationExperience />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
