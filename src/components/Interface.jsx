import React from 'react';
import './animations.css';
import './main.css';
import './index.css';
import './nav.css';
import logo1 from '../img/logo.png'
import logo from '../img/docere.png'
import { Fade } from "react-awesome-reveal";

function Interface() {
  return (
    <div className="full-height">
      <center>
        <table border="0">
          <tbody>
            <tr>
              <td width="80%">
                {/* <span className="edoc-logo">Docere </span>
                <span className="edoc-logo-sub">| companion</span> */}
               <img src={logo} alt="Logo" style={{ width: '150px', height: '140px' }} />
              </td>
              {/* <td width="10%">
                <a href="Loginnav" className="non-style-link"><p className="nav-item">LOGIN</p></a>
              </td>
              <td width="10%">
                <a href="Signnav" className="non-style-link"><p className="nav-item" style={{ paddingRight: '10px' }}>REGISTER</p></a>
              </td>
            </tr> */}
             
                          <td width="10%">
                         
                <div className="dropdown ">
                  <td>
                  <button className="dropbtn non-style-link nav-item">LOGIN</button>
                  </td>
                  <div className="dropdown-content">
                    <a href="patient login">PATIENT</a>
                    <a href="login">DOCTOR</a>
                  </div>
                </div>
              </td>
              <td width="10%">
                <div className="dropdown">
                  <button className="dropbtn dropbtn non-style-link nav-item" style={{ paddingRight: '10px' }} >REGISTER</button>
                  <div className="dropdown-content">
                    <a href="patient register">PATIENT</a>
                    <a href="register">DOCTOR</a>
                    
                  </div>
                </div>
              </td>
            </tr>
            

            <tr>
              <td colSpan="3">
              <Fade triggerOnce>
                <p className="heading-text">Your health is our commitment!</p>
                </Fade>
              </td>
            </tr>
            <tr>
              <td colSpan="3">
                <p className="sub-text2">Connect today and experience healthcare made easy. Whether you need medications, medical advice, or simply want to stay informed about healthcare options in your area, 
                <br/>we're here to serve you. Your health is our commitment!.</p>
              </td>
            </tr>
            <tr>
              <td colSpan="3">
                <center>
                  <a href="patient login">
                    <input type="button" value="Make Appointment" className="login-btn btn-primary btn" style={{ paddingLeft: '25px', paddingRight: '25px', paddingTop: '10px', paddingBottom: '10px' }} />
                  </a>
                </center>
              </td>
            </tr>
            <tr>
              <td colSpan="3">
              </td>
            </tr>
          </tbody>
        </table>
        <p className="sub-text2 footer-hashen">DEVELOPED BY ATHUL & JIBIN</p>
      </center>
    </div>
  );
}

export default Interface;
