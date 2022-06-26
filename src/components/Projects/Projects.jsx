import React from 'react'
import './Projects.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Cara from '../../img/cara.png'
import Rymo from '../../img/rymo.png'
import Netflix from '../../img/netflix.png'
import Food from '../../img/food.png'
import Construction from '../../img/construction.png'
import Olx from '../../img/olx.png'
import 'swiper/css'
import {themeContext} from '../../Context'
import {useContext} from 'react'

function Projects() {

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className='portfolio' id='projects'>
        <span data-aos='slide-right' style={{color: darkMode ? 'white': ''}}>Recent Projects</span>
        <span data-aos='zoom-in'>Portfolio</span>


        <Swiper
        spaceBetween={30}
        slidesPerView={3.5}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide>
                <a target='_blank' href="https://ecommerce-cara.netlify.app/"><img src={Cara} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a target='_blank' href="https://netflix-clone-react-shabab.netlify.app/"><img src={Netflix} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a target='_blank' href="https://ecommerce-rymo.netlify.app/"><img src={Rymo} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a target='_blank' href="https://food-shop-ecommerce.netlify.app/"><img src={Food} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a target='_blank' href="https://build-best.netlify.app/"><img src={Construction} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a target='_blank' href="https://react-olx-clone.netlify.app/"><img src={Olx} alt="" /></a>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Projects