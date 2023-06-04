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

const App = () =>{

  return (
    <div>
      <NavBar/>
      <div>
        <Router>
        <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/userform' element={<UserForm/>} exact/>
          <Route path='/github' element={<GitHub/>} exact/>
          <Route path='/profilesList' element={<ProfilesList/>} exacat/>
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
