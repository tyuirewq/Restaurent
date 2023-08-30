import React from 'react'
import { Link } from 'react-router-dom'
import Imaged from '../Images/brooke-lark-aGjP08-HbYY-unsplash.jpg'
import HeadingLogo from '../Images/strawberry.png'
import StoryBg1 from '../Images/avocado.png'
import StoryBg2 from '../Images/coffee.png'
import Salad from '../Images/salad.png'
import Dosa from '../Images/dosa-set.png'
import Cake from '../Images/Cake.png'
import Sandwich from '../Images/sandwich.png'
import Thali from '../Images/thali.png'
import './mainpage.css'

const MainPage = () => {
  return (
    <>
    <div className="home">
        <div className="main_slide">
            <div>
                <h1>Enjoy  <span>Delicious Food</span> in Your Healthy Life.</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque quia sequi nam sed voluptas voluptatem minima veniam et, provident expedita placeat dolore blanditiis officiis aperiam repellendus illo consequatur! Consequuntur, libero!</p>
                <Link to="/food"><button className="red_btn">Food Menu </button></Link>
            </div>
            <div>
                <img className='mainimg' src={Imaged} alt=""/>
            </div>
        </div>
        <div className="image" id="special">
          <h3>SPECIAL</h3>
          <table>
              <tr>
                  <td><a href="index2.html" className='salad'><img src={Salad} alt=""/></a></td>
                  <td><a href="index4.html" className='dosa'><img src={Dosa} alt=""/></a></td>
                  <td><a href="index3.html" className='cake'><img src={Cake} alt=""/></a></td>
                  <td><a href="index5.html" className='sandwich'><img src={Sandwich} alt=""/></a></td>
                  <td><a href="index6.html" className='thali'><img src={Thali} alt=""/></a></td>
              </tr>
          </table>
        </div>
    </div>
    <section className="story-area">
        <div className="bg-2">
          <img src={StoryBg1} alt="" />
        </div>
          <div className="container">
                  <div className="heading">
                          <img className="heading-img" src={HeadingLogo} alt=""/>
                          <h2>Our Story</h2>
                  </div>
                  <div className="row">
                          <div>
                                  <p className="mb-30">Maecenas fermentum tortor id fringilla molestie. In hac habitasse
                                          platea dictumst. Morbi maximus
                                          lobortis ipsum, ut blandit augue ullamcorper vitae.
                                          Nulla dignissim leo felis, eget cursus elit aliquet ut. Curabitur vel convallis
                                          massa. Morbi tellus
                                          tortor, luctus et lacinia non, tincidunt in lacus.
                                          Vivamus sed ligula imperdiet, feugiat magna vitae, blandit ex. Vestibulum id
                                          dapibus dolor, ac
                                          cursus nulla. </p>
                          </div>
                          <div className="col-md-6">
                                  <p className="mb-30">Maecenas fermentum tortor id fringilla molestie. In hac habitasse platea
                                          dictumst.Morbi maximus lobortis ipsum, ut blandit augue ullamcorper vitae.
                                          Nulla dignissim leo felis, eget cursus elit aliquet ut. Curabitur vel
                                          convallismassa. Morbi tellus tortor, luctus et lacinia non, tincidunt in lacus.
                                          Vivamus sed ligula imperdiet, feugiat magna vitae, blandit ex. Vestibulumidda
                                          pibus dolor, accursus nulla. </p>
                          </div>
                  </div>
          </div>
          
        <div className="bg-3">
          <img src={StoryBg2} alt="" />
        </div>
        </section>
    </>
  )
}

export default MainPage
