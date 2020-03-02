/**
 *  About Us Page
 */
import React, { Component } from 'react';
import AboutBanner2 from '../../widgets/AboutBanner2';
import InterestingFacts from '../../widgets/InterestingFacts';
import OurTeam from '../../widgets/OurTeam';
import BrandLogoSlider2 from '../../widgets/BrandLogoSlider2';
import PageTitle from '../../widgets/PageTitle';
import { Row, Col,Container } from 'reactstrap';

const ourteam = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2
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

class Aboutus extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div className="site-content">
                <div className="inner-intro header_intro header_intro_bg-image header_intro_opacity header_intro_opacity-custom">
                    <Container>
                        <div className="row intro-title align-items-center intro-section-center">
                         <PageTitle title="About Us"/>
                        </div>
                    </Container>
                </div>
                <div className="content-wrapper">
                    <AboutBanner2 />
                    <InterestingFacts />
                    <div className="section-wrapper section-ptb">
                        <Container>
                        <Row className="justify-content-center">
                            <Col sm={12} lg={7}>
                            <div className="section-title text-center">
                                <h2 className="title">Our Team</h2>
                                <p className="text-center">Discover the best collection for autumn of Stylist Art. With so
                                charming, modern and
                                passionate, you certainly love this collection.</p>
                            </div>

                            </Col>
                        </Row>
                        <Row>
                            <OurTeam settings={ourteam} />
                        </Row>
                        </Container>
                    </div>
                    <div className="section-wrapper section-ptb bg-dark-gray">
                        <Container>
                            <BrandLogoSlider2 />
                        </Container>
                    </div>
                </div>
            </div>
        )
    }
}
export default Aboutus;
