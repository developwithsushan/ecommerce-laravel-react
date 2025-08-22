import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../assets/images/logo.png';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import sliderOneImg from '../../assets/images/banner-1.jpg';
import sliderTwoImg from '../../assets/images/banner-2.jpg';
import LatestProducts from "./LatestProducts.jsx";
import FeaturedProducts from "./FeaturedProducts.jsx";


const Home = () => {
    return (
        <>
            <header className="shadow">
                <div className="bg-dark text-center py-3">
                    <span className="text-white">Your Fashion Partner</span>
                </div>

                <div className="container">
                    <Navbar expand="lg">
                        <Navbar.Brand href="#">
                            <img src={Logo} alt="" width={170}/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="#home">Mens</Nav.Link>
                                <Nav.Link href="#about">Women</Nav.Link>
                                <Nav.Link href="#contact">Kids</Nav.Link>
                            </Nav>
                            <div className='nav-right d-flex'>
                                <a href="" className='ms-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                                         className="bi bi-person" viewBox="0 0 16 16">
                                        <path
                                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"></path>
                                    </svg>
                                </a>

                                <a href="" className='ms-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" fill="currentColor"
                                         className="bi bi-bag" viewBox="0 0 16 16">
                                        <path
                                            d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"></path>
                                    </svg>
                                </a>
                            </div>
                        </Navbar.Collapse>
                    </Navbar>
                </div>


            </header>

            <section className='section-1'>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    breakpoints={{
                        1024: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        }
                    }}
                >
                    <SwiperSlide>
                        <div className="content" style={{ backgroundImage: `url(${sliderOneImg})` }}>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="content" style={{ backgroundImage: `url(${sliderTwoImg})` }}>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>

            <LatestProducts />

            <FeaturedProducts />
        </>
    );
};

export default Home;
