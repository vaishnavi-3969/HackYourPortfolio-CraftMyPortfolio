import logo from './logo.svg';
import './App.css';
import './index.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import UserForm from './components/UserForm';
import GitHub from './components/Github';
import ProfilesList from './components/ProfileList';

const App = () =>{
  // const username = UserForm.username;

  return (
    <div>
      <NavBar/>
      <div>
      {/* <GitHub username={username}/> */}
        <Router>
        <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/userform' element={<UserForm/>} exact/>
          <Route path='/github' element={<GitHub/>} exact/>
          <Route path='/profilesList' element={<ProfilesList/>} exacat/>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
