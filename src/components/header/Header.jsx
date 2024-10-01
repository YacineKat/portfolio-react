import React from 'react'
import { useState } from 'react'
import '../header/Header.css'
import pic from '../../assets/profil-pic.png'
import plus from '../../assets/plus.svg'
import copy from '../../assets/copy.svg'
const Header = () => {
  const email = "yacinekatrouci@gmail.com";
  const [copied, setCopied] = useState(false); 

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy email: ', err);
      });
  };
  return (
    <div>
      <header className="Header-Cont" id='about'>
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
        <div className="Buttons">
          <button className="Hire-Me">
            <p>
              Hire me
            </p>
            <div className="Icon-Button Plus">
              <img src={plus} alt="plus icon" />
            </div>
          </button>
          <button className="Copy-Email" onClick={handleCopyEmail}>
            <p>
              Copy Email
            </p>
            <div className="Icon-Button Email">
              <img src={copy} alt="copy icon" />
            </div>
          </button>
          {copied && <div className="Copy-Message">Email copied!</div>} 
        </div>
      </header>
    </div>
  )
}

export default Header
