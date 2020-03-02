/*
* Admin Site Product Edit Page
*/
import React , {Component} from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { Row, FormGroup, Label, Input } from 'reactstrap';
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

class ProductEditDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
          pictures: [] ,
          photoIndex: 0,
          isOpen: false,
        };
      }

    state1 = {
        newImage: 'product-01.jpg'
     }

     componentDidMount() {
        this.setState({
           newImage: 'product-01.jpg'
        })
     }

    //function for preview images
    changePreviewImage(image) {
        this.setState({
           newImage: image
        });
    }


    ImageChange(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }


    render() {
        const { photoIndex, isOpen } = this.state;
        const {product} = this.props;
        const images=[];
        {product.pictures.map((pic)=>
            images.push(require(`../../assets/images/${pic}`))
        )}
        return (
            <section>
                <div className="product-content-top single-product single-product-edit">
                    <Row>
                        <div className="product-top-left col-xl-5 col-md-6">
                            <div className="product-top-left-inner">
                                <div className="ciyashop-product-images">
                                <div className="ciyashop-product-images-wrapper ciyashop-gallery-style-default ciyashop-gallery-thumb_position-bottom ciyashop-gallery-thumb_vh-horizontal">
                                    <div className="ciyashop-product-gallery ciyashop-product-gallery--with-images slick-carousel">
                                    <Slider {...settings} className="ciyashop-product-gallery__wrapper popup-gallery">
                                        <div className="ciyashop-product-gallery__image">
                                                <img src={require(`../../assets/images/${product.pictures[0]}`)}  className="img-fluid" />
                                        </div>
                                    </Slider>
                                    <div className="ciyashop-product-gallery_buttons_wrapper">
                                        <div className="ciyashop-product-gallery_button ciyashop-product-gallery_button-zoom popup-gallery" onClick={() => this.setState({ isOpen: true })} >
                                        <Link to="#" className="ciyashop-product-gallery_button-link-zoom">
                                            <i className="fa fa-arrows-alt" />
                                        </Link>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="ciyashop-product-thumbnails">
                                        <Slider {...productslider} className="ciyashop-product-thumbnails__wrapper">
                                            {product.pictures.map((pictureimage,index) =>
                                                <div key={index}>
                                                    <div className="ciyashop-product-thumbnail__image">
                                                        <a href="javascript:void(0)">
                                                            <img src={require(`../../assets/images/${pictureimage}`)}  className="img-fluid" />
                                                        </a>
                                                        <div className="d-flex justify-content-center image-content align-items-center">
                                                            <ImageUploader
                                                                buttonText=""
                                                                onChange={() => this.ImageChange()}
                                                                withPreview
                                                                withIcon={false}
                                                                maxFileSize={5242880}
                                                                imgExtension={['.jpg', '.gif', '.png', '.gif']}
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
                                            <Input type="text" className="form-control product_title" placeholder="Product Name" defaultValue={product.name} />
                                        </FormGroup>
                                        <FormGroup className="edit-icon">
                                            <Input type="text" className="form-control price" placeholder="Product Price" defaultValue={`$${product.salePrice.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}`} />
                                        </FormGroup>
                                        <FormGroup className="edit-icon">
                                            <Input  type="textarea" className="form-control" rows="3" placeholder="Product Description" defaultValue={product.description} />
                                        </FormGroup>
                                        <Label className="title">Size</Label>
                                        <FormGroup>
                                            {product.size.map((size) =>
                                                <Label>
                                                    <Input type="checkbox"/>{' '}
                                                    {size}
                                                </Label>
                                            )}
                                        </FormGroup>
                                        <Label className="title">Color</Label>
                                        <FormGroup>
                                            {product.colors.map((color) =>
                                                <Label>
                                                    <Input type="checkbox"/>{' '}
                                                    {color}
                                                </Label>
                                            )}
                                        </FormGroup>
                                        <Label className="title">Category</Label>
                                        <Input type="text" class="form-control" placeholder="Product Category" defaultValue={product.category} />

                                        <Label className="title">Brand</Label>
                                        <FormGroup>
                                            {product.tags.map((brand) =>
                                            <Label>
                                            <Input type="checkbox"/>{' '}
                                            {brand}
                                            </Label>
                                            )}
                                        </FormGroup>

                                        <Label className="title">Total Products</Label>
                                        <input type="text" className="form-control" placeholder="Total Product" defaultValue={product.stock}></input>

                                        <Label className="title">Product Stock</Label>
                                        <input type="text" class="form-control" placeholder="Product Stock" defaultValue={product.stock}></input>

                                        <a href="#" class="btn btn-primary mb-2 mr-2"> Update </a>
                                        <Link to="/admin-panel/Product" class="btn btn-danger mb-2"> Cancel </Link>
                                    </div>
                                </div>
                        </div>
                    </Row>
                    </div>



                    <div>


                        {isOpen && (
                            <Lightbox
                                mainSrc={images[photoIndex]}
                                nextSrc={images[(photoIndex + 1) % images.length]}
                                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                onCloseRequest={() => this.setState({ isOpen: false })}
                                onMovePrevRequest={() =>
                                this.setState({
                                    photoIndex: (photoIndex + images.length - 1) % images.length,
                                })
                                }
                                onMoveNextRequest={() =>
                                this.setState({
                                    photoIndex: (photoIndex + 1) % images.length,
                                })
                                }
                            />
                        )}
                    </div>

        </section>




        )
    }
}
export default ProductEditDetail;

