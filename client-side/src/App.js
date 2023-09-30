import {Routes , Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policies from './pages/Policies';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />    
        <Route path='/register' element={<Register />} /> 
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
