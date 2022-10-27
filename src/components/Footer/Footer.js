import React from 'react';
import {FaFacebook,FaWhatsapp,FaInstagram,FaLinkedin} from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="w-100 bg-black mt-5">
  <div className="text-center text-white">
    <h1>E Learning</h1>
    <p>Office 41, Zawaya Buildin, Ghala Muscat, </p>
    <p>Sultanate of Oman</p>
    <span>Privacy Ploicy | Terms of use</span>
    <div>
      <i><FaFacebook></FaFacebook></i>
      <i><FaWhatsapp></FaWhatsapp></i>
      <i><FaInstagram></FaInstagram></i>
      <i><FaLinkedin></FaLinkedin></i>
    </div>
  </div>
 </footer> 
        </div>
    );
};

export default Footer;