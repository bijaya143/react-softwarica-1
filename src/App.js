import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Register from './pages/authentication/register/Register';
import Login from './pages/authentication/login/Login';
import Navbar from './components/Navbar';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminUpdate from './pages/admin/AdminProductUpdate';
import AdminRoute from './protectedRoutes/AdminRoute';
import UserRoute from './protectedRoutes/UserRoute';
import Profile from './pages/profile/Profile';

function App() {
  return (
    <Router>
      <Navbar/>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>

        <Route element={<UserRoute/>}>
      <Route path='/profile' element={<Profile/>}/>
        </Route>
        {/** Admin */}
        <Route element={<AdminRoute/>}>
        <Route path='/admin/product/:id' element={<AdminUpdate/>}/>
        <Route path='/admin/dashboard' element={<AdminDashboard/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
