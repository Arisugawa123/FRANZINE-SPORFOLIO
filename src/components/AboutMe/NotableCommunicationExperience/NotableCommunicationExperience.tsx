import React from 'react';
import { FaMicrophoneAlt, FaNewspaper, FaFilm } from 'react-icons/fa';
import './NotableCommunicationExperience.css';

const NotableCommunicationExperience: React.FC = () => {
  return (
    <section id="notable-experience" className="notable-experience-section">
      <div className="section-header">
        <h2>Notable Communication Experience</h2>
        <p className="section-subtitle">Highlights from my communication journey</p>
      </div>

      <div className="experience-wrapper">
        <div className="experience-container">
          <div className="experience-card">
            <div className="experience-header">
              <div className="experience-icon-container">
                <FaMicrophoneAlt />
              </div>
              <div className="experience-title">
                <h4>Public Speaking Competition</h4>
                <p className="experience-subtitle">National University Speech Contest</p>
              </div>
            </div>
            <div className="experience-details">
              <p>
                Led a team of speakers to the finals, developing persuasive speeches on 
                contemporary social issues. Received recognition for exceptional delivery 
                and compelling content structure.
              </p>
            </div>
          </div>

          <div className="experience-card">
            <div className="experience-header">
              <div className="experience-icon-container">
                <FaNewspaper />
              </div>
              <div className="experience-title">
                <h4>Editorial Leadership</h4>
                <p className="experience-subtitle">University Publication</p>
              </div>
            </div>
            <div className="experience-details">
              <p>
                Served as the chief editor for the university newspaper, overseeing content 
                creation, editing processes, and publication schedules. Implemented new editorial 
                standards that improved content quality.
              </p>
            </div>
          </div>

          <div className="experience-card">
            <div className="experience-header">
              <div className="experience-icon-container">
                <FaFilm />
              </div>
              <div className="experience-title">
                <h4>Documentary Production</h4>
                <p className="experience-subtitle">Visual Storytelling Project</p>
              </div>
            </div>
            <div className="experience-details">
              <p>
                Produced and directed a documentary exploring local cultural narratives, 
                employing visual communication techniques to convey complex social concepts. 
                The project was selected for screening at a regional film festival.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotableCommunicationExperience;
