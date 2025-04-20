import React from 'react';
import { FaComments, FaBullhorn, FaLightbulb, FaHeart } from 'react-icons/fa';
import './RoleOfCommunication.css';

const RoleOfCommunication: React.FC = () => {
  return (
    <section id="communication-role" className="role-communication-section">
      <div className="section-header">
        <h2>The Role of Communication</h2>
        <p className="section-subtitle">In My Academic, Professional, and Personal Life</p>
      </div>

      <div className="role-container">
        <div className="role-grid">
          <div className="role-card">
            <div className="role-icon">
              <FaComments />
            </div>
            <h4>Building Connections</h4>
            <p>
              Effective communication forms the foundation of meaningful relationships,
              enabling individuals to connect on deeper levels and fostering mutual understanding.
            </p>
          </div>
          
          <div className="role-card">
            <div className="role-icon">
              <FaBullhorn />
            </div>
            <h4>Driving Change</h4>
            <p>
              Communication is a powerful catalyst for social and organizational change,
              enabling the spread of ideas and mobilizing individuals toward common goals.
            </p>
          </div>
          
          <div className="role-card">
            <div className="role-icon">
              <FaLightbulb />
            </div>
            <h4>Inspiring Innovation</h4>
            <p>
              Through effective communication, innovative ideas can be shared, refined,
              and implemented, leading to creative solutions to complex problems.
            </p>
          </div>
          
          <div className="role-card">
            <div className="role-icon">
              <FaHeart />
            </div>
            <h4>Fostering Empathy</h4>
            <p>
              Communication enables us to understand diverse perspectives and experiences,
              nurturing empathy and creating more inclusive environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoleOfCommunication;
