import React,{useState} from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle';
import {themeContext} from '../../Context'
import {useContext} from 'react'


function Navbar() {
  const [menu, setMenu] = useState(false)
  const navbar = () =>{
    if(menu === true){
      setMenu(false)
    }
    else{
      setMenu(true)
    }
  }
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="n-wrapper" id="Navbar">
    {/* left */}
    <div className="n-left ml-2">
      <div className="n-name">Portfolio</div>
      {/* <Toggle /> */}
      <p className='mt-3'>
        <Toggle/>
      </p>
    </div>
    {/* right */}
    <div className="n-right">
      <div className="n-list">
        <ul style={{ listStyleType: "none" }}>
        <a href="#home" style={{color: darkMode ? 'white' : 'black'}}>
          <li className='mt-3'>
              Home
          </li>
          </a>
          <a href="#services" style={{color: darkMode ? 'white' : 'black'}}>
          <li className='mt-3'>
              Serivces
          </li>
          </a>
          <a href="#skills" style={{color: darkMode ? 'white' : 'black'}}>
          <li className='mt-3'>
              Skills
          </li>
          </a>
          <a href="#projects" style={{color: darkMode ? 'white' : 'black'}}>
          <li className='mt-3'>
              Projects
          </li>
          </a>
          <a href="#contact" style={{color: darkMode ? 'white' : 'black'}}>
          <li className='mt-3'>
              Contact
          </li>
          </a>
        </ul>
      </div>
      <a target='_blank' href="https://wa.me/7510393197"><button className="button n-button ml-2">Contact</button></a>
      {menu ? <i onClick={navbar} class="menu fa-solid fa-xmark"></i> : <i onClick={navbar} class="menu fa-solid fa-bars"></i>}
      
      
    </div>
    { menu && 
    <div style={{background: darkMode ? 'black' : ''}} className="show">
      <ul>
        <a href="#home"><li>Home</li></a>
        <a href="#services"><li>Services</li></a>
        <a href="#skills"><li>Skills</li></a>
        <a href="#projects"><li>Projects</li></a>
        <a href="#contact"><li>Contact</li></a>
      </ul>
    </div>
    }
  </div>
  )
}

export default Navbar
