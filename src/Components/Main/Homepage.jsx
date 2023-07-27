import React from 'react'
import DiscountArea from '../HomePage/DiscountArea'
import Hero from '../HomePage/Hero'
import NewArrivals from '../HomePage/NewArrivals'
import Testimonial from '../HomePage/Testimonials'
import ItemInfo from '../Modals/ItemInfo'
import TwoCategories from '../HomePage/TwoCategories'
import OfferArea from '../HomePage/OffersArea';

const Homepage = () => {
    return (
        <div>
            <DiscountArea />
            <Hero />
            <TwoCategories />
            <ItemInfo />
            <NewArrivals />
            <OfferArea />
            <Testimonial />
        </div>
    )
}

export default Homepage