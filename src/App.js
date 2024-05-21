import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Register from './pages/authentication/register/Register';
import Login from './pages/authentication/login/Login';
import Navbar from './components/Navbar';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminDashboard from './pages/admin/AdminDashboard';

function App() {
  return (
    <Router>
      <Navbar/>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>

        {/** Admin */}
        <Route path='/admin/dashboard' element={<AdminDashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
