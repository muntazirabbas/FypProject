/**
 * Shop Page Social Info
 */
import React , {Component} from 'react';

function SocialFilter() {
       return (
        <div className="widget widget_pgs_social_profiles">
            <h4 className="widget-title">Social Info</h4>
            <div className="social-profiles-wrapper">
                <div className="social-profiles-wrapper-inner social-profiles-default social-profiles-shape-square">
                <div className="social-profiles">
                    <ul>
                    <li><a href="https://www.facebook.com" title="Facebook" target="_blank" ><i className="fa fa-facebook" /></a></li>
                    <li><a href="https://twitter.com/" title="Twitter" target="_blank" ><i className="fa fa-twitter" /></a></li>
                    <li><a href="https://google.com/" title="Google" target="_blank"><i className="fa fa-google" /></a></li>
                    <li><a href="https://vimeo.com/" title="Vimeo" target="_blank"><i className="fa fa-vimeo" /></a></li>
                    <li><a href="https://in.pinterest.com/" title="Pinterest" target="_blank"><i className="fa fa-pinterest" /></a></li>
                    </ul>
                    <div className="clearfix" />
                </div>
                </div>
            </div>
            </div>

       )
}
export default SocialFilter;


