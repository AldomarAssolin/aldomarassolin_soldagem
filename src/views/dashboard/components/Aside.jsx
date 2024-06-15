import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import 'primeicons/primeicons.css';
import '../static/css/aside.css'

import { authenticate } from '../OAuth/auth';

//Images
import Logo from '../assets/images/LogoTransp.png'
import { Link } from 'react-router-dom';
import DataList from '../../components/DataList';
import List from '../../components/List'
import ListItems from '../../components/ListItems';


function Aside({ name, ...props }) {
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

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <aside className='aside'>
            <Button onClick={handleShow} className="me-2 icon-arrow bg-transparent">
                <i className='pi pi-bars' style={{ 'fontSize': '1.5em', 'marginRight': '.5rem' }}></i>
                {name}

            </Button>
            <Offcanvas show={show} onHide={handleClose} {...props} className='bg-secondary '>
                <Offcanvas.Header closeButton className='header-aside' closeVariant='light'>
                    <div className="logo">
                        <img src={Logo} alt="Logomarca" />
                    </div>
                </Offcanvas.Header>
                <Offcanvas.Body className='aside-top'>


                    <List classes='list-aside'>
                        <Link to="/">
                            <i className='pi pi-home' style={{ 'fontSize': '1.5em', 'marginRight': '.5rem' }}></i>
                            Home
                        </Link>
                        <Link to="/dashboard">
                            <i className='pi pi-wrench' style={{ 'fontSize': '1.5em', 'marginRight': '.5rem' }}></i>
                            Dashboard
                        </Link>
                        <Link to="/dashboard/experience">
                            <i className='pi pi-briefcase' style={{ 'fontSize': '1.5em', 'marginRight': '.5rem' }}></i>
                            Experiências
                        </Link>
                    </List>



                    <hr />
                    <details className='px-3 text-light list-aside'>
                        <summary>
                            <i className='pi pi-cloud-upload' style={{ 'fontSize': '1.5em', 'marginRight': '.5rem' }}></i>
                            Formulários
                        </summary>
                        <Link to="/dashboard/UserForm" className='list-aside underline-none'>
                            <i className='pi pi-user' style={{ 'fontSize': '1.5em', 'marginRight': '.5rem' }}></i>
                            Cadastrar Usuário
                        </Link>
                    </details>



                    <div className='logoutInput'>
                        <i className='pi pi-sign-out' style={{ 'fontSize': '1.5em', 'marginRight': '.5rem' }}></i>
                        <Button as='input' type="submit" value="Sair" onClick={handleLogout} className='bg-transparent' />
                    </div>


                </Offcanvas.Body>
            </Offcanvas>
        </aside>
    );
}

// return (
//     <aside className='aside'>
//         <span className='btn-arrow' onClick={asideShow}>
//             {
//                 icon ?
//                     <i className='pi pi-times icon-arrow icon-arrow-in' style={{
//                         'fontSize':
//                             '1.5em'
//                     }}></i> : <i className='pi pi-bars icon-arrow' style={{ 'fontSize': '1.5em' }}></i>
//             }
//         </span>
//         <header className='header-aside'>
//             <div className="logo">
//                 <img src={Logo} alt="Logomarca" />
//             </div>
//         </header>
//         <main>
//             <div className="aside-top">
//                 <h3>Painel de Controle</h3>
//             </div>
//             <ul>
//                 <li><Link to="/">
//                     <i className='pi pi-home' style={{ 'fontSize': '1.5em', 'marginRight': '.5rem' }}></i>
//                     Home</Link>
//                 </li>
//                 <li><Link to="/dashboard">
//                     <i className='pi pi-wrench' style={{ 'fontSize': '1.5em', 'marginRight': '.5rem' }}></i>
//                     Dashboard</Link>
//                 </li>
//                 <li><Link to="/dashboard/experience">
//                     <i className='pi pi-briefcase' style={{ 'fontSize': '1.5em', 'marginRight': '.5rem' }}></i>
//                     Experiências</Link>
//                 </li>
//                 <hr />
//                 <details className='px-3'>
//                     <summary>
//                         <i className='pi pi-cloud-upload' style={{ 'fontSize': '1.5em', 'marginRight': '.5rem' }}></i>
//                         Formulários
//                     </summary>
//                     <li><Link to="/dashboard/UserForm">
//                         <i className='pi pi-user' style={{ 'fontSize': '1.5em', 'marginRight': '.5rem' }}></i>
//                         Cadastrar Usuário</Link>
//                     </li>
//                 </details>
//             </ul>
//             <div className='logoutInput'>
//                 <i className='pi pi-sign-out' style={{ 'fontSize': '1.5em', 'marginRight': '.5rem' }}></i>
//                 <input type="submit" value="Sair" onClick={handleLogout} />
//             </div>

//         </main>
//     </aside>
// )
//}

export default Aside