import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import CustomerDashboard from './components/CustomerDashboard';
import SignUp from './components/SignUp';
import AdminAddProduct from './components/AdminAddProduct';
import AdminViewProduct from './components/AdminViewProduct';
import CustomerViewProduct from './components/CustomerViewProduct'

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/adminDashboard' element={<AdminDashboard/>}>

          <Route path='adminAddProduct' element={<AdminAddProduct/>}></Route>
          <Route path='adminViewProduct' element={<AdminViewProduct/>}></Route>

        </Route>
        <Route path='/customerDashboard' element={<CustomerDashboard/>}>
              <Route path='customerViewProduct' element={<CustomerViewProduct/>}></Route>
        </Route>
        <Route path='/signUp' element={<SignUp/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
