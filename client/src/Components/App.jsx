// import { useEffect, useContext } from 'react';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './Header';
// import Content from './Content';
// import Service from './Service';
// import Lawyer from './Lawyer';
// import Contact from './Contact';
// import Footer from './Footer/Footer';
// import Sign from './Login/Sign';
// import Signup from './Signup/Signup';
// import Lawyers from './Lawyers/Lawyers';
// import Criminal from './Criminal/Criminal';
// import Bussiness from './Bussiness/Bussiness';
// import Insurance from './Insurance/Insurance';
// import Family from './Family/Family';
// import Drug from './DrugOffense/Drug';
// import Employment from './Employment/Employment';
// import Property from './Property/Property';
// import Contactlink from './Contact/Contactlink';
// import Fire from './FireAccident/Fire';
// import { Bounce, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';
// import { Context } from './main';
// import './index.css'

// function App() {
//   const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await axios.get('http://localhost:5757/api/v1/user/litigant/me', {
//           withCredentials: true,
//         });
//         setIsAuthenticated(true);
//         setUser(response.data.user);
//       } catch (error) {
//     setIsAuthenticated(false);
//     setUser({});
//       }
//     };
//     fetchUser();
//   }, [isAuthenticated]);

//   return (
//     <div className='App'>
//       <Router>
//         <Routes>
//           {/* Home Page */}
//           <Route path='/' element={
//             <>
//               <Header />
//               <Content />
//               <Service />
//               <Lawyer />
//               <Contact />
//               <Footer />
//             </>
//           } />
//           {/* Other Routes */}
//           <Route path='/login' element={<Sign />} />
//           <Route path='/signup' element={<Signup />} />
//           <Route path='/lawyer' element={<Lawyers />} />
//           <Route path='/criminal' element={<Criminal />} />
//           <Route path='/bussiness' element={<Bussiness />} />
//           <Route path='/insurance' element={<Insurance />} />
//           <Route path='/family' element={<Family />} />
//           <Route path='/drug' element={<Drug />} />
//           <Route path='/employment' element={<Employment />} />
//           <Route path='/property' element={<Property />} />
//           <Route path='/contact' element={<Contactlink />} />
//           <Route path='/fire' element={<Fire />} />        
//         </Routes>

        
//       </Router>
//       <ToastContainer position='top-right' theme='dark' transition={Bounce} />
//     </div>
//   );
// }

// export default App;



import { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Content from './Content';
import Service from './Service';
import Contact from './Contact';
import Footer from './Footer/Footer';
import Sign from './SignIn/Sign';
import Signup from './Signup/Signup';
import Lawyers from './Lawyers/Lawyers';
import Criminal from './Criminal/Criminal';
import Bussiness from './Bussiness/Bussiness';
import Insurance from './Insurance/Insurance';
import Family from './Family/Family';
import Drug from './DrugOffense/Drug';
import Aboutus from './Aboutus/Aboutus';
import Employment from './Employment/Employment';
import Property from './Property/Property';
import Consulation from './Consulation/Consulation';
import Fire from './FireAccident/Fire';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Context } from './main';
import './App.css';
import './index.css';
import Attorneys from './Attorneys';
import LawyerProfile from './Lawyers/LawyerProfile';

const HomePage = () => (
  <>
    <Header />
    <Content />
    <div className='border-b-2 border-red-400'/>
    <Service />
    <div className='border-b-2 border-red-400'/>
    <Attorneys />
    <div className='border-b-2 border-red-400'/>
    <Contact />
    <div className='border-b-2 border-red-400'/>
    <Footer />
  </>
);

function App() {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5757/api/v1/user/litigant/me',
          { withCredentials: true }
        );
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
  }, []);

  return (
    <div className='App'>
      <Router>
        <ToastContainer position='top-right' theme='dark' transition={Bounce} />
        <Routes>
          <Route path='/' element={<HomePage />} />
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
          <Route path='/consulation' element={<Consulation />} />
          <Route path='/fire' element={<Fire />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/lawyer/:id' element={<LawyerProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
