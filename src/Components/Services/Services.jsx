import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card';
import Resume from './resume.pdf'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'

function Services() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: 2, type: 'spring' }
  return (
    <div className="services" id='Services'>
      <div className="awesome">
        <span style={{ color: darkMode ? 'white' : '' }}>Fields of</span>
        <span>Knowledge</span>
        {/* <span>Java Full Stack Developement,Frontend development <br />and Software Developer.</span> */}
        <a href={Resume} download>
          <button className="button s-button">Resume</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="cards">
        <motion.div
          initial={{ left: '25rem' }}
          whileInView={{ left: '14rem' }}
          transition={transition}
          style={{ left: '14rem' }}>
          <Card
            emoji={HeartEmoji}
            heading={"Java Full Stack Developement"}
            details={"Html, Css, Bootstrap, JavaScript, React.Js, MySql, Core Java, Java, JSP, JDBC, Servlet, Hibernate, SpringCore, SpringBoot"}
           
            link={'https://www.geeksforgeeks.org/java-full-stack/'}
          />
        </motion.div>
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
          style={{ top: '12rem', left: '-4rem' }}>
          <Card
            emoji={Glasses}
            heading={'Frontend Developement'}
            details={'HTML, CSS, JS, React.js,Bootstrap'}
            link={'https://www.w3schools.com/whatis/whatis_frontenddev.asp'}
          />
        </motion.div>
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
          style={{ top: '19rem', left: '12rem' }}>
          <Card
            emoji={Humble}
            heading={"Backend Developement"}
            details={"Java, JSP, JDBC, Servlet, Hibernate, SpringCore, SpringBoot,"}
            link={'https://www.simplilearn.com/java-full-stack-developer-certification'}
          />
        </motion.div>
        <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
      </div>
    </div>
  )
}

export default Services