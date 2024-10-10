import React from 'react'
import './Body.css'

const Body = () => {
  return (
    <div  className="Body">
        <div className="Cont_Left Grid">
            <div><ul><li>Project</li></ul></div>
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
            <div className="Cont_Bottom Grid Cont">Graphic Design</div>
            <div className="Grid Cont mincont">Web Devloper</div>
            <div className="Grid Cont mincont">Mobel Developer</div>
        </div>
    </div>
  )
}

export default Body
