import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import './CoverPage.css';

const CoverPage = () => {
  return (
    <div className="cover-page">
      <div className="content">
        <div className="social-icons">
          <a href="#" aria-label="Facebook" className="social-icon">
            <FaFacebook />
          </a>
          <a href="#" aria-label="Instagram" className="social-icon">
            <FaInstagram />
          </a>
          <a href="#" aria-label="TikTok" className="social-icon">
            <FaTiktok />
          </a>
        </div>
        
        <h2 className="subtitle">I'M A NURSING STUDENT</h2>
        <h1 className="name">Franzine Myles Magsayo<br/>Delos Reyes</h1>
        <p className="school">From Pillar College of Zamboanga</p>
        <p className="course">BSN 1F</p>
        
        <div className="tagline">
          <p>Speaking with purpose, listening with intent, and connecting with meaning</p>
        </div>
        
        <div className="button-container">
          <a href="#about" className="learn-more">LEARN MORE</a>
          <a href="#contents" className="contents">TABLE OF CONTENTS</a>
        </div>
      </div>
    </div>
  );
};

export default CoverPage;
