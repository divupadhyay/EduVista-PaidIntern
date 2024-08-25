import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import Login from './pages/auth/Login';
import Register from "./pages/auth/Register";
import Verify from "./pages/auth/Verify";
import Studys from './study/Studys';
import Study2 from './study/Study2';
import Study3 from './study/Study3';
import Study4 from './study/Study4';
import Study5 from './study/Study5';
import { UserData } from "./context/UserContext";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";


function App() {
 

const current_theme=localStorage.getItem('current_theme');  
const [theme,setTheme]=useState(current_theme?current_theme:'light');

useEffect(()=>{
  localStorage.setItem('current_theme',theme);
},[theme])
const { isAuth, user, loading } = UserData();
  return (
    
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
      
      <Routes>
        <Route path='/' element={<Home theme={theme} setTheme={setTheme}/>}/>
        <Route path='/about' element={<About theme={theme} setTheme={setTheme}/>}/>
        <Route path='/courses' element={<Courses theme={theme} setTheme={setTheme}/> }/>
        <Route path='/contactus' element={<Contact theme={theme} setTheme={setTheme}/> }/>
        <Route path='/study1' element={<Studys theme={theme} setTheme={setTheme}/>}/>
        <Route path='/study2' element={<Study2 theme={theme} setTheme={setTheme}/>}/>
        <Route path='/study3' element={<Study3 theme={theme} setTheme={setTheme}/>}/>
        <Route path='/study4' element={<Study4 theme={theme} setTheme={setTheme}/>}/>
        <Route path='/study5' element={<Study5 theme={theme} setTheme={setTheme}/>}/>
        <Route path="/login" element={isAuth ? <Home /> : <Login theme={theme} setTheme={setTheme} />} />
        <Route
              path="/register"
              element={isAuth ? <Home /> : <Register />}
            />
            <Route path="/verify" element={isAuth ? <Home /> : <Verify />} />
            <Route
              path="/forgot"
              element={isAuth ? <Home /> : <ForgotPassword />}
            />
            <Route
              path="/reset-password/:token"
              element={isAuth ? <Home /> : <ResetPassword />}
            />
      </Routes>
      <Footer theme={theme} setTheme={setTheme}/>
    </div>

  );
}

export default App;
