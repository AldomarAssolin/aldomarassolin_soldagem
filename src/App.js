import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from './views/Layout/Layout';
import LayoutDsh from './views/dashboard/Layout/Layout'
import NotFound from './views/pages/NotFound'
//import Single from './views/pages/single';

import Home from './views/pages/Home'
import About from './views/pages/About'
import Experience from './views/pages/Experience'
import Contact from './views/pages/Contact'

import DashboardHome from './views/dashboard/pages/Dashboard'
import Bio from './views/dashboard/pages/Experiences'
import ExperienceData from './views/dashboard/pages/Experiences'
import Forms from './views/dashboard/pages/Forms'
import Login from './views/dashboard/pages/Login'
import UserForm from './views/dashboard/components/UserForm';

import { authenticate } from './views/dashboard/OAuth/auth';
import { useEffect, useState } from 'react';

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if(token){
      setAuthenticated(true);
    }
  },[]);

  const handleLogin = (username, password) => {
    //alert(`Login: ${username}<br>Senha: ${password}`)
    const authenticated = authenticate(username, password)
    if (!authenticated) {
      alert("Credenciais inválidas! Tente novamente.")
    } else {
      setAuthenticated(true)
    }
  };
  // isAuthenticated ? <LayoutDsh /> : <Login onLogin={handleLogin} />
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/dashboard" element={isAuthenticated ? <LayoutDsh /> : <Login onLogin={handleLogin} />}>
          <Route index element={<DashboardHome />} />
          <Route path='/dashboard/bio' element={<Bio />} />
          <Route path='/dashboard/experience' element={<ExperienceData />} />
          <Route path='/dashboard/forms' element={<Forms />} />
          <Route path='/dashboard/UserForm' element={<UserForm />} />
        </Route>
        {/* <Route path='/login' element={<Login />} /> */}


        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

/* <Single/>  */

/**
 * <Route path="/dashboard" element={<LayoutDsh />}>
          <Route index element={<DashboardHome/>}/>
          <Route path='/bio' element={<Bio/>}/>
          <Route path='/login' element={<Login/>}/>
        </Route>
 */