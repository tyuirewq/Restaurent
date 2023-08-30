import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import LogoImage from '../Images/logo.jpg'
import BannerImage from '../Images/banner-2.jpg'
import { AiFillHome} from 'react-icons/ai'
import {BsSearch, BsFillPersonFill} from 'react-icons/bs'

const Navbar = () => {
  const [ter, setTer] = useState(false);
  console.log(ter);
  return (
    <div>
      <header>
        <div className="header">
            <div className="logo">
                <img src={LogoImage} alt="" />
            </div>
            <div className="nav">
                <ul>
                    <Link to="/">
                        <li>Home</li></Link>
                    <Link to="/aboutus">
                        <li>About-us</li></Link>
                    <Link to="/food">
                        <li>Food Menu</li></Link>
                    <Link to="">
                        <li>Book Table</li></Link>
                </ul>
            </div>
            <div className="account">
                <ul>
                    <a href="#">
                        <li>
                            <i className="fa-solid fa-house-chimney"><AiFillHome/></i>
                        </li>
                    </a>
                    {!ter &&<a href="#">
                        <li>
                            <i className="searchicon" id="searchicon2" onClick={() => {setTer(!ter)}}><BsSearch/></i>
                        </li>
                    </a>}
                    {ter && <div className='search'> 
                      <input type="search" name="" id="" />
                      <i className="srchicon" id="searchicon2" onClick={() => {setTer(!ter)}}><BsSearch/>
                      </i> 
                      </div>}
                    <a href="#">
                        <li>
                            <i><BsFillPersonFill/></i>
                        </li>
                    </a>
                </ul>
            </div>
        </div>
    </header>
    </div>
  )
}

export default Navbar
