/**
 *  Admin Site Product Add
 */
import React, { Component } from 'react';
import { Row, Col,Container, FormGroup, Label, Input } from 'reactstrap';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import ImageUploader from 'react-images-upload';

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
const productslider = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
const productdata = {
    Product_single: "product-single.jpg",
    product_gallery: [
       "product-single.jpg",
       "product-single.jpg",
       "product-single.jpg",
       "product-single.jpg"
    ],
    size:[
        "M",
        "L",
        "XXL",
        "S"
    ],
    colors:[
        "Black",
        "Red",
        "Blue",
        "Green"
    ],
    tags:[
        "Athleisure",
        "Jacket",
        "Women",
        "Clothing",
        "Blazers"
    ]

 }
class Productadd extends Component{
        constructor(props) {
            super(props);
            this.state = {
                pictures: [] ,
                photoIndex: 0,
                isOpen: false,
                ErrorMsg:""
            };
            this.Uploadimage = this.Uploadimage.bind(this);
        }

        Uploadimage(picture) {
            if(picture == '')
            {
                this.setState({
                    ...this.state,
                    ErrorMsg:"File Not Supported"
                })
            }
            else
            {
                this.setState({
                    pictures: this.state.pictures.concat(picture),
                    ErrorMsg:''
                });
            }
        }
        componentDidMount() {
            window.scrollTo(0, 0)
        }
      render(){
        return(
                <div>
                    <div className="site-content">
                        <div className="content-wrapper section-ptb">
                            <Container>
                                <div className="product-content-top single-product single-product-edit">
                                    <Row>
                                        <div className="product-top-left col-xl-5 col-md-6">
                                            <div className="product-top-left-inner">
                                                <div className="ciyashop-product-images">
                                                <div className="ciyashop-product-images-wrapper ciyashop-gallery-style-default ciyashop-gallery-thumb_position-bottom ciyashop-gallery-thumb_vh-horizontal">
                                                    <div className="ciyashop-product-gallery ciyashop-product-gallery--with-images slick-carousel">
                                                    <Slider {...settings} className="ciyashop-product-gallery__wrapper popup-gallery">
                                                        <div className="ciyashop-product-gallery__image">
                                                                <img src={require(`../../../assets/images/${productdata.Product_single}`)}   className="img-fluid" />
                                                        </div>

                                                    </Slider>

                                                    </div>
                                                    <div className="ciyashop-product-thumbnails">
                                                        <Slider {...productslider} className="ciyashop-product-thumbnails__wrapper">
                                                            {productdata.product_gallery.map((pictureimage,index) =>
                                                                <div key={index}>
                                                                    <div className="ciyashop-product-thumbnail__image">
                                                                        <a href="javascript:void(0)">
                                                                            <img src={require(`../../../assets/images/${pictureimage}`)}  className="img-fluid" />
                                                                        </a>
                                                                        <div className="d-flex justify-content-center image-content align-items-center">
                                                                            <ImageUploader
                                                                                buttonText=""
                                                                                withIcon={false}
                                                                                withPreview={true}
                                                                                fileTypeError={this.state.ErrorMsg}
                                                                                onChange={this.Uploadimage}
                                                                                imgExtension={['.jpg', '.jpeg', '.png']}
                                                                            />
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            )}
                                                        </Slider>
                                                    </div>
                                                    <div className="clearfix" />
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                       <div className="product-top-right col-xl-7 col-md-6">
                                        <div className="product-top-right-inner">
                                                <div className="summary entry-summary">
                                                        <FormGroup className="edit-icon">
                                                            <Input type="text" className="form-control product_title" placeholder="Product Name"  />
                                                        </FormGroup>
                                                        <FormGroup className="edit-icon">
                                                            <Input type="text" className="form-control price" placeholder="Product Price"  />
                                                        </FormGroup>
                                                        <FormGroup className="edit-icon">
                                                            <Input  type="textarea" className="form-control" rows="3" placeholder="Product Description" />
                                                        </FormGroup>
                                                        <Label className="title">Size</Label>
                                                        <FormGroup>
                                                            {productdata.size.map((size) =>
                                                                <Label>
                                                                    <Input type="checkbox"/>{' '}
                                                                    {size}
                                                                </Label>
                                                            )}
                                                        </FormGroup>
                                                        <Label className="title">Color</Label>
                                                        <FormGroup>
                                                            {productdata.colors.map((color) =>
                                                                <Label>
                                                                    <Input type="checkbox"/>{' '}
                                                                    {color}
                                                                </Label>
                                                            )}
                                                        </FormGroup>
                                                         <FormGroup>
                                                        <Label className="title pl-0">Brand</Label>
                                                        <Input type="text" class="form-control" placeholder="Product Brand" />
                                                        </FormGroup>

                                                        <Label className="title mb-2">Category</Label>
                                                        <FormGroup>
                                                            {productdata.tags.map((brand) =>
                                                            <Label>
                                                            <Input type="checkbox"/>{' '}
                                                            {brand}
                                                            </Label>
                                                            )}
                                                        </FormGroup>
                                                        <FormGroup>
                                                        <Label className="title pl-0">Product Stock</Label>
                                                        <input type="text" class="form-control" placeholder="Product Stock" ></input>
                                                        </FormGroup>
                                                        <FormGroup>
                                                        <Label className="title pl-0">Total Products</Label>
                                                        <input type="text" className="form-control" placeholder="Total Product" ></input>
                                                        </FormGroup>

                                                        <a href="#" class="btn btn-primary mb-2 mr-2"> Save </a>
                                                        <Link to="/admin-panel/Product" class="btn btn-danger mb-2"> Cancel </Link>
                                                    </div>
                                                </div>
                                        </div>
                                    </Row>
                                    </div>
                            </Container>
                        </div>
                    </div>
            </div>
        )
    }
}
export default Productadd;
