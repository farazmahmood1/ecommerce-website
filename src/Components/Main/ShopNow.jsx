import React from 'react'
import DiscountArea from '../HomePage/DiscountArea'

const ShopNow = () => {
    return (
        <div>

            <div>
              <DiscountArea/>
                <section className="shop_grid_area section_padding_100">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-4 col-lg-3">
                                <div className="shop_sidebar_area">
                                    <div className="widget catagory mb-50">
                                        {/*  Side Nav  */}
                                        <div className="nav-side-menu">
                                            <h6 className="mb-0">Catagories</h6>
                                            <div className="menu-list">
                                                <ul id="menu-content2" className="menu-content collapse out">
                                                    {/* Single Item */}
                                                    <li data-toggle="collapse" data-target="#women2">
                                                        <a href="#">Woman wear</a>
                                                        <ul className="sub-menu collapse show" id="women2">
                                                            <li><a href="#">Midi Dresses</a></li>
                                                            <li><a href="#">Maxi Dresses</a></li>
                                                            <li><a href="#">Prom Dresses</a></li>
                                                            <li><a href="#">Little Black Dresses</a></li>
                                                            <li><a href="#">Mini Dresses</a></li>
                                                        </ul>
                                                    </li>
                                                    {/* Single Item */}
                                                    <li data-toggle="collapse" data-target="#man2" className="collapsed">
                                                        <a href="#">Man Wear</a>
                                                        <ul className="sub-menu collapse" id="man2">
                                                            <li><a href="#">Man Dresses</a></li>
                                                            <li><a href="#">Man Black Dresses</a></li>
                                                            <li><a href="#">Man Mini Dresses</a></li>
                                                        </ul>
                                                    </li>
                                                    {/* Single Item */}
                                                    <li data-toggle="collapse" data-target="#kids2" className="collapsed">
                                                        <a href="#">Children</a>
                                                        <ul className="sub-menu collapse" id="kids2">
                                                            <li><a href="#">Children Dresses</a></li>
                                                            <li><a href="#">Mini Dresses</a></li>
                                                        </ul>
                                                    </li>
                                                    {/* Single Item */}
                                                    <li data-toggle="collapse" data-target="#bags2" className="collapsed">
                                                        <a href="#">Bags &amp; Purses</a>
                                                        <ul className="sub-menu collapse" id="bags2">
                                                            <li><a href="#">Bags</a></li>
                                                            <li><a href="#">Purses</a></li>
                                                        </ul>
                                                    </li>
                                                    {/* Single Item */}
                                                    <li data-toggle="collapse" data-target="#eyewear2" className="collapsed">
                                                        <a href="#">Eyewear</a>
                                                        <ul className="sub-menu collapse" id="eyewear2">
                                                            <li><a href="#">Eyewear Style 1</a></li>
                                                            <li><a href="#">Eyewear Style 2</a></li>
                                                            <li><a href="#">Eyewear Style 3</a></li>
                                                        </ul>
                                                    </li>
                                                    {/* Single Item */}
                                                    <li data-toggle="collapse" data-target="#footwear2" className="collapsed">
                                                        <a href="#">Footwear</a>
                                                        <ul className="sub-menu collapse" id="footwear2">
                                                            <li><a href="#">Footwear 1</a></li>
                                                            <li><a href="#">Footwear 2</a></li>
                                                            <li><a href="#">Footwear 3</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget price mb-50">
                                        <h6 className="widget-title mb-30">Filter by Price</h6>
                                        <div className="widget-desc">
                                            <div className="slider-range">
                                                <div data-min={0} data-max={3000} data-unit="$" className="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" data-value-min={0} data-value-max={1350} data-label-result="Price:">
                                                    <div className="ui-slider-range ui-widget-header ui-corner-all" />
                                                    <span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex={0} />
                                                    <span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex={0} />
                                                </div>
                                                <div className="range-price">Price: 0 - 1350</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget color mb-70">
                                        <h6 className="widget-title mb-30">Filter by Color</h6>
                                        <div className="widget-desc">
                                            <ul className="d-flex justify-content-between">
                                                <li className="gray"><a href="#"><span>(3)</span></a></li>
                                                <li className="red"><a href="#"><span>(25)</span></a></li>
                                                <li className="yellow"><a href="#"><span>(112)</span></a></li>
                                                <li className="green"><a href="#"><span>(72)</span></a></li>
                                                <li className="teal"><a href="#"><span>(9)</span></a></li>
                                                <li className="cyan"><a href="#"><span>(29)</span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="widget size mb-50">
                                        <h6 className="widget-title mb-30">Filter by Size</h6>
                                        <div className="widget-desc">
                                            <ul className="d-flex justify-content-between">
                                                <li><a href="#">XS</a></li>
                                                <li><a href="#">S</a></li>
                                                <li><a href="#">M</a></li>
                                                <li><a href="#">L</a></li>
                                                <li><a href="#">XL</a></li>
                                                <li><a href="#">XXL</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="widget recommended">
                                        <h6 className="widget-title mb-30">Recommended</h6>
                                        <div className="widget-desc">
                                            {/* Single Recommended Product */}
                                            <div className="single-recommended-product d-flex mb-30">
                                                <div className="single-recommended-thumb mr-3">
                                                    <img src="img/product-img/product-10.jpg" alt />
                                                </div>
                                                <div className="single-recommended-desc">
                                                    <h6>Men’s T-shirt</h6>
                                                    <p>$ 39.99</p>
                                                </div>
                                            </div>
                                            {/* Single Recommended Product */}
                                            <div className="single-recommended-product d-flex mb-30">
                                                <div className="single-recommended-thumb mr-3">
                                                    <img src="img/product-img/product-11.jpg" alt />
                                                </div>
                                                <div className="single-recommended-desc">
                                                    <h6>Blue mini top</h6>
                                                    <p>$ 19.99</p>
                                                </div>
                                            </div>
                                            {/* Single Recommended Product */}
                                            <div className="single-recommended-product d-flex">
                                                <div className="single-recommended-thumb mr-3">
                                                    <img src="img/product-img/product-12.jpg" alt />
                                                </div>
                                                <div className="single-recommended-desc">
                                                    <h6>Women’s T-shirt</h6>
                                                    <p>$ 39.99</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-8 col-lg-9">
                                <div className="shop_grid_product_area">
                                    <div className="row">
                                        {/* Single gallery Item */}
                                        <div className="col-12 col-sm-6 col-lg-4 single_gallery_item wow fadeInUpBig" data-wow-delay="0.2s">
                                            {/* Product Image */}
                                            <div className="product-img">
                                                <img src="img/product-img/product-1.jpg" alt />
                                                <div className="product-quicview">
                                                    <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
                                                </div>
                                            </div>
                                            {/* Product Description */}
                                            <div className="product-description">
                                                <h4 className="product-price">$39.90</h4>
                                                <p>Jeans midi cocktail dress</p>
                                                {/* Add to Cart */}
                                                <a href="#" className="add-to-cart-btn">ADD TO CART</a>
                                            </div>
                                        </div>
                                        {/* Single gallery Item */}
                                        <div className="col-12 col-sm-6 col-lg-4 single_gallery_item wow fadeInUpBig" data-wow-delay="0.3s">
                                            {/* Product Image */}
                                            <div className="product-img">
                                                <img src="img/product-img/product-2.jpg" alt />
                                                <div className="product-quicview">
                                                    <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
                                                </div>
                                            </div>
                                            {/* Product Description */}
                                            <div className="product-description">
                                                <h4 className="product-price">$39.90</h4>
                                                <p>Jeans midi cocktail dress</p>
                                                {/* Add to Cart */}
                                                <a href="#" className="add-to-cart-btn">ADD TO CART</a>
                                            </div>
                                        </div>
                                        {/* Single gallery Item */}
                                        <div className="col-12 col-sm-6 col-lg-4 single_gallery_item wow fadeInUpBig" data-wow-delay="0.4s">
                                            {/* Product Image */}
                                            <div className="product-img">
                                                <img src="img/product-img/product-3.jpg" alt />
                                                <div className="product-quicview">
                                                    <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
                                                </div>
                                            </div>
                                            {/* Product Description */}
                                            <div className="product-description">
                                                <h4 className="product-price">$39.90</h4>
                                                <p>Jeans midi cocktail dress</p>
                                                {/* Add to Cart */}
                                                <a href="#" className="add-to-cart-btn">ADD TO CART</a>
                                            </div>
                                        </div>
                                        {/* Single gallery Item */}
                                        <div className="col-12 col-sm-6 col-lg-4 single_gallery_item wow fadeInUpBig" data-wow-delay="0.5s">
                                            {/* Product Image */}
                                            <div className="product-img">
                                                <img src="img/product-img/product-4.jpg" alt />
                                                <div className="product-quicview">
                                                    <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
                                                </div>
                                            </div>
                                            {/* Product Description */}
                                            <div className="product-description">
                                                <h4 className="product-price">$39.90</h4>
                                                <p>Jeans midi cocktail dress</p>
                                                {/* Add to Cart */}
                                                <a href="#" className="add-to-cart-btn">ADD TO CART</a>
                                            </div>
                                        </div>
                                        {/* Single gallery Item */}
                                        <div className="col-12 col-sm-6 col-lg-4 single_gallery_item wow fadeInUpBig" data-wow-delay="0.6s">
                                            {/* Product Image */}
                                            <div className="product-img">
                                                <img src="img/product-img/product-5.jpg" alt />
                                                <div className="product-quicview">
                                                    <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
                                                </div>
                                            </div>
                                            {/* Product Description */}
                                            <div className="product-description">
                                                <h4 className="product-price">$39.90</h4>
                                                <p>Jeans midi cocktail dress</p>
                                                {/* Add to Cart */}
                                                <a href="#" className="add-to-cart-btn">ADD TO CART</a>
                                            </div>
                                        </div>
                                        {/* Single gallery Item */}
                                        <div className="col-12 col-sm-6 col-lg-4 single_gallery_item wow fadeInUpBig" data-wow-delay="0.7s">
                                            {/* Product Image */}
                                            <div className="product-img">
                                                <img src="img/product-img/product-6.jpg" alt />
                                                <div className="product-quicview">
                                                    <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
                                                </div>
                                            </div>
                                            {/* Product Description */}
                                            <div className="product-description">
                                                <h4 className="product-price">$39.90</h4>
                                                <p>Jeans midi cocktail dress</p>
                                                {/* Add to Cart */}
                                                <a href="#" className="add-to-cart-btn">ADD TO CART</a>
                                            </div>
                                        </div>
                                        {/* Single gallery Item */}
                                        <div className="col-12 col-sm-6 col-lg-4 single_gallery_item wow fadeInUpBig" data-wow-delay="0.8s">
                                            {/* Product Image */}
                                            <div className="product-img">
                                                <img src="img/product-img/product-7.jpg" alt />
                                                <div className="product-quicview">
                                                    <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
                                                </div>
                                            </div>
                                            {/* Product Description */}
                                            <div className="product-description">
                                                <h4 className="product-price">$39.90</h4>
                                                <p>Jeans midi cocktail dress</p>
                                                {/* Add to Cart */}
                                                <a href="#" className="add-to-cart-btn">ADD TO CART</a>
                                            </div>
                                        </div>
                                        {/* Single gallery Item */}
                                        <div className="col-12 col-sm-6 col-lg-4 single_gallery_item wow fadeInUpBig" data-wow-delay="0.9s">
                                            {/* Product Image */}
                                            <div className="product-img">
                                                <img src="img/product-img/product-8.jpg" alt />
                                                <div className="product-quicview">
                                                    <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
                                                </div>
                                            </div>
                                            {/* Product Description */}
                                            <div className="product-description">
                                                <h4 className="product-price">$39.90</h4>
                                                <p>Jeans midi cocktail dress</p>
                                                {/* Add to Cart */}
                                                <a href="#" className="add-to-cart-btn">ADD TO CART</a>
                                            </div>
                                        </div>
                                        {/* Single gallery Item */}
                                        <div className="col-12 col-sm-6 col-lg-4 single_gallery_item wow fadeInUpBig" data-wow-delay="1s">
                                            {/* Product Image */}
                                            <div className="product-img">
                                                <img src="img/product-img/product-9.jpg" alt />
                                                <div className="product-quicview">
                                                    <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus" /></a>
                                                </div>
                                            </div>
                                            {/* Product Description */}
                                            <div className="product-description">
                                                <h4 className="product-price">$39.90</h4>
                                                <p>Jeans midi cocktail dress</p>
                                                {/* Add to Cart */}
                                                <a href="#" className="add-to-cart-btn">ADD TO CART</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="shop_pagination_area wow fadeInUp" data-wow-delay="1.1s">
                                    <nav aria-label="Page navigation">
                                        <ul className="pagination pagination-sm">
                                            <li className="page-item active"><a className="page-link" href="#">01</a></li>
                                            <li className="page-item"><a className="page-link" href="#">02</a></li>
                                            <li className="page-item"><a className="page-link" href="#">03</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default ShopNow