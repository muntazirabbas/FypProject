/**
 *  Blog Full Width
 */
import React, { Component } from 'react';
import PageTitle from '../../widgets/PageTitle';
import Slider from "react-slick";
import { Row, Col,Container,NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

class BlogFullWidth extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
                <div className="site-content">
                    <div className="inner-intro header_intro header_intro_bg-image header_intro_opacity header_intro_opacity-custom">
                    <Container>
                        <Row className="intro-title align-items-center intro-section-center">
                            <PageTitle title="Blog Classic - Full Width"/>
                        </Row>
                    </Container>
                    </div>
                <div className="content-wrapper">
                <div className="section-wrapper section-pt pb-0 pb-lg-4">
                    <Container>
                    <Row>
                        <Col sm={12} md={12}>
                        <article className="post format-standard">
                            <div className="post-entry-image clearfix">
                            <img src={require(`../../assets/images/blog/blog-01.jpg`)} className="img-fluid" alt />
                            </div>
                            <div className="entry-header-section">
                            <div className="entry-meta-date">
                                <Link to="#">August 14, 2017</Link>
                            </div>
                            <div className="entry-title">
                                <h3 className="entry-title">
                                <Link to="/BlogSinglePage" rel="bookmark">Blog Post With Image</Link>
                                </h3>
                            </div>
                            <div className="entry-meta">
                                <ul>
                                <li><span className="author vcard">
                                    <Link className="url fn n" href="#" title="View all posts by CiyaShop" rel="author">
                                        <i className="fa fa-user" /> CiyaShop
                                    </Link></span>
                                </li>
                                <li><span className="entry-meta-categories">
                                    <i className="fa fa-folder-open" />&nbsp;
                                    <Link to="#" rel="category tag">Clothing</Link></span>
                                </li>
                                <li>
                                    <Link to="#">
                                    <i className="fa fa-comments-o" />
                                    <span className="leave-comment">0</span>
                                    </Link>
                                </li>
                                </ul>
                            </div>
                            </div>
                            <div className="entry-content">
                            <p>I truly believe Augustine’s words are true and if you look at history you know it
                                is true. There are many people in the world with amazing talents who realize
                                only a small percentage of their potential. We all know people who live this
                                truth. we also know those epic stories, those modern-day legends surrounding […]
                            </p>
                            </div>
                            <footer className="entry-footer clearfix">
                            <Link to="/BlogSinglePage" className="readmore">Read More</Link>
                            <div className="entry-social share pull-right">
                                <a  className="share-button" data-title="Share it on">
                                <i className="fa fa-share-alt" />
                                </a>
                                <ul className="single-share-box mk-box-to-trigger">
                                <li>
                                    <a href="https://www.facebook.com" className="share-link facebook-share" target="_blank">
                                    <i className="fa fa-facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/" className="share-link twitter-share" target="_blank">
                                    <i className="fa fa-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" className="share-link linkedin-share" target="_blank">
                                    <i className="fa fa-linkedin" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https:google.com/" className="share-link google-share" target="_blank">
                                    <i className="fa fa-google" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://in.pinterest.com/" className="share-link pinterest-share" target="_blank">
                                    <i className="fa fa-pinterest" />
                                    </a>
                                </li>
                                </ul>
                            </div>
                            </footer>
                        </article>
                        <article className="post format-gallery">
                            <div className="blog-entry-slider">
                            <Slider {...settings} className="slider-arrow-hover">
                                <div className="blog-item item">
                                    <img src={require(`../../assets/images/blog/blog-02.jpg`)} alt className="img-fluid" />
                                </div>
                                <div className="blog-item item">
                                 <img src={require(`../../assets/images/blog/blog-03.jpg`)} alt className="img-fluid" />
                                </div>
                                <div className="blog-item item">
                                    <img src={require(`../../assets/images/blog/blog-04.jpg`)} alt className="img-fluid" />
                                </div>
                                <div className="blog-item item">
                                 <img src={require(`../../assets/images/blog/blog-05.jpg`)} alt className="img-fluid" />
                                </div>
                            </Slider>
                            </div>
                            <div className="entry-header-section">
                            <div className="entry-meta-date">
                                <Link to="#">August 9, 2017</Link>
                            </div>
                            <div className="entry-title">
                                <h3 className="entry-title">
                                <Link to="/BlogSinglePage" rel="bookmark">Blog Post With Image Slider</Link>
                                </h3>
                            </div>
                            <div className="entry-meta">
                                <ul>
                                <li><span className="author vcard">
                                    <Link className="url fn n" href="#" title="View all posts by CiyaShop" rel="author">
                                        <i className="fa fa-user" /> CiyaShop
                                    </Link></span>
                                </li>
                                <li><span className="entry-meta-categories">
                                    <i className="fa fa-folder-open" />&nbsp;
                                    <Link to="#" rel="category tag">Fashion</Link></span>
                                </li>
                                <li>
                                    <Link to="#">
                                    <i className="fa fa-comments-o" />
                                    <span className="leave-comment">0</span>
                                    </Link>
                                </li>
                                </ul>
                            </div>
                            </div>
                            <div className="entry-content">
                            <p>Success isn’t really that difficult. there is a significant portion of the
                                population here in North America, that actually want and need success to be
                                hard! Why? so they then have a built-in excuse when things don’t go their way!
                                pretty sad situation, to say the least. for those of you who are serious about
                                […]
                            </p>
                            </div>
                            <footer className="entry-footer clearfix">
                            <Link to="/BlogSinglePage" className="readmore">Read More</Link>
                            <div className="entry-social share pull-right">
                                <a  className="share-button" data-title="Share it on">
                                <i className="fa fa-share-alt" />
                                </a>
                                <ul className="single-share-box mk-box-to-trigger">
                                <li>
                                    <a href="https://www.facebook.com" className="share-link facebook-share" target="_blank">
                                    <i className="fa fa-facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/" className="share-link twitter-share" target="_blank">
                                    <i className="fa fa-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" className="share-link linkedin-share" target="_blank">
                                    <i className="fa fa-linkedin" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https:google.com/" className="share-link google-share" target="_blank">
                                    <i className="fa fa-google" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://in.pinterest.com/" className="share-link pinterest-share" target="_blank">
                                    <i className="fa fa-pinterest" />
                                    </a>
                                </li>
                                </ul>
                            </div>

                           </footer>
                        </article>
                        <article className="post format-quote">
                            <div className="blog-entry-quote">
                            <blockquote className="entry-quote">
                                <i className="fa fa-quote-left" />
                                <p>The other virtues practice in succession by Franklin were silence, order,
                                resolution, frugality, industry, sincerity, Justice, moderation,
                                cleanliness, tranquility, chastity and humility. For the summary order he
                                followed a little scheme of employing his time each day. From five to seven
                                each morning he spent in bodily personal attention.</p>
                                <div className="quote-author text-right">
                                - CiyaShop </div>
                            </blockquote>
                            </div>
                            <div className="entry-header-section">
                            <div className="entry-meta-date">
                                <Link to="#">July 27, 2017</Link>
                            </div>
                            <div className="entry-title">
                                <h3 className="entry-title">
                                <Link to="/BlogSinglePage" rel="bookmark">Blog Post With Custom Quote</Link>
                                </h3>
                            </div>
                            <div className="entry-meta">
                                <ul>
                                <li><span className="author vcard">
                                    <Link className="url fn n" href="#" title="View all posts by CiyaShop" rel="author">
                                        <i className="fa fa-user" /> CiyaShop
                                    </Link></span>
                                </li>
                                <li><span className="entry-meta-categories">
                                    <i className="fa fa-folder-open" />&nbsp;
                                    <Link to="#" rel="category tag">Fashion</Link></span>
                                </li>
                                <li>
                                    <Link to="#">
                                    <i className="fa fa-comments-o" />
                                    <span className="leave-comment">0</span>
                                    </Link>
                                </li>
                                </ul>
                            </div>
                            </div>
                            <div className="entry-content">
                            <p>Making a decision to do something – this is the first step. we all know that
                                nothing moves until someone makes a decision. the first action is always in
                                making the decision to proceed. this is a fundamental step, which most people
                                overlook. without clarity, you send a very garbled message out to the Universe.
                                […]</p>
                            </div>
                            <footer className="entry-footer clearfix">
                            <Link to="/BlogSinglePage" className="readmore">Read More</Link>
                            <div className="entry-social share pull-right">
                                <a  className="share-button" data-title="Share it on">
                                <i className="fa fa-share-alt" />
                                </a>
                                <ul className="single-share-box mk-box-to-trigger">
                                <li>
                                    <a href="https://www.facebook.com" className="share-link facebook-share" target="_blank">
                                    <i className="fa fa-facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/" className="share-link twitter-share" target="_blank">
                                    <i className="fa fa-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" className="share-link linkedin-share" target="_blank">
                                    <i className="fa fa-linkedin" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https:google.com/" className="share-link google-share" target="_blank">
                                    <i className="fa fa-google" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://in.pinterest.com/" className="share-link pinterest-share" target="_blank">
                                    <i className="fa fa-pinterest" />
                                    </a>
                                </li>
                                </ul>
                            </div>

                            </footer>
                        </article>
                        <article className="post format-video">
                            <div className="blog-entry-you-tube">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/D2EvaSgi3UQ?rel=0" allowFullScreen />
                            </div>
                            </div>
                            <div className="entry-header-section">
                            <div className="entry-meta-date">
                                <Link to="#">July 20, 2017</Link>
                            </div>
                            <div className="entry-title">
                                <h3 className="entry-title">
                                <Link to="/BlogSinglePage" rel="bookmark">Blog Post with Youtube Video</Link>
                                </h3>
                            </div>
                            <div className="entry-meta">
                                <ul>
                                <li><span className="author vcard">
                                    <Link className="url fn n" href="#" title="View all posts by CiyaShop" rel="author">
                                        <i className="fa fa-user" /> CiyaShop
                                    </Link></span>
                                </li>
                                <li><span className="entry-meta-categories">
                                    <i className="fa fa-folder-open" />&nbsp;
                                    <Link to="#" rel="category tag">Fashion Show</Link></span>
                                </li>
                                <li>
                                    <Link to="#">
                                    <i className="fa fa-comments-o" />
                                    <span className="leave-comment">0</span>
                                    </Link>
                                </li>
                                </ul>
                            </div>
                            </div>
                            <div className="entry-content">
                            <p>So, there you have it; the six steps that will help you to the fabled land of
                                achievement and success! You now have the opportunity to push ahead and reach
                                your potential. No more excuses – make the commitment to take action. Get the
                                oars in the water and start rowing. Execution is the single biggest […]</p>
                            </div>
                            <footer className="entry-footer clearfix">
                            <Link to="/BlogSinglePage" className="readmore">Read More</Link>
                            <div className="entry-social share pull-right">
                                <a  className="share-button" data-title="Share it on">
                                <i className="fa fa-share-alt" />
                                </a>
                                <ul className="single-share-box mk-box-to-trigger">
                                <li>
                                    <a href="https://www.facebook.com" className="share-link facebook-share" target="_blank">
                                    <i className="fa fa-facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/" className="share-link twitter-share" target="_blank">
                                    <i className="fa fa-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" className="share-link linkedin-share" target="_blank">
                                    <i className="fa fa-linkedin" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https:google.com/" className="share-link google-share" target="_blank">
                                    <i className="fa fa-google" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://in.pinterest.com/" className="share-link pinterest-share" target="_blank">
                                    <i className="fa fa-pinterest" />
                                    </a>
                                </li>
                                </ul>
                            </div>

                            </footer>
                        </article>
                        <article className="post format-audio">
                            <div className="blog-entry-audio audio-video">
                            <audio id="player2" src={require(`../../assets/audio.mp3`)} width="100%" controls="controls" />
                            </div>
                            <div className="entry-header-section">
                            <div className="entry-meta-date">
                                <Link to="#">July 18, 2017</Link>
                            </div>
                            <div className="entry-title">
                                <h3 className="entry-title">
                                <Link to="/BlogSinglePage" rel="bookmark">Blog Post with Audio</Link>
                                </h3>
                            </div>
                            <div className="entry-meta">
                                <ul>
                                <li><span className="author vcard">
                                    <Link className="url fn n" href="#" title="View all posts by CiyaShop" rel="author">
                                        <i className="fa fa-user" /> CiyaShop
                                    </Link></span>
                                </li>
                                <li><span className="entry-meta-categories">
                                    <i className="fa fa-folder-open" />&nbsp;
                                    <Link to="#" rel="category tag">Fashion</Link></span>
                                </li>
                                <li>
                                    <Link to="#">
                                    <i className="fa fa-comments-o" />
                                    <span className="leave-comment">0</span>
                                    </Link>
                                </li>
                                </ul>
                            </div>
                            </div>
                            <div className="entry-content">
                            <p>Focus is having the unwavering attention to complete what you set out to do.
                                There are a million distractions in every facet of our lives. Telephones and
                                e-mail, clients and managers, spouses and kids, TV, newspapers and radio – the
                                distractions are everywhere and endless. Everyone wants a piece of us and the
                                result can […]
                            </p>
                            </div>
                            <footer className="entry-footer clearfix">
                            <Link to="/BlogSinglePage" className="readmore">Read More</Link>
                            <div className="entry-social share pull-right">
                                <a  className="share-button" data-title="Share it on">
                                <i className="fa fa-share-alt" />
                                </a>
                                <ul className="single-share-box mk-box-to-trigger">
                                <li>
                                    <a href="https://www.facebook.com" className="share-link facebook-share" target="_blank">
                                    <i className="fa fa-facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/" className="share-link twitter-share" target="_blank">
                                    <i className="fa fa-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" className="share-link linkedin-share" target="_blank">
                                    <i className="fa fa-linkedin" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https:google.com/" className="share-link google-share" target="_blank">
                                    <i className="fa fa-google" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://in.pinterest.com/" className="share-link pinterest-share" target="_blank">
                                    <i className="fa fa-pinterest" />
                                    </a>
                                </li>
                                </ul>
                            </div>

                            </footer>
                        </article>
                        <article className="post format-video">
                            <div className="blog-entry-you-tube">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src="https://player.vimeo.com/video/170272261?dnt=1&app_id=122963" allowFullScreen />
                            </div>
                            </div>
                            <div className="entry-header-section">
                            <div className="entry-meta-date">
                                <Link to="#">July 6, 2017</Link>
                            </div>
                            <div className="entry-title">
                                <h3 className="entry-title">
                                <Link to="/BlogSinglePage" rel="bookmark">Blog Post with Vimeo Video</Link>
                                </h3>
                            </div>
                            <div className="entry-meta">
                                <ul>
                                <li><span className="author vcard">
                                    <Link className="url fn n" href="#" title="View all posts by CiyaShop" rel="author">
                                        <i className="fa fa-user" /> CiyaShop
                                    </Link></span>
                                </li>
                                <li><span className="entry-meta-categories">
                                    <i className="fa fa-folder-open" />&nbsp;
                                    <Link to="#" rel="category tag">Clothing</Link></span>
                                </li>
                                <li>
                                    <Link to="#">
                                    <i className="fa fa-comments-o" />
                                    <span className="leave-comment">0</span>
                                    </Link>
                                </li>
                                </ul>
                            </div>
                            </div>
                            <div className="entry-content">
                            <p>It is truly amazing the damage that we, as parents, can inflict on our children.
                                So why do we do it? For the most part, we don’t do it intentionally or with
                                malice. In the majority of cases, the cause is a well-meaning but unskilled or
                                un-thinking parent, who says the wrong thing at the […]
                            </p>
                            </div>
                            <footer className="entry-footer clearfix">
                            <Link to="/BlogSinglePage" className="readmore">Read More</Link>
                            <div className="entry-social share pull-right">
                                <a  className="share-button" data-title="Share it on">
                                <i className="fa fa-share-alt" />
                                </a>
                                <ul className="single-share-box mk-box-to-trigger">
                                <li>
                                    <a href="https://www.facebook.com" className="share-link facebook-share" target="_blank">
                                    <i className="fa fa-facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/" className="share-link twitter-share" target="_blank">
                                    <i className="fa fa-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" className="share-link linkedin-share" target="_blank">
                                    <i className="fa fa-linkedin" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https:google.com/" className="share-link google-share" target="_blank">
                                    <i className="fa fa-google" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://in.pinterest.com/" className="share-link pinterest-share" target="_blank">
                                    <i className="fa fa-pinterest" />
                                    </a>
                                </li>
                                </ul>
                            </div>

                            </footer>
                        </article>
                        <article className="post format-video">
                            <div className="blog-entry-html-video audio-video">
                            <video poster={require(`../../assets/video/video-cover.jpg`)} controls="controls" preload="none">
                                <source type="video/mp4" src={require(`../../assets/video/Stock-Footage-of-Shopping-for-Womens-Clothing.mp4`)} />
                                <source type="video/webm" src={require(`../../assets/video/Stock-Footage-of-Shopping-for-Women-s-Clothing_VP8.webm`)}  />
                                <source type="video/ogg" src={require(`../../assets/video/Stock-Footage-of-Shopping-for-Women-s-Clothing_libtheora.ogv`)} />
                            </video>
                            </div>
                            <div className="entry-header-section">
                            <div className="entry-meta-date">
                                <Link to="#">June 19, 2017</Link>
                            </div>
                            <div className="entry-title">
                                <h3 className="entry-title">
                                <Link to="/BlogSinglePage" rel="bookmark">Blog Post with HTML5 Video</Link>
                                </h3>
                            </div>
                            <div className="entry-meta">
                                <ul>
                                <li><span className="author vcard">
                                    <Link className="url fn n" href="#" title="View all posts by CiyaShop" rel="author">
                                        <i className="fa fa-user" /> CiyaShop
                                    </Link></span>
                                </li>
                                <li><span className="entry-meta-categories">
                                    <i className="fa fa-folder-open" />&nbsp;
                                    <Link to="#" rel="category tag">Fashion Show</Link></span>
                                </li>
                                <li>
                                    <Link to="#">
                                    <i className="fa fa-comments-o" />
                                    <span className="leave-comment">0</span>
                                    </Link>
                                </li>
                                </ul>
                            </div>
                            </div>
                            <div className="entry-content">
                            <p>The price is something not necessarily defined as financial. It could be time,
                                effort, sacrifice, money or perhaps, something else. The point is that we must
                                be fully aware of the price and be willing to pay it, if we want to have
                                success. This is perhaps the single biggest obstacle that all of us […]
                            </p>
                            </div>
                            <footer className="entry-footer clearfix">
                            <Link to="/BlogSinglePage" className="readmore">Read More</Link>
                            <div className="entry-social share pull-right">
                                <a  className="share-button" data-title="Share it on">
                                <i className="fa fa-share-alt" />
                                </a>
                                <ul className="single-share-box mk-box-to-trigger">
                                <li>
                                    <a href="https://www.facebook.com" className="share-link facebook-share" target="_blank">
                                    <i className="fa fa-facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/" className="share-link twitter-share" target="_blank">
                                    <i className="fa fa-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" className="share-link linkedin-share" target="_blank">
                                    <i className="fa fa-linkedin" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https:google.com/" className="share-link google-share" target="_blank">
                                    <i className="fa fa-google" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://in.pinterest.com/" className="share-link pinterest-share" target="_blank">
                                    <i className="fa fa-pinterest" />
                                    </a>
                                </li>
                                </ul>
                            </div>

                            </footer>
                        </article>
                        <Row>
                            <div className="navigation pagination clearfix col-lg-12 col-md-12 text-center">
                            </div>
                        </Row>
                        </Col>
                    </Row>
                    </Container>
                </div>
                </div>
                </div>
       )
    }
}
export default BlogFullWidth;
