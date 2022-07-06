import React from "react";
import "./Home.css";
import Gitbub from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import glassimogi from "../../img/glassesimoji.png";
import {themeContext} from '../../Context'
import {useContext} from 'react'
import Typed from 'react-typed'
import Cv from '../../img/Adil Shabab.pdf'



function Home() {

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div id="home" className="home w-100 row">
      <div className="h-left p-0 m-0 col-12 col-md-12 col-lg-6">
        <div className="h-name">
          <span style={{color: darkMode ? 'white': 'black'}}>Hy! I Am </span>
          <span>Adil Shabab</span>
          <Typed 
            strings={['Python Full Stack Developer', 'UI/UX Designer', 'Web Designer', 'Freelancer']}
            typeSpeed={40}
            backSpeed={50}
            loop
            >
            <span style={{fontSize: '24px', color: darkMode ? 'var(--orange)': 'var(--orange)'}}>Python Full-Stack Developer</span>
          </Typed>
          <span style={{color: darkMode ? 'white': ''}}>
            I am currently doing my graduation from Calicut University. I have six months of experience as python full stack developer in Techolas technologies pvt ltd. I love combining the worlds of logic and creative design to make eye-catching, accessible, and user-friendly websites and applications.
            I am excited to make the leap and continue refining my skills with the right company. You can see some of the things I have worked on over on my Project page and my Github page. 
          </span>
        </div>
        <div className="row m-0 p-0">
          <a href="#contact"><button className="button h-button">Hire me</button></a>
          <a href={Cv} download><button className="button ml-3">Download CV</button></a>
        </div>
        <div className="h-icons">
          <a href="https://github.com/adil-shabab" target='__blank'><img src={Gitbub} alt="" /></a>
          <a href="https://www.linkedin.com/in/adil-shabab-1948b2233/" target='__blank'><img src={LinkedIn} alt="" /></a>
          <a href="https://www.instagram.com/adil___shabab_/" target='__blank'><img src={Instagram} alt="" /></a>
        </div>
      </div>
      <div className="h-right col-12 col-md-12 col-lg-6" style={{color: darkMode ? 'black': 'black'}}>
        <img
        src={glassimogi} alt="" />
        <div
        data-aos="fade-left" 
        className="h-box-one">
          Web Designer
        </div>
        <div
        data-aos="fade-right" 
        className="h-box-two">
          UI/UX Designer
        </div>
        <div
        data-aos="fade-up"
        className="h-box-three">
          Graphic Designer
        </div>
        <div
        data-aos="flip-up" 
        className="h-box-four">
          Full Stack Developer
        </div>
        {/* blur div */}
        <div className="blur" style={{background: '#C1F5FF', top: '12rem', width: '21rem', height: '11rem', left: '-9rem'}}></div>
      </div>
    </div>
  );
}

export default Home;
