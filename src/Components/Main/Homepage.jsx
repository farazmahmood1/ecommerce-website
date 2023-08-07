import React from 'react'
import DiscountArea from '../HomePage/DiscountArea'
import Hero from '../HomePage/Hero'
import NewArrivals from '../HomePage/NewArrivals'
import Testimonial from '../HomePage/Testimonials'
import ItemInfo from '../Modals/ItemInfo'
import TwoCategories from '../HomePage/TwoCategories'
import OfferArea from '../HomePage/OffersArea';
import Portfolio from '../HomePage/Portfolio'
import Blogs from '../HomePage/Blogs'

const Homepage = () => {
    return (
        <div>
            {/* <DiscountArea /> */}
            <Hero />
            <TwoCategories />
            <ItemInfo />
            <NewArrivals />
            <Portfolio />
            <OfferArea />
            <Blogs />
            <Testimonial />
        </div>
    )
}

export default Homepage