import logo from './logo.svg';
import './App.css';
import './index.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import UserForm from './components/UserForm';
import GitHub from './components/Github';

function App() {
  return (
    <div>
      <NavBar/>
      <div>
        <Router>
        <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/userform' element={<UserForm/>} exact/>
          <Route path='/github' element={<GitHub/>} exact/>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
