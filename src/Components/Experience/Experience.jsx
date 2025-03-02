import React from 'react'
import './Experience.css'
import GDSC from '../../img/webcap media.jpg'
import LnB from '../../img/LnB.png'
import MyCaptain from '../../img/ybi.png'


function Experience() {
  return (
    <div className="experience" id='Experience'>
      <div className="achievement">
        <div className="circle">
          <img src={LnB}/>
        </div>
        <span>LnB</span>
        <span>Data Science<br />Intern</span>
      </div>
      <div className="achievement">
        <div className="circle">
          <img src={GDSC} style={{height:'105px'}}/>
        </div>
        <span>Webap Media</span>
        <span>Frontend Developer<br/>Intern</span>
      </div>
      <div className="achievement">
        <div className="circle">
          <img src={MyCaptain}  style={{height:'105px'}}/>
        </div>
        <span>Ybi Foundation</span>
        <span>Data Analyst<br/>Intern</span>
      </div>
    </div>
  )
}

export default Experience