import React from 'react'
import { Outlet } from 'react-router-dom';

import Header from '../Commom/Header';
import Footer from '../Commom/Footer';



const Layout = () => {
    return (
        <>
        
            <Header/>
                <main className='main-page'>
                    <Outlet/>
                </main>
            <Footer/>
        </>
    )
}

export default Layout;
