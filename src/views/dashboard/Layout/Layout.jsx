
import Aside from '../components/Aside';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';

import '../static/css/layout.css'

function Layout() {
  return (
    <div className='layout'>
            <Aside/>
        <div className="main">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    </div>
  )
}

export default Layout