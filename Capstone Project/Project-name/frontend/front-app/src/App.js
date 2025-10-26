import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import CustomerDashboard from './components/CustomerDashboard';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/adminDashboard' element={<AdminDashboard/>}></Route>
        <Route path='/customerDashboard' element={<CustomerDashboard/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
