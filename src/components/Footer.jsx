import React from 'react'
import './footer.css'
import { BsFacebook, BsInstagram, BsTwitter,BsGithub } from 'react-icons/bs'
const Footer = () => {
  return (
    <>
    <div className='footer'>
    <div className="footer2" id="foot">
            <ul className="contact">
                <p>CONTACT &nbsp;US</p>
                <div className="contactinfo">
                    <div className="mail">
                        <li><a href="mailto:https//:gauravdeshmukh1703@gmail.com">Email : bluenile2022@gmail.com</a></li>
                        <li><a href="tel:+91 9604692451">Phone : +91 9604692451</a></li></div>
                    <div className="address">
                        <li >Address : Kitchen , &nbsp;Wagholi, &nbsp;India</li>
                    </div>
                </div>
            </ul>

            <ul className="icons">
                <li><a href="http://www.facebook.com/hariom"><BsFacebook/></a></li>
                <li><a href="https://www.instagram.com/gauravdeshmukh1703/"><BsInstagram/></a></li>
                <li><a href="https://twitter.com/GauravDD17"><BsTwitter/></a></li>
                <li className="github"><a href="https://github.com/GauravDeshmukh17"><BsGithub/></a></li>
            </ul>
        </div>
    <div className="footer1">
        <p>&copy;BLUE NILE @2022</p>
        <p>All Rights Reserved | Use of Terms | T&C Apply</p>
    </div>
    </div></>
  )
}

export default Footer
