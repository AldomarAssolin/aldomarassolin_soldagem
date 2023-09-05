import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Routers from '../../routes/Routes';
import { Footer } from '../Commom/Footer';
import Header from '../Commom/Header';


export const Layout = () => {
    return (
        <>
            <BrowserRouter>
            
                <Header />
                    <main style={{minHeight:'80vh'}}>
                        <Routers />
                    </main>
                <Footer/>
            </BrowserRouter>
        </>
    )
}
