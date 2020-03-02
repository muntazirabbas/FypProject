
/**
 * Home 3 Sale Banner
 */
import React , {Component} from 'react';
import { Link } from 'react-router-dom';

class HomeSaleBanner extends Component {

   render() {
    return (
        <div className="col-sm-12">
            <div className="ciyashop_banner_wrapper">
                <div className="ciyashop_banner ciyashop_banner-style-style-1 ciyashop_banner-effect-none ciya-banner-3">
                    <img className="ciyashop_banner-image img-fluid inline" alt="Banner" src={require(`../../assets/images/categories/modern/sub-banner.jpg`)}  />
                <div className="ciyashop_banner-content p-4 p-sm-5 ciyashop_banner-content-hleft ciyashop_banner-content-vmiddle ">
                    <div className="ciyashop_banner-content-wrapper">
                    <div className="ciyashop_banner-content-inner-wrapper">
                        <div className="ciyashop_banner-text-wrap ciyashop_banner-text-wrap-1 ciyashop_banner-text-bg_color hidden-lg hidden-md hidden-sm hidden-xs">
                        <div className="ciyashop_banner-text tag-text"> only 24 hours</div>
                        </div>
                        <div className="ciyashop_banner-text-wrap ciyashop_banner-text-wrap-2 hidden-lg hidden-md hidden-sm hidden-xs">
                        <div className="ciyashop_banner-text"> Up To 50% Off</div>
                        </div>
                        <div className="ciyashop_banner-text-wrap ciyashop_banner-text-wrap-3 hidden-lg hidden-md hidden-sm hidden-xs">
                        <div className="ciyashop_banner-text"> Final Sale Items</div>
                        </div>
                        <div className="ciyashop_banner-btn-wrap ciyashop_banner-btn-style-link ciyashop_banner-btn-shape-square">
                        <Link to="/shop" className="ciyashop_banner-btn inline_hover">Shop now</Link></div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
      )
}
}

export default HomeSaleBanner;

