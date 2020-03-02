/**
 * Blog Single Page
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: 30,
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1
    }
    }
  ]
};

class BlogSingPageSlider extends Component {

    render() {
        return (
            <Slider {...settings} className="slider-arrow-hover slider-spacing-10">
                <div key={1} className="owl-item cloned"  >
                    <div className="item">
                        <div className="related-post-info">
                            <div className="post-image clearfix">
                                <img src={require(`../assets/images/blog/blog-01.jpg`)} className="img-fluid" />
                            </div>
                            <span className="post-image-text">
                                <h5 className="title">Blog Post With Image</h5>
                            </span>
                        </div>
                    </div>
                </div>

                <div key={2} className="owl-item cloned"   ><div className="item">
                    <div className="related-post-info">
                        <div className="post-image clearfix">
                            <img src={require(`../assets/images/blog/blog-02.jpg`)} className="img-fluid" />

                        </div>
                        <span className="post-image-text">
                            <h5 className="title">Blog Post With Custom Quote</h5>
                        </span>
                    </div>
                </div></div>


                <div key={3} className="owl-item cloned"  ><div className="item">
                    <div className="related-post-info">
                        <div className="post-image clearfix">
                            <img src={require(`../assets/images/blog/blog-03.jpg`)} className="img-fluid" />
                        </div>
                        <span className="post-image-text">
                            <h5 className="title">Blog Post With Vimeo Video</h5>
                        </span>
                    </div>
                </div></div>

                <div key={4} className="owl-item active"  ><div className="item">
                    <div className="related-post-info">
                        <div className="post-image clearfix">
                            <img src={require(`../assets/images/blog/blog-04.jpg`)} className="img-fluid" />
                        </div>
                        <span className="post-image-text">
                            <h5 className="title">Blog Post With Image Slider</h5>
                        </span>
                    </div>
                </div></div>

                <div key={5} className="owl-item active"  ><div className="item">
                    <div className="related-post-info">
                        <div className="post-image clearfix">
                            <img src={require(`../assets/images/blog/blog-05.jpg`)} className="img-fluid" />
                        </div>
                        <span className="post-image-text">
                            <h5 className="title">Blog Post with Youtube Video</h5>
                        </span>
                    </div>
                </div></div>


            </Slider>
        )
    }
}

export default BlogSingPageSlider;
