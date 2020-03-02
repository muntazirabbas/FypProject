import React, { Component } from 'react'
import ig from 'fetch-instagram';
import Slider from 'react-slick';


const settings = {
  dots: false,
  infinite: true,
  arrows: true,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
};


class Instagram extends Component {

    constructor (props) {
        super (props)

        this.state = {
          APIData: []
        }
    }

  componentWillMount() {
    const apiid = ig({
         accessToken: '6441986712.39e610e.04d86db2af844635bd9df83ad7f4f824',
    });
    const instagramval = apiid.media();
    instagramval.then(res => this.setState({APIData:res.data}));
  }

  render (){
    const {APIData} = this.state;
    return (
        <div class="insta-feed-wrapper">
                <Slider {...settings} >
                  {APIData.map((image,i) =>
                      <div key={i}>
                              <a href={image.link} target="_blank">
                              <img src={`${image.images.standard_resolution.url}`}  />
                          </a>
                      </div>
                  )}
                </Slider>
            </div>
      )
  }
}
export default Instagram;
