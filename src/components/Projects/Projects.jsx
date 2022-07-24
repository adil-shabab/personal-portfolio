import React from 'react'
import './Projects.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Cara from '../../img/cara.png'
import Rymo from '../../img/rymo.png'
import Netflix from '../../img/netflix.png'
import Food from '../../img/food.png'
import Construction from '../../img/construction.png'
import Olx from '../../img/olx.png'
import Gym from '../../img/gym.png'
import Todo from '../../img/Todo.png'
import Yutube from '../../img/yutube downloader.png'
import Diary from '../../img/diary app 1.png'
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
                <a target='_blank' href="https://github.com/adil-shabab/olx-clone-react"><img src={Olx} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a target='_blank' href="https://github.com/adil-shabab/netflix-clone-react"><img src={Netflix} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a target='_blank' href="https://github.com/adil-shabab/gym-website"><img src={Gym} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a target='_blank' href="https://github.com/adil-shabab/Construction"><img src={Construction} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a target='_blank' href="https://github.com/adil-shabab/food-shop"><img src={Food} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a target='_blank' href="https://github.com/adil-shabab/ecommerce-cara"><img src={Cara} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a target='_blank' href="https://github.com/adil-shabab/ecommerce-rymo"><img src={Rymo} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a target='_blank' href="https://github.com/adil-shabab/todo-django"><img src={Todo} alt="" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a target='_blank' href="https://github.com/adil-shabab/diary-app-frontend"><img src={Diary} alt="" /></a>
            </SwiperSlide>
            {/* <SwiperSlide>
                <a target='_blank' href=""><img src={Yutube} alt="" /></a>
            </SwiperSlide> */}


        </Swiper>
    </div>
  )
}

export default Projects