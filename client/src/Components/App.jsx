import React, { useEffect, useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Content from './Content';
import Service from './Service';
import Lawyer from './Lawyer';
import Contact from './Contact';
import Footer from './Footer/Footer';
import Sign from './Login/Sign';
import Signup from './Signup/Signup';
import Lawyers from './Lawyers/Lawyers';
import Criminal from './Criminal/Criminal';
import Bussiness from './Bussiness/Bussiness';
import Insurance from './Insurance/Insurance';
import Family from './Family/Family';
import Drug from './DrugOffense/Drug';
import Employment from './Employment/Employment';
import Property from './Property/Property';
import Contactlink from './Contact/Contactlink';
import Fire from './FireAccident/Fire';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Context } from './main';

function App() {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('https://legalsathi.onrender.com/api/v1/user/litigant/me', {
          withCredentials: true,
        });
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
    setIsAuthenticated(false);
    setUser({});
      }
    };
    fetchUser();
  }, [isAuthenticated]);

  return (
    <div className='App'>
      <Router>
        <Routes>
          {/* Home Page */}
          <Route path='/' element={
            <>
              <Header />
              <Content />
              <Service />
              <Lawyer />
              <Contact />
              <Footer />
            </>
          } />
          {/* Other Routes */}
          <Route path='/login' element={<Sign />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/lawyer' element={<Lawyers />} />
          <Route path='/criminal' element={<Criminal />} />
          <Route path='/bussiness' element={<Bussiness />} />
          <Route path='/insurance' element={<Insurance />} />
          <Route path='/family' element={<Family />} />
          <Route path='/drug' element={<Drug />} />
          <Route path='/employment' element={<Employment />} />
          <Route path='/property' element={<Property />} />
          <Route path='/contact' element={<Contactlink />} />
          <Route path='/fire' element={<Fire />} />
          
        </Routes>

        
      </Router>
      <ToastContainer position='top-right' theme='dark' transition={Bounce} />
    </div>
  );
}

export default App;
