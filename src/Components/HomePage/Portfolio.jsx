import React from 'react'
import Slider from "react-slick";

const Portfolio = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        cssEase: "ease-out",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div>
            <section className="new_arrivals_area section_padding_100_0 clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section_heading">
                                <h2>Oversized Graphic Tees</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row karl-new-arrivals">

                        <Slider {...settings}>
                            <div>
                                <div className="col-lg-12 single_gallery_item women wow fadeInUpBig" data-wow-delay="0.2s">
                                    <div className="product-img">
                                        <img src="img/product-img/product-1.jpg" alt />
                                        <div className="product-quicview">
                                            <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
                                        </div>
                                    </div>
                                    <div className="product-description">
                                        <p>Jeans midi cocktail dress</p>
                                        <div className='d-flex align-items-center'>
                                            <i className='fa-solid fa-star' />
                                            <i className='fa-solid fa-star' />
                                            <i className='fa-solid fa-star' />
                                            <i className='fa-solid fa-star' />
                                            <i className='fa-solid fa-star' />
                                            <p className='ms-1'>&nbsp;2 reviews</p>
                                        </div>
                                        <div className='d-flex align-items-stretch'>
                                            <span className='product-price-line' style={{ textDecoration: 'line-through' }}>$39.90</span>
                                            <h4 className="product-price">&nbsp; $39.90</h4>
                                        </div>
                                        <a href="#" className="add-to-cart-btn" style={{ marginTop: '20px' }}>ADD TO CART</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="col-lg-12 col-sm-2 col-md-3 single_gallery_item women wow fadeInUpBig" data-wow-delay="0.3s">
                                    <div className="product-img">
                                        <img src="img/product-img/product-2.jpg" alt />
                                        <div className="product-quicview">
                                            <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
                                        </div>
                                    </div>
                                    <div className="product-description">
                                        <p>Jeans midi cocktail dress</p>
                                        <h4 className="product-price">$39.90</h4>
                                        <a href="#" className="add-to-cart-btn">ADD TO CART</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="col-lg-12 col-sm-2 col-md-3 single_gallery_item access wow fadeInUpBig" data-wow-delay="0.4s">
                                    <div className="product-img">
                                        <img src="img/product-img/product-3.jpg" alt />
                                        <div className="product-quicview">
                                            <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
                                        </div>
                                    </div>
                                    <div className="product-description">
                                        <p>Jeans midi cocktail dress</p>
                                        <h4 className="product-price">$39.90</h4>
                                        <a href="#" className="add-to-cart-btn">ADD TO CART</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="col-lg-12 col-sm-2 col-md-3 single_gallery_item shoes wow fadeInUpBig" data-wow-delay="0.5s">
                                    <div className="product-img">
                                        <img src="img/product-img/product-4.jpg" alt />
                                        <div className="product-quicview">
                                            <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
                                        </div>
                                    </div>
                                    <div className="product-description">
                                        <p>Jeans midi cocktail dress</p>
                                        <h4 className="product-price">$39.90</h4>
                                        <a href="#" className="add-to-cart-btn">ADD TO CART</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="col-lg-12 col-sm-2 col-md-3 single_gallery_item women wow fadeInUpBig" data-wow-delay="0.6s">
                                    <div className="product-img">
                                        <img src="img/product-img/product-5.jpg" alt />
                                        <div className="product-quicview">
                                            <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
                                        </div>
                                    </div>
                                    <div className="product-description">
                                        <p>Jeans midi cocktail dress</p>
                                        <h4 className="product-price">$39.90</h4>
                                        <a href="#" className="add-to-cart-btn">ADD TO CART</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="col-lg-12 col-sm-2 col-md-3 single_gallery_item kids man wow fadeInUpBig" data-wow-delay="0.7s">
                                    <div className="product-img">
                                        <img src="img/product-img/product-6.jpg" alt />
                                        <div className="product-quicview">
                                            <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
                                        </div>
                                    </div>
                                    <div className="product-description">
                                        <p>Jeans midi cocktail dress</p>
                                        <h4 className="product-price">$39.90</h4>
                                        <a href="#" className="add-to-cart-btn">ADD TO CART</a>
                                    </div>
                                </div>
                            </div>
                        </Slider>


                    </div>
                </div>
            </section>
        </div>
    )
}

export default Portfolio;