
import './App.css';
import './components/logo.png';
import React from 'react';
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import LoginPage from './components/login.js';
import ForgetPage from './components/forgetpassword.js';
import CodePage from './components/code.js';
import ResetPage from './components/reset.js';
import HomePage from './components/home.js';
import DepartmentPage from './components/deparments';
import { AdminPage } from './components/trafficofficer';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/forgetpassword" element={<ForgetPage/>} />
        <Route exact path="/code" element={<CodePage/>} />
        <Route exact path="/reset" element={<ResetPage/>} />
        <Route exact path="/login" element={<LoginPage/>} />
        <Route exact path="/home" element={<HomePage/>} />
        <Route exact path="/departments" element={<DepartmentPage/>} />
        <Route exact path="/trafficofficer" element={<AdminPage/>} />
        
       
      </Routes>

    </Router>


  );
}


export default App;
