import React, { useState } from 'react';
import './AcademicJourney.css';

// Import the images
import claretLogo from '../../../assets/images/claret_logo.png';
import pilarLogo from '../../../assets/images/pilar_logo.png';
import claretCampus from '../../../assets/images/claret_campus.jpg';
import pilarCampus from '../../../assets/images/pilar_campus.jpg';
import claretStudent from '../../../assets/images/claret_student.jpg';
import pilarStudent from '../../../assets/images/pilar_student.jpg';

// Import icons
import { FaGraduationCap, FaSchool, FaBook, FaMedal, FaCertificate, FaUserNurse } from 'react-icons/fa';

const AcademicJourney: React.FC = () => {
  const [selectedSchool, setSelectedSchool] = useState<null | string>(null);

  const schoolData = [
    {
      id: 'elementary',
      name: 'Elementary School',
      institution: 'Claret School of Lamitan',
      years: '2009-2015',
      logo: claretLogo,
      icon: <FaSchool className="timeline-icon" />,
      status: 'completed',
      details: {
        title: 'Elementary School Years',
        description: 'My formative years at Claret School of Lamitan provided me with a solid educational foundation. These years were crucial in developing my curiosity for learning and discovering my early interest in health sciences.',
        achievements: [
          'Participated in regional science competitions with health-related projects',
          'Awarded "Best in Science" for three consecutive years',
          'Active member of the junior health club and first aid team'
        ],
        image: claretStudent,
        campusImage: claretCampus,
        keyLearnings: 'Developed a foundation in critical thinking and scientific curiosity that would later support my nursing studies'
      }
    },
    {
      id: 'jhs',
      name: 'Junior High School',
      institution: 'Claret School of Lamitan',
      years: '2015-2019',
      logo: claretLogo,
      icon: <FaBook className="timeline-icon" />,
      status: 'completed',
      details: {
        title: 'Junior High School Experience',
        description: 'My four years in junior high school built upon my scientific curiosity and introduced me to more complex health concepts. I participated in biology and anatomy classes that sparked my interest in human physiology.',
        achievements: [
          'Led the school health committee in organizing health awareness campaigns',
          'Won first place in the regional science fair with a project on community health',
          'Graduated with high honors and a special citation for excellence in science'
        ],
        image: claretStudent,
        campusImage: claretCampus,
        keyLearnings: 'Developed leadership skills and a deeper understanding of how health education impacts communities'
      }
    },
    {
      id: 'shs',
      name: 'Senior High School',
      institution: 'Claret School of Lamitan',
      years: '2019-2021',
      logo: claretLogo,
      icon: <FaGraduationCap className="timeline-icon" />,
      status: 'completed',
      details: {
        title: 'Senior High School - STEM Track',
        description: 'I specialized in the Science, Technology, Engineering, and Mathematics (STEM) track during senior high school, with a focus on biology and chemistry. This period solidified my decision to pursue nursing as a profession.',
        achievements: [
          'Completed an advanced placement course in human anatomy and physiology',
          'Volunteered at local health centers during the COVID-19 pandemic',
          'Graduated as valedictorian with special recognition for community service'
        ],
        image: claretStudent,
        campusImage: claretCampus,
        keyLearnings: 'Gained hands-on experience in healthcare settings and developed empathy for patients during challenging times'
      }
    },
    {
      id: 'college',
      name: 'Bachelor of Science in Nursing',
      institution: 'Pillar College of Zamboanga',
      years: '2021-2025',
      logo: pilarLogo,
      icon: <FaUserNurse className="timeline-icon" />,
      status: 'completed',
      details: {
        title: 'BSN Degree - With Honors',
        description: 'I completed my Bachelor of Science in Nursing at Pillar College of Zamboanga with honors. The comprehensive program equipped me with both theoretical knowledge and clinical skills through hospital rotations and community health experiences.',
        achievements: [
          'Graduated Cum Laude with a GPA of 3.8/4.0',
          'Served as President of the Nursing Students Association',
          'Completed over 2,500 clinical hours across various healthcare settings',
          'Winner of the "Excellence in Clinical Practice" award',
          'Published research on improving patient communication in multicultural settings'
        ],
        image: pilarStudent,
        campusImage: pilarCampus,
        keyLearnings: 'Mastered clinical nursing skills while developing a holistic approach to patient care that addresses physical, emotional, and cultural needs',
        certifications: [
          'Basic Life Support (BLS) Certification',
          'Advanced Cardiac Life Support (ACLS) Certification',
          'Pediatric Advanced Life Support (PALS) Certification',
          'IV Therapy Certification'
        ]
      }
    }
  ];

  // Define grade information for each school period
  const gradeInfo = {
    elementary: [
      { year: '2009-2010', grade: 'Grade 1' },
      { year: '2010-2011', grade: 'Grade 2' },
      { year: '2011-2012', grade: 'Grade 3' },
      { year: '2012-2013', grade: 'Grade 4' },
      { year: '2013-2014', grade: 'Grade 5' },
      { year: '2014-2015', grade: 'Grade 6' }
    ],
    jhs: [
      { year: '2015-2016', grade: 'Grade 7' },
      { year: '2016-2017', grade: 'Grade 8' },
      { year: '2017-2018', grade: 'Grade 9' },
      { year: '2018-2019', grade: 'Grade 10' }
    ],
    shs: [
      { year: '2019-2020', grade: 'Grade 11' },
      { year: '2020-2021', grade: 'Grade 12' }
    ],
    college: [
      { year: '2021-2022', grade: 'First Year' },
      { year: '2022-2023', grade: 'Second Year' },
      { year: '2023-2024', grade: 'Third Year' },
      { year: '2024-2025', grade: 'Fourth Year' }
    ]
  };
  
  // Clinical rotations completed during nursing program
  const clinicalRotations = {
    college: [
      { department: 'Medical-Surgical Nursing', hours: 480, year: '2022-2023' },
      { department: 'Pediatric Nursing', hours: 320, year: '2022-2023' },
      { department: 'Obstetric Nursing', hours: 320, year: '2023-2024' },
      { department: 'Psychiatric Nursing', hours: 240, year: '2023-2024' },
      { department: 'Community Health Nursing', hours: 480, year: '2023-2024' },
      { department: 'Emergency & Critical Care', hours: 480, year: '2024-2025' },
      { department: 'Nursing Leadership & Management', hours: 240, year: '2024-2025' }
    ]
  };

  return (
    <section id="academic-journey" className="academic-journey-section">
      <div className="section-header">
        <h2>Academic Journey</h2>
        <p className="section-subtitle">Click on a milestone to explore my educational path</p>
      </div>

      <div className="education-timeline">
        {schoolData.map((school) => (
          <div 
            key={school.id} 
            className={`timeline-item ${selectedSchool === school.id ? 'active' : ''} ${school.status}`}
            onClick={() => setSelectedSchool(school.id === selectedSchool ? null : school.id)}
          >
            <div className="timeline-content">
              <div className="timeline-card-logo">
                <img src={school.logo} alt={`${school.institution} logo`} />
              </div>
              <div className="timeline-card-info">
                <h3 className="timeline-card-title">{school.name}</h3>
                <p className="timeline-card-institution">{school.institution}</p>
                <p className="timeline-card-years">{school.years}</p>
                <div className="timeline-card-footer">
                  <div className="view-details-link">
                    View details <span className="arrow-icon">{selectedSchool === school.id ? '▲' : '▼'}</span>
                  </div>
                  <div className="status-badge-container">
                    <span className="completed-badge">{school.status === 'completed' ? 'Completed' : 'In Progress'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedSchool && (
        <div className="school-detail-section">
          <div className="detail-wrapper">
            <div className="school-detail-container">
              {schoolData.find(s => s.id === selectedSchool)?.details && (
                <>
                  <div className="school-header-image">
                    <img 
                      src={schoolData.find(s => s.id === selectedSchool)?.details?.campusImage} 
                      alt="Campus view"
                      className="campus-image"
                    />
                    <div className="school-header-overlay">
                      <h2>{schoolData.find(s => s.id === selectedSchool)?.institution}</h2>
                      <p className="campus-location">Rizal Avenue, Lamitan, Basilan</p>
                      <div className="years-badge">{schoolData.find(s => s.id === selectedSchool)?.years}</div>
                    </div>
                  </div>
                  
                  <div className="school-details">
                    <div className="experience-info">
                      <h3 className="experience-title">{schoolData.find(s => s.id === selectedSchool)?.details?.title}</h3>
                      
                      <div className="experience-description">{schoolData.find(s => s.id === selectedSchool)?.details?.description}</div>
                      
                      <div className="achievements-container">
                        <h4 className="achievements-heading">Key Achievements</h4>
                        <ul className="achievements-list">
                          {schoolData.find(s => s.id === selectedSchool)?.details?.achievements.map((achievement, index) => (
                            <li key={index} className="achievement-item">
                              <span className="achievement-icon"><FaMedal /></span>
                              <span className="achievement-text">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {selectedSchool === 'college' && (
                        <div className="certifications-container">
                          <h4 className="certifications-heading">Professional Certifications</h4>
                          <ul className="certifications-list">
                            {schoolData.find(s => s.id === 'college')?.details?.certifications?.map((cert, index) => (
                              <li key={index} className="certification-item">
                                <span className="certification-icon"><FaCertificate /></span>
                                <span className="certification-text">{cert}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <div className="key-learnings">
                        <h4>Key Takeaways</h4>
                        <p>{schoolData.find(s => s.id === selectedSchool)?.details?.keyLearnings}</p>
                      </div>
                    </div>
                    
                    <div className="student-image-container">
                      <img 
                        src={schoolData.find(s => s.id === selectedSchool)?.details?.image} 
                        alt="Student photo" 
                        className="student-photo"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="school-sidebar">
              <div className="school-info-container">
                <div className="sidebar-school-logo">
                  <img src={schoolData.find(s => s.id === selectedSchool)?.logo} alt="School logo" />
                </div>
                <h3 className="sidebar-school-name">{schoolData.find(s => s.id === selectedSchool)?.institution}</h3>
                <div className="sidebar-grade-info">
                  <h4 className="sidebar-heading">Academic Years</h4>
                  <ul className="grade-list">
                    {gradeInfo[selectedSchool as keyof typeof gradeInfo]?.map((item, index) => (
                      <li key={index} className="grade-item">
                        <div className="grade-year">{item.year}</div>
                        <div className="grade-level">{item.grade}</div>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {selectedSchool === 'college' && (
                  <div className="clinical-rotations">
                    <h4 className="sidebar-heading">Clinical Experience</h4>
                    <ul className="rotation-list">
                      {clinicalRotations.college.map((rotation, index) => (
                        <li key={index} className="rotation-item">
                          <div className="rotation-department">{rotation.department}</div>
                          <div className="rotation-details">
                            <span className="rotation-hours">{rotation.hours} hours</span>
                            <span className="rotation-year">{rotation.year}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AcademicJourney;
