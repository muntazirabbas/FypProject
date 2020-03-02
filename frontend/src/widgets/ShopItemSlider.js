/**
 * ShopItemSlider Widget 
 */
import React , {Component} from 'react';
import Slider from "react-slick";



function ShopItemSlider(props) {
   const settings = props.settings;
   return (
        <div className="col-12 mb-5">
        <div className="categories-count-5 carousel-wrapper categories-slider categories-slider-style-1 ">
            <Slider {...settings}>
                <div className="item">
                <a href="#">
                <div className="category-image">
                    <img src={require(`../assets/images/shop/cat-01.png`)}  alt="cat" />
                </div>
                <div className="category-summary">
                    <div className="category-name">
                    Men </div>
                    <div className="category-products-count">
                    <span className="cat-count">30</span>
                    <span className="cat-label">product</span>
                    </div>
                </div>
                </a>
            </div>
            <div className="item">
                <a href="#">
                <div className="category-image">
                    <img src={require(`../assets/images/shop/cat-02.png`)}   alt="cat" />
                </div>
                <div className="category-summary">
                    <div className="category-name">
                    Women </div>
                    <div className="category-products-count">
                    <span className="cat-count">40</span>
                    <span className="cat-label">product</span>
                    </div>
                </div>
                </a>
            </div>
            <div className="item">
                <a href="#">
                <div className="category-image">
                    <img src={require(`../assets/images/shop/cat-03.png`)}   alt="cat" />
                </div>
                <div className="category-summary">
                    <div className="category-name">
                    Bags </div>
                    <div className="category-products-count">
                    <span className="cat-count">11</span>
                    <span className="cat-label">product</span>
                    </div>
                </div>
                </a>
            </div>
            <div className="item">
                <a href="#">
                <div className="category-image">
                    <img src={require(`../assets/images/shop/cat-04.png`)}   alt="cat" />
                </div>
                <div className="category-summary">
                    <div className="category-name">
                    Kids </div>
                    <div className="category-products-count">
                    <span className="cat-count">65</span>
                    <span className="cat-label">product</span>
                    </div>
                </div>
                </a>
            </div>
            <div className="item">
                <a href="#">
                <div className="category-image">
                    <img src={require(`../assets/images/shop/cat-05.png`)}   alt="cat" />
                </div>
                <div className="category-summary">
                    <div className="category-name">
                    Clothing </div>
                    <div className="category-products-count">
                    <span className="cat-count">25</span>
                    <span className="cat-label">product</span>
                    </div>
                </div>
                </a>
            </div>
            </Slider>
        </div>
        </div>
    )
}


export default ShopItemSlider;
