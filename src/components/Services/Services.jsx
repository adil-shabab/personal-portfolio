import React from "react";
import "./Services.css";
import Heart from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import {themeContext} from '../../Context'
import {useContext} from 'react'
import Typed from 'react-typed'
import Cv from '../../img/Adil Shabab.pdf'



function Services() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="services row" id="services">
      <div className="s-left col-12 col-md-12 col-lg-6">
        <span className="m-0 p-0" style={{color: darkMode ? 'white' : ''}}>My Awesome</span>
        <span className="m-0 p-0">Services</span>
        <span className="text-white" >Contact Me for </span>
        <Typed
        strings={['Web Designing', 'Graphic Designing', 'UI/UX Designing', 'Web Developing']}
        typeSpeed={40}
        backSpeed={50}
        loop
        >
        <span style={{fontSize: '1.3rem', color: darkMode ? 'white' : ''}} className="text-justify"></span>
        </Typed>
        <span className="mt-5 text-justify" style={{fontSize: '18px'}}>We are using Modern Tools for designing and Developing, Contact me for freelance work, we are using HTML, CSS, JS, Bootstrap, React, Angular for front-end-developing and Python and MySQL for back-end-developing. Using Django web framework</span>
        <a href={Cv} download><button className="button s-button">Download CV</button></a>
        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="s-righ col-12 col-md-12 col-lg-6 row mt-5">
        <div className="blur s-blur" style={{background: 'rgb(200, 231, 220)'}}></div>
        <div data-aos="slide-up" className="mt-3 col-12 col-md-6 col-lg-6 col-sm-6 col-xlg-6 w-100 d-flex justify-content-center align-items-center">
          <Card
            emoji={Heart}
            heading={"Graphic Design"}
            detail={"Adobe illustrator, Photohsop"}
          />
        </div>
        <div data-aos='slide-right' className="mt-3 col-12 col-md-6 col-lg-6 col-sm-6 col-xlg-6 w-100 d-flex justify-content-center align-items-center">
        <Card
          emoji={Humble}
          heading={"Web Design"}
          detail={"HTML, CSS, JS, Bootstrap, React"}
        />
        </div>
        <div data-aos='slide-left' className="mt-3 third-box col-12 col-md-6 col-lg-6 col-sm-6 col-xlg-6 w-100 d-flex justify-content-center align-items-center">
        <Card
          emoji={Glasses}
          heading={"web Development"}
          detail={"Python, Django, MySQL"}
        />
        </div>
      </div>
    </div>
  );
}

export default Services;
