import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'




const Header = () => {

  const [scroll, setScroll] = useState(false)

  useEffect(() => {

    function handleScroll() {
      // Scroll header
      const currentScrollPos = window.scrollY
      //const header = document.querySelector('#header')

      //console.log(currentScrollPos)

      if (currentScrollPos < 100) {
        setScroll(false)
      } else {
        setScroll(true)
      }

    }

    window.addEventListener('scroll', handleScroll, {passive: true});

    return () => {
      window.removeEventListener('scroll', handleScroll); // Limpa o event listener quando o componente é desmontado
    };

  }, [scroll])


  return (
    <header id='header' className={`header-container ${scroll && 'header-scrolled'}`}>
      <NavBar />
    </header>
  )
}



export default Header