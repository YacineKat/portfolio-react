import React from 'react'
import '../header/Header.css'
import pic from '../../assets/profil-pic.png'
import plus from '../../assets/plus.svg'
import copy from '../../assets/copy.svg'
const Header = () => {
  return (
    <div>
      <header className="Header-Cont">
        <div className="Info">
            <div className="Job">
                <h2>Web Developer</h2>
            </div>
            <div className="Available">
                <div className="Light"></div>
                <p>AVAILABLE FOR JOB</p>
            </div>
        </div>
        <div className="Info-Self">
            <div className="Info-Text">
                <h1>i'm Yacine Kay</h1>
                <p>I developer fullStack and</p>
                <p> 
                    mobile developer
                </p>
            </div>
            <div className="Info-Img">
                <div className="Image-Border">
                    <img src={pic} alt="" />
                </div>
            </div>
        </div>
        <div className="buttons">
          <button className="hire-me">
            Hire me
            <div className="icon-button">
              <img src={plus} alt="plus icon" />
            </div>
          </button>
          <button className="copy-email">
            Copy Email
            <div className="icon-button">
              <img src={copy} alt="copy icon" />
            </div>
          </button>
        </div>


      </header>
    </div>
  )
}

export default Header
