/**
 *  Blog Single Page
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../widgets/PageTitle';
import { Row, Col,Container,Input,Button } from 'reactstrap';
import BlogSingPageSlider from '../../widgets/BlogSingPageSlider.js';

class BlogSinglePage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
                <div className="site-content">
                <div className="inner-intro header_intro header_intro_bg-image header_intro_opacity header_intro_opacity-custom">
                    <Container>
                        <Row className="intro-title align-items-center intro-section-center">
                            <PageTitle title="Blog single"/>
                        </Row>
                    </Container>
                </div>
                <div className="content-wrapper">
                    <div className="section-wrapper single-post section-ptb pb-5">
                        <Container>
                            <Row>
                                <Col sm={12} md={12} lg={8} xl={9}>
                                    <article className="post format-standard">
                                        <div className="post-entry-image clearfix">
                                            <img src={require(`../../assets/images/blog/blog-01.jpg`)} className="img-fluid" alt="" />
                                        </div>

                                        <div className="entry-header-section">
                                            <div className="entry-meta-date">
                                                <Link to="#">August 14, 2017</Link>
                                            </div>
                                            <div className="entry-meta">
                                                <ul>
                                                    <li><span className="author vcard">
                                                        <Link className="url fn n" to="#" title="View all posts by CiyaShop" rel="author">
                                                            <i className="fa fa-user"></i> CiyaShop
                                                    </Link></span>
                                                    </li>
                                                    <li><span className="entry-meta-categories">
                                                        <i className="fa fa-folder-open"></i>&nbsp;
                                                    <Link to="#" rel="category tag">Clothing</Link></span>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                            <i className="fa fa-comments-o"></i>
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
                                                truth. we also know those epic stories, those modern-day legends surrounding the
                                                early failures of such supremely successful folks as Michael Jordan and Bill
                                                Gates. We can look a bit further back in time to Albert Einstein or even further
                                                back to Abraham Lincoln. what made each of these people so successful?
                                                motivation. we know this in our gut, but what can we do about it? how can we
                                                motivate ourselves? one of the most difficult aspects of achieving success is
                                                staying motivated over the long haul. motivation will almost always beat mere
                                                talent.
                                    </p>
                                            <p className="mb-0">Motivation is not an accident or something that someone else can give you – you
                                                are the only one with the power to motivate you. motivation cannot be an
                                                external force, it must come from within as the natural product of your desire
                                                to achieve something and your belief that you are capable to succeed at your
                                                goal. positive pleasure-oriented goals are much more powerful motivators than
                                                negative fear-based ones. Although each is successful separately, the right
                                                combination of both is the most powerful motivational force known to humankind.
                                    </p>
                                        </div>

                                        <footer className="entry-footer clearfix">
                                            <div className="entry-social share pull-right">
                                                <Link  className="share-button" data-title="Share it on">
                                                    <i className="fa fa-share-alt"></i>
                                                </Link>
                                                <ul className="single-share-box mk-box-to-trigger">
                                                    <li>
                                                        <a target="_blank" href="https://www.facebook.com" className="share-link facebook-share">
                                                            <i className="fa fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a target="_blank" href="https://twitter.com/" className="share-link twitter-share">
                                                            <i className="fa fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a target="_blank" href="https://linkedin.com/" className="share-link linkedin-share">
                                                            <i className="fa fa-linkedin"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a target="_blank" href="https://google.com/" className="share-link google-share">
                                                            <i className="fa fa-google"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a target="_blank" href="https://in.pinterest.com/" className="share-link pinterest-share">
                                                            <i className="fa fa-pinterest"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </footer>
                                    </article>
                                    <nav className="navigation post-navigation" role="navigation">
                                        <h2 className="screen-reader-text">Post navigation</h2>
                                        <div className="nav-links">
                                            <div className="nav-previous">
                                                <Link  rel="prev">« Blog Post With Image Slider
                                        </Link>
                                            </div>
                                        </div>
                                    </nav>
                                    <div className="related-posts">
                                        <h3 className="title">Related Posts</h3>
                                        <div className="related-posts-section">
                                            <div className="owl-carousel owl-loaded owl-drag" data-nav-dots="true" data-items="3" data-md-items="3" data-sm-items="2" data-xs-items="2" data-xx-items="1" data-space="15">


                                                <div className="owl-stage-outer">
                                                    <div className="owl-stage" >

                                                    <BlogSingPageSlider />

                                                    </div></div><div className="owl-nav disabled"><Button type="button" role="presentation" className="owl-prev"><i className="fa fa-angle-left fa-2x"></i></Button><Button type="button" role="presentation" className="owl-next"><i className="fa fa-angle-right fa-2x"></i></Button></div><div className="owl-dots disabled"><Button role="button" className="owl-dot active"><span></span></Button></div></div>
                                        </div>
                                    </div>
                                    <div className="comments-area">
                                        <section className="respond-form">
                                            <div className="comment-respond">
                                                <h3 className="comment-reply-title text-blue">Leave a Reply</h3>
                                                <form action="#" method="post" id="commentform" className="comment-form contact-form" novalidate="">

                                                    <p className="comment-notes"><span id="email-notes">Your email address will not
                                                    be published.</span> Required fields are marked <span className="required">*</span>
                                                    </p>
                                                    <div className="section-field comment-form-author"><i className="fa fa-user">&nbsp;</i>
                                                        <Input id="author" className="placeholder" placeholder="Name*" name="author" type="text" value="" size="30" aria-required="true" />
                                                    </div>
                                                    <div className="section-field comment-form-email"><i className="fa fa-envelope-o">&nbsp;</i>
                                                        <Input id="email" className="placeholder" placeholder="Email*" name="email" type="text" value="" size="30" aria-required="true" /></div>
                                                    <div className="section-field comment-form-url"><i className="fa fa-envelope-o">&nbsp;</i>
                                                        <Input id="url" name="url" placeholder="Website" type="text" value="" size="30" /> </div>
                                                    <div className="section-field textarea comment-form-comment"><i className="fa fa-pencil">&nbsp;</i><textarea id="comment" className="Input-message placeholder" name="comment" placeholder="Comment" cols="45" rows="8" aria-required="true"></textarea></div>
                                                    <p className="comment-form-cookies-consent ml-4">
                                                        <Input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" value="yes" /><label for="wp-comment-cookies-consent">Save my name, email, and website in
                                                    this browser for the next time I comment.</label></p>
                                                    <p className="form-submit">
                                                        <Input name="submit" type="button" id="submit" className="submit button pull-left" value="Post Comment" />
                                                        <Input type="hidden" name="comment_post_ID" value="33" id="comment_post_ID" />
                                                    </p>

                                                </form>
                                            </div>
                                        </section>
                                    </div>
                                </Col>
                                <Col sm={12} md={12} lg={4} xl={3} className="sidebar">
                                    <div className="widget widget_search">
                                    <h4 className="widget-title">Search</h4>
                                        <form role="search" id="searchform" className="clearfix" action="">
                                            <label className="screen-reader-text" for="s">Search for:</label>
                                            <Input type="text"   placeholder="Search the Site…" />
                                            <Button className="search-button" value="Search" type="button"> <i className="fa fa-search"></i> </Button>
                                        </form>
                                    </div>
                                    <div className="widget widget_recent_entries">
                                        <h4 className="widget-title">Recent Posts</h4>
                                        <div className="recent-post">
                                            <div className="recent-post-image">
                                                <img width="150" height="150" src={require(`../../assets/images/blog/recent-01.jpg`)} className="img-fluid" alt="" />
                                            </div>
                                            <div className="recent-post-info">
                                                <Link to="/BlogSinglePage">Blog Post With Image</Link>
                                                <span className="post-date"><i className="fa fa-calendar"></i>August 14, 2017</span>
                                            </div>
                                        </div>
                                        <div className="recent-post">
                                            <div className="recent-post-image">
                                                <img width="150" height="150" src={require(`../../assets/images/blog/recent-02.jpg`)} className="img-fluid" alt="" />
                                            </div>
                                            <div className="recent-post-info">
                                                <Link to="/BlogSinglePage">Blog Post With Image Slider</Link>
                                                <span className="post-date"><i className="fa fa-calendar"></i>August 9, 2017</span>
                                            </div>
                                        </div>
                                        <div className="recent-post">
                                            <div className="recent-post-image">
                                                <img width="150" height="150" src={require(`../../assets/images/blog/recent-03.jpg`)} className="img-fluid" alt="" />
                                            </div>
                                            <div className="recent-post-info">
                                                <Link to="/BlogSinglePage">Blog Post With Custom Quote</Link>
                                                <span className="post-date"><i className="fa fa-calendar"></i>July 27, 2017</span>
                                            </div>
                                        </div>
                                        <div className="recent-post">
                                            <div className="recent-post-image">
                                                <img width="150" height="150" src={require(`../../assets/images/blog/recent-04.jpg`)} className="img-fluid" alt="" />
                                            </div>
                                            <div className="recent-post-info">
                                                <Link to="/BlogSinglePage"> Blog Post with Youtube Video</Link>
                                                <span className="post-date"><i className="fa fa-calendar"></i>July 20, 2017</span>
                                            </div>
                                        </div>
                                        <div className="recent-post">
                                            <div className="recent-post-image">
                                                <img width="150" height="150" src={require(`../../assets/images/blog/recent-05.jpg`)} className="img-fluid" alt="" />
                                            </div>
                                            <div className="recent-post-info">
                                                <Link to="/BlogSinglePage"> Blog Post with Audio</Link>
                                                <span className="post-date"><i className="fa fa-calendar"></i>July 18, 2017</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget widget_archive">
                                        <h4 className="widget-title">Archives</h4>
                                        <ul>
                                            <li><Link to="#">August 2017</Link>
                                            </li>
                                            <li><Link to="#">July 2017</Link>
                                            </li>
                                            <li><Link to="#">June 2017</Link>
                                            </li>
                                            <li><Link to="#">May 2017</Link></li>
                                        </ul>
                                    </div>
                                    <div className="widget widget_categories">
                                        <h4 className="widget-title">Categories</h4>
                                        <ul>
                                            <li className="cat-item"><Link className="" to="#"><span className="widget_categories-post-title">Clothing</span></Link><span className="widget_categories-post-count">(3)</span>
                                            </li>
                                            <li className="cat-item"><Link className="" to="#"><span className="widget_categories-post-title">Fashion</span></Link><span className="widget_categories-post-count">(3)</span>
                                            </li>
                                            <li className="cat-item"><Link className="" to="#"><span className="widget_categories-post-title">Fashion show</span></Link><span className="widget_categories-post-count">(3)</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="widget widget_meta">
                                        <h4 className="widget-title">Meta</h4>
                                        <ul>
                                            <li><Link to="#">Log in</Link></li>
                                            <li><Link to="#">Entries <abbr title="Really Simple Syndication">RSS</abbr></Link></li>
                                            <li><Link to="#">Comments <abbr title="Really Simple Syndication">RSS</abbr></Link></li>
                                            <li><Link to="#" title="Powered by WordPress, state-of-the-art semantic personal publishing platform.">WordPress.org</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="widget widget_pgs_social_profiles">
                                        <h4 className="widget-title">Social Info</h4>
                                        <div className="social-profiles-wrapper-inner social-profiles-default social-profiles-shape-square">
                                            <div className="social-profiles">
                                                <ul>
                                                    <li><a href="https://www.facebook.com" title="Facebook" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                                    <li><a href="https://twitter.com/" title="Twitter" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                                    <li><a href="https://google.com/" title="Google" target="_blank"><i className="fa fa-google"></i></a></li>
                                                    <li><a href="https://vimeo.com/" title="Vimeo" target="_blank"><i className="fa fa-vimeo"></i></a></li>
                                                    <li><a href="https://in.pinterest.com/" title="Pinterest" target="_blank"><i className="fa fa-pinterest"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>


        )
    }
}
export default BlogSinglePage;
