import React from 'react'
import './Skills.css'
import {themeContext} from '../../Context'
import {useContext} from 'react'



function Skills()  {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className='skills row w-100 pb-5 pt-5' id='skills'>
        <div className="mt-5 mb-5 col-12 col-sm-12 col-md-12 col-lg-6 col-xlg-6">
          <div className="blur" style={{background: 'rgb(200, 231, 220)'}}></div>
        <div className="skill-name">
          <span style={{color: darkMode ? 'white' : ''}}>My Awesome</span>
          <span>Skills and Tools</span>
          <span style={{color: darkMode ? 'white' : ''}}>
            I am using HTML, CSS, JavaScript, Bootstrap, React JS and Angular JS for Front-End and Python, Django, MySQL for Back-End and Git as Version Control System
          </span>
        </div>
        <div className="d-flex">
        <a href="#contact"><button className="mt-3 mr-3 button skill-button">Hire me</button></a>
        <a href="#contact"> <button className="mt-3 button skill-button">Contact</button></a>
        </div>
        </div>
        <div className="skill-right mt-5 mb-5 d-flex justify-content-center align-items-center col-12 col-sm-12 col-md-12 col-lg-6 col-xlg-6">
                    <div className="main-circle">
                        <div className="sec-circle">
                        <i class="fa-brands fa-html5" style={{color: 'var(--orange)'}}></i>
                        </div>
                        <div className="sec-circle">
                        <i class="fa-brands fa-js" style={{color: 'var(--black)'}}></i>
                        </div>
                        <div className="sec-circle">
                        <i class="fa-brands fa-python" style={{color: '#f5c32c'}}></i>
                        </div>
                        <div className="sec-circle">
                        <i class="fa-brands fa-bootstrap" style={{color: 'blue'}}></i>
                        </div>
                        <div className="sec-circle">
                          <i class="fa-brands fa-react" style={{color: '#61dbfb'}}></i>
                        </div>
                    </div>
            {/* background circle  */}
            <div className="background-circle blue-circle"></div>
            <div className="background-circle yellow-circle"></div>
        </div>
    </div>
  )
}

export default Skills