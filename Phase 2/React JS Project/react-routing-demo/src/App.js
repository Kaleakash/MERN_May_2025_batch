import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import AboutUs from './AboutUs';
import Login from './Login';
import ContactUs from './ContactUs';
import NotFound from './NotFound';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
    <h3>React Routing Example</h3>
    <nav>
      <Link to="about_us">About Us</Link> |
      <Link to="contact_us">Contact Us</Link> |
      <Link to="login">Login</Link> 
    </nav>
    <hr/>

    <Routes>
      <Route path='' element={<Login/>}></Route>
      <Route path='/about_us' element={<AboutUs/>}></Route>
      <Route path='/contact_us' element={<ContactUs/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/home' element={<Dashboard/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
