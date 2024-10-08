import React from 'react'
import './Body.css'

const Body = () => {
  return (
    <div  className="Body">
        <div className="Cont_Left grid">
            <div className="Cont_Left_Project">Project</div>
            <h3>Web Devloper</h3>
            <span >
              2024 - Present
            </span>
            <h3>Mobile Devloper</h3>
            <span >
              2023 - Present
            </span>
            <h3>Desighner</h3>
            <span >
              2024 - Present
            </span>
        </div>
        <div className="Cont_Right">
            <div className="Cont_Right1 grid cont"><p>Web Devloper</p></div>
            <div className="Cont_Right2 grid cont"><p>Mobel Developer</p></div>
            <div className="Cont_Right3 grid cont"><p>Graphic Design</p></div>
        </div>
    </div>
  )
}

export default Body
