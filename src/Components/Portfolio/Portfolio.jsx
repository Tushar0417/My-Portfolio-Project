import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Dragon from '../../img/hotstar.png'
import Port from '../../img/portfolio tushar.png'
import Hotstar from '../../img/hotstar.png'
import Zomato from '../../img/Netflixclone.png'
import 'swiper/css'
import {themeContext} from '../../Context'
import {useContext} from 'react'
function Portfolio() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id='Portfolio'>
        <span style={{color:darkMode? 'white':''}}>Recent Projects</span>
        <span>Portfolio</span>
        <Swiper spaceBetween={30} slidesPerView={3} grabCursor={true} className='portfolio-slider'>
            <SwiperSlide>
                <img src={Zomato} alt="Cant Load" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Dragon} alt="Cant Load"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Port} alt="Cant Load"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Hotstar} alt="Cant Load"/>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio