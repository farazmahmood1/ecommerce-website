import React from 'react'
import backgroundImage1 from '../SourceFiles/Images/bg-1.jpg'
const Hero = () => {
    return (
        <div>


            {/* <section className="welcome_area">
                <div className="welcome_slides owl-carousel">
                    <div className="single_slide height-800 bg-img background-overlay" style={{ backgroundImage: 'url(img/bg-img/bg-1.jpg)' }}>
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-12">
                                    <div className="welcome_slide_text">
                                        <h6 data-animation="bounceInDown" data-delay={0} data-duration="500ms">* Only today we offer free shipping</h6>
                                        <h2 data-animation="fadeInUp" data-delay="500ms" data-duration="500ms">Fashion Trends</h2>
                                        <a href="#" className="btn karl-btn" data-animation="fadeInUp" data-delay="1s" data-duration="500ms">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single_slide height-800 bg-img background-overlay" style={{ backgroundImage: 'url(img/bg-img/bg-4.jpg)' }}>
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-12">
                                    <div className="welcome_slide_text">
                                        <h6 data-animation="fadeInDown" data-delay={0} data-duration="500ms">* Only today we offer free shipping</h6>
                                        <h2 data-animation="fadeInUp" data-delay="500ms" data-duration="500ms">Summer Collection</h2>
                                        <a href="#" className="btn karl-btn" data-animation="fadeInLeftBig" data-delay="1s" data-duration="500ms">Check Collection</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single_slide height-800 bg-img background-overlay" style={{ backgroundImage: 'url(img/bg-img/bg-2.jpg)' }}>
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-12">
                                    <div className="welcome_slide_text">
                                        <h6 data-animation="fadeInDown" data-delay={0} data-duration="500ms">* Only today we offer free shipping</h6>
                                        <h2 data-animation="bounceInDown" data-delay="500ms" data-duration="500ms">Women Fashion</h2>
                                        <a href="#" className="btn karl-btn" data-animation="fadeInRightBig" data-delay="1s" data-duration="500ms">Check Collection</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}




            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <section className="welcome_area">
                        <div className="welcome_slides ">
                            <div className="carousel-item active" data-bs-interval={5000}>
                                <div className="single_slide height-800 bg-img background-overlay" style={{ backgroundImage: 'url(img/bg-img/bg-2.jpg)' }}>
                                    <div className="container h-100">
                                        <div className="row h-100 align-items-center">
                                            <div className="col-12">
                                                <div className="welcome_slide_text">
                                                    <h6 data-animation="fadeInDown" data-delay={0.5} data-duration="500ms">* Only today we offer free shipping</h6>
                                                    <h2 data-animation="bounceInDown" data-delay="500ms" data-duration="500ms">Women Fashion</h2>
                                                    <a href="#" className="btn karl-btn" data-animation="fadeInRightBig" data-delay="1s" data-duration="500ms">Check Collection</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div className="carousel-item" data-bs-interval={5000}>
                                <div className="single_slide height-800 bg-img background-overlay" style={{ backgroundImage: 'url(img/bg-img/bg-2.jpg)' }}>
                                    <div className="container h-100">
                                        <div className="row h-100 align-items-center">
                                            <div className="col-12">
                                                <div className="welcome_slide_text">
                                                    <h6 data-animation="fadeInDown" data-delay={0.5} data-duration="500ms">* Only today we offer free shipping</h6>
                                                    <h2 data-animation="bounceInDown" data-delay="500ms" data-duration="500ms">Women Fashion</h2>
                                                    <a href="#" className="btn karl-btn" data-animation="fadeInRightBig" data-delay="1s" data-duration="500ms">Check Collection</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="carousel-item" data-bs-interval={5000}>
                                <div className="single_slide height-800 bg-img background-overlay" style={{ backgroundImage: 'url(img/bg-img/bg-2.jpg)' }}>
                                    <div className="container h-100">
                                        <div className="row h-100 align-items-center">
                                            <div className="col-12">
                                                <div className="welcome_slide_text">
                                                    <h6 data-animation="fadeInDown" data-delay={0.5} data-duration="500ms">* Only today we offer free shipping</h6>
                                                    <h2 data-animation="bounceInDown" data-delay="500ms" data-duration="500ms">Women Fashion</h2>
                                                    <a href="#" className="btn karl-btn" data-animation="fadeInRightBig" data-delay="1s" data-duration="500ms">Check Collection</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                </div>
                {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button> */}
            </div>



        </div >
    )
}

export default Hero