import Navbar from './components/Navbar/Navbar';
import CoverPage from './components/CoverPage/CoverPage';
import AcademicJourney from './components/AboutMe/AcademicJourney';
import RoleOfCommunication from './components/AboutMe/RoleOfCommunication';
import NotableCommunicationExperience from './components/AboutMe/NotableCommunicationExperience';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CoverPage />
      <AcademicJourney />
      <RoleOfCommunication />
      <NotableCommunicationExperience />
      {/* Additional sections will be added here */}
    </div>
  );
}

export default App;
