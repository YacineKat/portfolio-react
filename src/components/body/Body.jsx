import React from 'react'
import './Body.css'

const Body = () => {
  return (
    <div  className="Body">
        <div className="Cont_Left Grid">
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
            <div className="Grid Cont">Web Devloper</div>
            <div className="Grid Cont">Mobel Developer</div>
            <div className="Cont_Bottom Grid Cont">Graphic Design</div>
        </div>
    </div>
  )
}

export default Body
