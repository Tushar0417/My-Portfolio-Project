import React from 'react'
import './Footer.css'
import fotr from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Fb from '@iconscout/react-unicons/icons/uil-linkedin'
import Gith from '@iconscout/react-unicons/icons/uil-github'
function Footer() {
  return (
    <div className="footer">
        <img src={fotr} alt="Cant load" style={{width:'100%'}}/>
        <div className="f-content">
            <span>contact.tusharmahajan10733@gmail.com</span>
            <div className="f-icons">
              <a href="https://www.linkedin.com/in/tusharmahajan07/" target='blank'><Fb color='white' size='3rem'/></a>
              <a href="https://www.instagram.com/mr_tushar_0407/" target='blank'><Insta color='white' size='3rem'/></a>
              <a href="https://github.com/Tushar0417" target='blank'><Gith color='white' size='3rem'/></a>
            </div>
        </div>
    </div>
  )
}
export default Footer