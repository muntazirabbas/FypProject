/**
 * ProductSlider Widget
 */
import React, { Component } from "react";
import Slider from "react-slick";
import { Row, Col, Container } from "reactstrap";
import { Link } from "react-router-dom";
import MyProducts from "../api/product.json";
import { ToastContainer, toast } from "react-toastify";

function ProductSlider(props) {
  console.log("PROPS RECEIVED IN SLIDER", props);
  const settings = props.settings;
  const productSub = props.productSub;
  var cloneproduct = [];
  var cnt = 0;
  props.products.map((product, index) => {
    if (product.category === productSub && cnt < 6) {
      // cloneproduct=product.push(cloneproduct);
      cloneproduct[cnt] = product;
      cnt++;
    }
  });
  function AddToCart(
    ProductID,
    ProductName,
    ProductImage,
    Qty,
    Rate,
    StockStatus
  ) {
    var Cart = JSON.parse(localStorage.getItem("LocalCartItems"));
    if (Cart == null) Cart = new Array();
    let selectedProduct = Cart.find(
      product => product.ProductName === ProductName
    );
    if (selectedProduct == null) {
      Cart.push({
        ProductID: ProductID,
        ProductName: ProductName,
        ProductImage: ProductImage,
        Qty: Qty,
        Rate: Rate,
        StockStatus: StockStatus
      });
      localStorage.removeItem("LocalCartItems");
      localStorage.setItem("LocalCartItems", JSON.stringify(Cart));

      toast.success("Item Added to Cart");
    } else {
      toast.warning("Item is already in Cart");
    }
  }

  function CheckCardItem(ID) {
    let checkcart = false;
    var Cart = JSON.parse(localStorage.getItem("LocalCartItems"));
    if (Cart && Cart.length > 0) {
      for (const cartItem of Cart) {
        if (cartItem.ProductID === ID) {
          checkcart = true;
        }
      }
    }
    return checkcart;
  }
  function CheckWishList(ID) {
    let wishlist = false;
    var Wish = JSON.parse(localStorage.getItem("LocalWishListItems"));

    if (Wish && Wish.length > 0) {
      for (const wishItem of Wish) {
        if (wishItem.ProductID === ID) {
          wishlist = true;
        }
      }
    }
    return wishlist;
  }

  function AddToWishList(
    ProductID,
    ProductName,
    ProductImage,
    Qty,
    Rate,
    StockStatus
  ) {
    var Cart = JSON.parse(localStorage.getItem("LocalWishListItems"));
    if (Cart == null) Cart = new Array();

    let selectedProduct = Cart.find(product => product.ProductID === ProductID);
    if (selectedProduct == null) {
      Cart.push({
        ProductID: ProductID,
        ProductName: ProductName,
        ProductImage: ProductImage,
        Qty: Qty,
        Rate: Rate,
        StockStatus: StockStatus
      });
      localStorage.removeItem("LocalWishListItems");
      localStorage.setItem("LocalWishListItems", JSON.stringify(Cart));

      toast.success("Item Added to WishList");
    } else {
      toast.warning("Item is already in WishList");
    }
  }

  function rating(productrat) {
    let rat = [];
    let i = 1;
    while (i <= 5) {
      if (i <= productrat) {
        rat.push(<i className="fa fa-star" />);
      } else {
        rat.push(<i className="fa fa-star-o" />);
      }
      i += 1;
    }
    return rat;
  }

  return (
    <Col sm={12}>
      <ToastContainer autoClose={1000} />
      <div className="products-listing-items-wrapper products-listing-carousel">
        <div
          className="products"
          data-nav-arrow="false"
          data-items={4}
          data-md-items={3}
          data-sm-items={3}
          data-xs-items={2}
          data-xx-items={1}
          data-space={20}
        >
          <Slider
            {...settings}
            className="slider-spacing-10 slider-arrow-hover"
          >
            {cloneproduct.map((product, index) => (
              <div>
                <div className="item">
                  <div className="product product_tag-black product-hover-style-default product-hover-button-style-dark product_title_type-single_line product_icon_type-line-icon">
                    <div className="product-inner element-hovered">
                      <div className="product-thumbnail">
                        <div className="product-thumbnail-inner">
                          <a href={`/shop/${product.category}/${product.id}`}>
                            {product.pictures[0] ? (
                              <div className="product-thumbnail-main">
                                <img
                                  src={product.pictures[0]}
                                  className="img-fluid"
                                />
                              </div>
                            ) : null}
                            {product.pictures[0] ? (
                              <div className="product-thumbnail-swap">
                                <img
                                  src={product.pictures[0]}
                                  className="img-fluid"
                                />
                              </div>
                            ) : null}
                          </a>
                        </div>

                        <div className="product-actions">
                          <div className="product-actions-inner">
                            <div className="product-action product-action-add-to-cart">
                              {!CheckCardItem(product.id) ? (
                                <Link
                                  onClick={() =>
                                    AddToCart(
                                      product.id,
                                      product.name,
                                      product.pictures[0],
                                      1,
                                      product.salePrice,
                                      "In Stock"
                                    )
                                  }
                                  className="button add_to_cart_button"
                                  rel="nofollow"
                                >
                                  Add to cart
                                </Link>
                              ) : (
                                <Link
                                  to="/ShopingCart"
                                  className="button add_to_cart_button"
                                  rel="nofollow"
                                >
                                  View Cart
                                </Link>
                              )}
                            </div>
                            <div className="product-action product-action-wishlist">
                              {!CheckWishList(product.id) ? (
                                <Link
                                  onClick={() =>
                                    AddToWishList(
                                      product.id,
                                      product.name,
                                      product.pictures[0],
                                      1,
                                      product.salePrice,
                                      "In Stock"
                                    )
                                  }
                                  className="add_to_wishlist"
                                  data-toggle="tooltip"
                                  data-original-title="Wishlist"
                                  data-placement="top"
                                >
                                  {" "}
                                  Add to Wishlist
                                </Link>
                              ) : (
                                <Link
                                  to="/wishlist"
                                  className="add_to_wishlist_fill"
                                  data-toggle="tooltip"
                                  data-original-title="Wishlist"
                                  data-placement="top"
                                >
                                  View Wishlist
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-info">
                        <span className="ciyashop-product-category">
                          {product.category}
                        </span>
                        <h3 className="product-name">
                          <a href={`/shop/${product.category}/${product.id}`}>
                            {product.name}
                          </a>
                        </h3>
                        <div className="product-rating-price">
                          <span className="price">
                            <ins>
                              <span className="price-amount amount">
                                <span className="currency-symbol">$</span>
                                {product.salePrice.toLocaleString(
                                  navigator.language,
                                  { minimumFractionDigits: 0 }
                                )}
                              </span>
                            </ins>
                          </span>
                          <div className="product-rating">
                            {rating(product.rating)}
                          </div>
                        </div>
                        <div className="product-details__short-description">
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Col>
  );
}
export default ProductSlider;
