import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'


function Footer() {
  return (
    <div className='footer'>
        <img className='w-100' src={Wave} alt="" />
        <div className="f-content">
            <div className="f-icons mt-4">
            <a target='_blank' href="https://github.com/adil-shabab"><i class="fa-brands fa-github"></i></a>
            <a target='_blank' href="https://www.facebook.com/adil.shabbab/"><i class="fa-brands fa-facebook"></i></a>
            <a target='_blank' href="https://www.instagram.com/adil___shabab_/"><i class="fa-brands fa-instagram"></i></a>
            <a target='_blank' href="https://www.linkedin.com/in/adil-shabab-1948b2233/"><i class="fa-brands fa-linkedin"></i></a>
            </div>
            <p className='credit'>Created by Adil Shabab || All right reserved</p>
        </div>
    </div>
   
  )
}

export default Footer