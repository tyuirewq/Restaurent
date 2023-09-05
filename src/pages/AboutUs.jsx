import React from 'react'
import Chef from '../Images/chef.png'
import Chef1 from '../Images/chef1.png'
import Tomato from '../Images/pink-tomato.png'
import './aboutus.css'
import { Tilt } from 'react-tilt';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import PizzaLogo from '../Images/pizzalogo.png'
import SeaFood from '../Images/seafood.png'
import PastaLogo from '../Images/pastalogo.png'
import SaladLogo from '../Images/saladlogo.png'

const AboutUs = () => {
    return (
        <div className='aboutme'>
            <section className="story-area-about">
                <div className="row-about">
                    <div className="col-about"><img src={Chef1} alt="" /></div>
                    <div className='col-about-content'>
                        <div className="col-about-text">
                            <div className="col-about-heading"> <h2>We are Lugais</h2> </div>
                            <div className="quote-card">
                                <Tilt className="tilt" options={{ max: 40, scale: 1 }}>
                                    <div className="quote-content">
                                        <p className="quote">Maecenas fermentum tortor id fringilla molestie. In hac habitasse platea dictumst.  Morbi maximus
                                            lobortis ipsum, ut blandit augue ullamcorper vitae. Nulla dignissim leo felis, eget cursus elit aliquet ut. Curabitur vel convallis
                                            massa. Morbi tellus ortor, luctus et lacinia non, tincidunt in lacus.
                                            Vivamus sed ligula imperdiet, feugiat magna vitae, blandit ex. Vestibulum id dapibus dolor, ac cursus nulla. </p>
                                        <p className="author">- Hariom Kaushal</p>
                                    </div>
                                </Tilt>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row-about">
                    <div className='col-about-content'>
                        <div className="col-about-text">
                            <div className="col-about-heading"> <h2>We are Lugais</h2> </div>
                            <div className="quote-card">
                                <Tilt className="tilt" options={{ max: 40, scale: 1 }}>
                                    <div className="quote-content">
                                        <p className="quote">Maecenas fermentum tortor id fringilla molestie. In hac habitasse platea dictumst.  Morbi maximus
                                            lobortis ipsum, ut blandit augue ullamcorper vitae. Nulla dignissim leo felis, eget cursus elit aliquet ut. Curabitur vel convallis
                                            massa. Morbi tellus ortor, luctus et lacinia non, tincidunt in lacus.
                                            Vivamus sed ligula imperdiet, feugiat magna vitae, blandit ex. Vestibulum id dapibus dolor, ac cursus nulla. </p>
                                        <p className="author">- Hariom Kaushal</p>
                                    </div>
                                </Tilt>
                            </div>
                        </div>
                    </div>
                    <div className="col-about1"><img className="mb-30" src={Chef} alt="" /></div>
                </div>
                <div className="button-section">
                    <Link to="/food" className="btn-primaryc"><b>SEE TODAYS MENU</b></Link>
                    <Link to="/order" className="btn-primaryc secondary"><b>ORDER NOW</b></Link>
                </div>
            </section>
            <section className="story-area-about bg-seller">
                <div className="container">
                    <div className="heading">
                        <img className="heading-img-review" src={Tomato} alt="" />
                        <h2 className='review-heading'>What Clients Say</h2>
                    </div>
                    <div className="swiper-container">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            rewind={true}
                            navigation={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination,Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="quote-card swiper-slide">
                                    <Tilt className="tilt" options={{ max: 40, scale: 1 }}>
                                        <div className="quote-content">
                                            <h4>Amazing Pizza</h4>
                                            <p className="color-ash mb-50 mb-sm-30 mt-20">Etiam nec odio vestibulum est mattis
                                                efficiturut magna.Pellentesquesit amet tellus blandit. Etiam nec odio
                                                vestibulum est mattis
                                                effic iturut magna. Pellentesque sit am et tellus blandit. Etiamnec odio
                                                vestibul. </p>
                                            <img className="circle-60 mb-20 " src="images/quoto-1-200x200.jpg" alt="" />
                                            <h6><b className="color-primary">Daiane Smith</b>,<b className="color-ash">Customer</b>
                                            </h6>
                                        </div>
                                    </Tilt>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="quote-card swiper-slide">
                                    <Tilt className="tilt" options={{ max: 40, scale: 1 }}>
                                        <div className="quote-content">
                                            <h4>Amazing Pizza</h4>
                                            <p className="color-ash mb-50 mb-sm-30 mt-20">Etiam nec odio vestibulum est mattis
                                                efficiturut magna.Pellentesquesit amet tellus blandit. Etiam nec
                                                odio vestibulum est mattis
                                                effic iturut magna. Pellentesque sit am et tellus blandit.
                                                Etiamnec odio vestibul. </p>
                                            <img className="circle-60 mb-20" src="images/quoto-2-200x200.jpg" alt="" />
                                            <h6><b className="color-primary">Daiane Smith</b>,<b className="color-ash">Customer</b>
                                            </h6>
                                        </div>
                                    </Tilt>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="quote-card swiper-slide">
                                    <Tilt className="tilt" options={{ max: 40, scale: 1 }}>
                                        <div className="quote-content">
                                            <h4>The best pastas in town</h4>
                                            <p className="color-ash mb-50 mb-sm-30 mt-20">Nec odio vestibulum est mattis
                                                effic iturut
                                                magna. Pellentesque sit am et tellus blandit.
                                                Etiam nec odio vestibul. Etiam nec odio vestibulum est mat tis effic
                                                iturut magna. Pellentesque sit amet tellus blandit. Etiam nec odio. </p>
                                            <img className="circle-60 mb-20" src="images/quoto-3-200x200.jpg"
                                                alt="" />
                                            <h6><b className="color-primary">Michael Williams</b>,<b
                                                className="color-ash">Customer</b></h6>
                                        </div>
                                    </Tilt>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="quote-card swiper-slide">
                                    <Tilt className="tilt" options={{ max: 40, scale: 1 }}>
                                        <div className="quote-content">
                                            <h4>We love it there</h4>
                                            <p className="color-ash mb-50 mb-sm-30 mt-20">Retiam nec odio vestibulum est
                                                mattis effic iturut magna. Pellentesque sit amet tellus blandit. Etiam nec odio vestibulum est
                                                mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. </p>
                                            <img className="circle-60 mb-20"
                                                src="images/quoto-1-200x200.jpg" alt="" />
                                            <h6><b className="color-primary">Shawn Gaines</b>,<b className="color-ash">Customer</b>
                                            </h6>
                                        </div>
                                    </Tilt>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>

            <section className="counter-section section center-text" id="counter">
                <div className="container">
                    <div className="row-about">
                        <div className="col-sm-6 col-md-3">
                            <div className="review-data">
                                <img src={PizzaLogo} alt="" className="micon-gradient icon-pizza"></img>
                                <h2 className='data-value-review'><b><span className="counter-value" data-duration="400">574</span></b>
                                </h2>
                                <h5 className="semi-black"><b>Pizza per day</b></h5>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3">
                            <div className="review-data">
                                <img src={SeaFood} alt="" className="micon-gradient icon-sea-food"></img>
                                <h2 className='data-value-review'><b><span className="counter-value" data-duration="1400">14</span></b>
                                </h2>
                                <h5 className="semi-black"><b>Sea Food Dshes</b></h5>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3">
                            <div className="review-data">
                                <img src={PastaLogo} alt="" className="micon-gradient icon-pasta"></img>
                                <h2 className='data-value-review'><b><span className="counter-value" data-duration="300"
                                    >3</span></b></h2>
                                <h5 className="semi-black"><b>Pasta Chefs</b></h5>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3">
                            <div className="review-data">
                                <img src={SaladLogo} alt="" className="micon-gradient icon-salad"></img>
                                <h2 className='data-value-review'><b><span className="counter-value" data-duration="1000">52</span></b>
                                </h2>
                                <h5 className="semi-black"><b>Salads per day</b></h5>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


        </div>
    )
}

export default AboutUs
