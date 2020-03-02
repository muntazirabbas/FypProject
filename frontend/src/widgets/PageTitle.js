
/**
 * Page title component
 */
import React from 'react';
import { Col } from 'reactstrap';
import {Link} from 'react-router-dom';

function PageTitle(props) {
   return (
      <Col>
      <div className="intro-title-inner">
      <h1>{props.title}</h1>
      </div>
      <ul className="ciyashop_breadcrumbs page-breadcrumb breadcrumbs">
          <li className="home">
              <span>
              <Link className="bread-link   " to="/">Home</Link>
              </span>
          </li>
          <li><span>{props.title}</span></li>
      </ul>
      </Col>
   )
}

export default PageTitle;