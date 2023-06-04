import logo from './logo.svg';
import './App.css';
import './index.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import UserForm from './components/UserForm';
import GitHub from './components/Github';
import ProfilesList from './components/ProfilesList';
import PortfolioGenerator from './components/PortfolioGenerator';
import OpenSourceProjects from './components/OpenSourceProjects';
import NewProjectForm from './components/NewProjectForm';
import LearningResources from './components/LearningResources';
import TestimonialsSection from './components/TestimonailsSection';
import PortfolioShowcase from './components/PortfolioShowcase';
import ProgressTracker from './components/ProgressTracker';
import InteractiveQuizzes from './components/InteractiveQuizzes';
import ResourcesLibrary from './components/ResourcesLibrary.js';
import CommunityForum from './components/CommunityForum';

const App = () => {

  return (
    <div>
      <NavBar />
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/home' element={<Home/>} exact/>
            <Route path='/userform' element={<UserForm />} exact />
            <Route path='/github' element={<GitHub />} exact />
            <Route path='/projects' element = {<OpenSourceProjects/>} exact/>
            <Route path='/profilesList' element={<ProfilesList />} exacat />
            <Route path='/newProjectForm' element={<NewProjectForm/>} exact/>
            <Route path='/learningResources' element={<LearningResources/>} exact/>
            <Route path='/testimonals' element={<TestimonialsSection/>} exact/>
            <Route path='/showcase' element={<PortfolioShowcase/>} exact/>
            <Route path='/progressTracker' element={<ProgressTracker/>} exact/>
            <Route path='/interactiveQuizzes' element={<InteractiveQuizzes/>} exact/>
            <Route path='/resourceLibrary' element={<ResourcesLibrary/>} exact/>
            <Route path='/communityForum' element={<CommunityForum/>} exact/>

            <Route
              path="/portfolio/:username"
              element={<PortfolioGenerator />}
              exact
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
