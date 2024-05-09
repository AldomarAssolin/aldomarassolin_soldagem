import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import 'primeicons/primeicons.css';
import '../static/css/aside.css'

import { authenticate } from '../OAuth/auth';

//Images
import Logo from '../assets/images/LogoTransp.png'
import { Link } from 'react-router-dom';


function Aside() {
    const [icon, setIcon] = useState(false)
    const [, setAuthenticated] = useState(true)
    const navigate = useNavigate();

    const asideShow = () => {
        const aside = document.querySelector('.aside')
        aside.classList.toggle('aside--show')
        if (icon === false) {
            setIcon(true)
        } else {
            setIcon(false)
        }
    }

    const handleLogout = (event) => {
        event.preventDefault();

        if (authenticate) {
            setAuthenticated(false)
            navigate('/')
        }
            
    };

    return (
        <aside className='aside'>
            <span className='btn-arrow' onClick={asideShow}>
                {
                    icon ?
                        <i className='pi pi-times icon-arrow icon-arrow-in' style={{
                            'fontSize':
                                '1.5em'
                        }}></i> : <i className='pi pi-bars icon-arrow' style={{ 'fontSize': '1.5em' }}></i>
                }
            </span>
            <header className='header-aside'>
                <div className="logo">
                    <img src={Logo} alt="Logomarca" />
                </div>
            </header>
            <main>
                <div className="aside-top">
                    <h3>Painel de Controle</h3>
                </div>
                <ul>
                    <li><Link to="/">
                        <i className='pi pi-home' style={{ 'fontSize': '1.5em', 'marginRight': '.5rem' }}></i>
                        Home</Link>
                    </li>
                    <li><Link to="/dashboard">
                        <i className='pi pi-wrench' style={{ 'fontSize': '1.5em', 'marginRight': '.5rem' }}></i>
                        Dashboard</Link>
                    </li>
                    <li><Link to="/dashboard/experience">
                        <i className='pi pi-briefcase' style={{ 'fontSize': '1.5em', 'marginRight': '.5rem' }}></i>
                        Experiências</Link>
                    </li>
                    <li><Link to="/dashboard/forms">
                        <i className='pi pi-cloud-upload' style={{ 'fontSize': '1.5em', 'marginRight': '.5rem' }}></i>
                        Formulários</Link>
                    </li>
                </ul>
                <div className='logoutInput'>
                    <i className='pi pi-sign-out' style={{ 'fontSize': '1.5em', 'marginRight': '.5rem' }}></i>
                    <input type="submit" value="Sair" onClick={handleLogout}/>
                </div>

            </main>
        </aside>
    )
}

export default Aside