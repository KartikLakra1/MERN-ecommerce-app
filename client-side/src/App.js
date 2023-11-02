import {Routes , Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policies from './pages/Policies';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './Components/Routes/Private';
import ForgotPassword from './pages/Auth/ForgotPassword';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} /> 

        <Route path='/dashboard' element={<PrivateRoute />}>
          <Route path='' element={<Dashboard />} /> 
        </Route>

        <Route path='/register' element={<Register />} />
        
        <Route path='/forgot-password' element={<ForgotPassword/>} />
        
        <Route path='/login' element={<Login />} />     
        <Route path='/about' element={<About />} />  
        <Route path='/contact' element={<Contact />} />  
        <Route path='/policies' element={<Policies />} />  
        <Route path='/*' element={<PageNotFound />} />    
      </Routes>
      
    </>
  );
}

export default App;
