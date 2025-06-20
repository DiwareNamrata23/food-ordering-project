import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
              <img src={assets.logo} alt="" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem sequi nobis facere dicta dolorem nostrum magnam, ea blanditiis dignissimos laboriosam laudantium possimus fuga asperiores nesciunt harum quibusdam saepe reprehenderit animi odio? Blanditiis iusto minima sed, fuga a illum repellat corrupti?
              </p>
              <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
              </div>
            </div>
            <div className="footer-content-center">
               <h2>COMPANY</h2>
               <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privarcy Policy</li>
               </ul>
            </div>
            <div className="footer-content-right">
           <h2>Get In Touch</h2>
           <ul>
            <li>+1-212-323-434</li>
            <li>contact@tomato.com</li>
           </ul>
            </div>
        </div>
      <hr/>
      <p className='footer-copyright'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, officia.</p>
    </div>
  )
}

export default Footer
