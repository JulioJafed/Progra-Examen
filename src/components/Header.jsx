//import React from 'react'
import "../components/header.css"
import Logo from '../img/Logo.png'
const Header = () => {
  return (
    <>  <div className="Tituloconten">
            <p className="Titul">Julio Cabrera </p>
            <p className="Titul2">ChatGPT-Mod</p>
        </div>
        <img className="Logo" src={Logo} alt=" No fount"></img>
    </>
  )
}

export default Header