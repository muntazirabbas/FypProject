/**
 * Shop Page Side Bar Filter
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Container, Form, Nav, Button, Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import { Slider } from 'antd';
import "antd/dist/antd.css"
import { uniqueCategory, uniqueSizes, uniqueColors, uniqueMinMaxPrice } from '../../services';
import { categoryValue, sizeValue, colorValue, priceValue } from '../../actions/filter';
import './styles.css';

var removecate = [], removecategorylist = [], removesizelist = [];
class HorizontalFilter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pricecapfilter: true,
            priceplace: [this.props.prices.min, this.props.prices.max],
            isOpen: false,
            pricefilter: true,
            colorfilter: true,
            categoryfilter: true,
            sizefilter: true,
            colordrop: false,
            categorydrop: false,
            sizedrop: false,
            sidedrop:false


        }
        this.pricedrop = this.pricedrop.bind(this);
        this.colordrop = this.colordrop.bind(this);
        this.categorydrop = this.categorydrop.bind(this);
        this.sizedrop = this.sizedrop.bind(this);
        this.showfilter = this.showfilter.bind(this);
        this.closefilter = this.closefilter.bind(this);

        this.setPriceRef = this.setPriceRef.bind(this);
        this.setColorRef = this.setColorRef.bind(this);
        this.setCategoryRef = this.setCategoryRef.bind(this);
        this.setSizeRef = this.setSizeRef.bind(this);

        this.handleClickOutsidePrice = this.handleClickOutsidePrice.bind(this);
        this.handleClickOutsideColor = this.handleClickOutsideColor.bind(this);
        this.handleClickOutsideCategory = this.handleClickOutsideCategory.bind(this);
        this.handleClickOutsidesize = this.handleClickOutsidesize.bind(this);
    }
    
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutsidePrice);
        document.addEventListener('mousedown', this.handleClickOutsideColor);
        document.addEventListener('mousedown', this.handleClickOutsideCategory);
        document.addEventListener('mousedown', this.handleClickOutsidesize);
        window.addEventListener('scroll', this.handleScroll); 
        
        this.setdefaultvalue();
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutsidePrice);
        document.removeEventListener('mousedown', this.handleClickOutsideColor);
        document.removeEventListener('mousedown', this.handleClickOutsideCategory);
        document.removeEventListener('mousedown', this.handleClickOutsidesize);
        window.removeEventListener('scroll', this.handleScroll);


    }
    handleScroll(event) {
        var scrollTop = (document.documentElement && document.documentElement.scrollTop) ||
        document.body.scrollTop;
        if(scrollTop > 490){
            document.getElementById("sticky-filter").setAttribute("class","sticky-filter is-sticky");

        }else{
            document.getElementById("sticky-filter").setAttribute("class","sticky-filter ");
        }
      }
    setdefaultvalue() {
        setTimeout(() => {
            this.props.priceValue({ value: { min: this.props.prices.min, max: this.props.prices.max } })
        }, 1500)
    }
    showfilter(){
        this.setState(prevState => ({
            sidedrop: !prevState.sidedrop
        }));
        // document.getElementById("off-canvas-filter").setAttribute("class","off-canvas-filter-show");
        // document.getElementById("site-header-row").setAttribute("class","off-canvas-overlay");
        // document.getElementById("sticky-filter").setAttribute("class","sticky-filter open");
        
    }
    closefilter(){
        this.setState({
            sidedrop: false
        });
        // document.getElementById("site-header-row").setAttribute("class","site-header-row");
        // document.getElementById("off-canvas-filter").setAttribute("class","off-canvas-filter");
        // document.getElementById("sticky-filter").setAttribute("class","sticky-filter");

    }
    convertValue = (labelValue) => {
        return labelValue.toLocaleString("en", {   
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        })
        
    }
    //Price Filter
    toolformatter = value => {
        var maximumval = this.props.prices.max / 5;
        if (value === 0) {
            value="0";
        }
        else if (value > 0 && value <= 20) {
            value=value * (maximumval * 1) / 20;
        }
        else if (value > 20 && value <= 40) {
            value=value * (maximumval * 2) / 40;
        }
        else if (value > 40 && value <= 60) {
            value=value * (maximumval * 3) / 60;
        }
        else if (value > 60 && value <= 80) {
            value=value * (maximumval * 4) / 80;
        }
        else if (value > 80 && value <= 100) {
            value=value * (maximumval * 5) / 100;
        }
        return this.convertValue(value);
    }

    fncl = (value) => {
        return Number.parseFloat(value).toFixed(0);
    }

    onChangePricePlace = values => {
        var maximumval = this.props.prices.max / 5;

        var value = {
            min: values['0'],
            max: values['1']
        }
        if (value.min == 0) {
            value.min = 0;
        }
        else if (value.min > 0 && value.min <= 20) {
            value.min = parseInt(this.fncl(value.min * (maximumval * 1) / 20));
        }
        else if (value.min > 20 && value.min <= 40) {
            value.min = parseInt(this.fncl(value.min * (maximumval * 2) / 40));
        }
        else if (value.min > 40 && value.min <= 60) {
            value.min = parseInt(this.fncl(value.min * (maximumval * 3) / 60));
        }
        else if (value.min > 60 && value.min <= 80) {
            value.min = parseInt(this.fncl(value.min * (maximumval * 4) / 80));
        }
        else if (value.min > 80 && value.min <= 100) {
            value.min = parseInt(this.fncl(value.min * (maximumval * 5) / 100));
        }
        else {
            value.min = false;
        }

        if (value.max === 0) {
            value.max = 0;
        }
        else if (value.max > 0 && value.max <= 20) {
            value.max = parseInt(this.fncl(value.max * (maximumval * 1) / 20));
        }
        else if (value.max > 20 && value.max <= 40) {
            value.max = parseInt(this.fncl(value.max * (maximumval * 2) / 40));
        }
        else if (value.max > 40 && value.max <= 60) {
            value.max = parseInt(this.fncl(value.max * (maximumval * 3) / 60));
        }
        else if (value.max > 60 && value.max <= 80) {
            value.max = parseInt(this.fncl(value.max * (maximumval * 4) / 80));
        }
        else if (value.max > 80 && value.max <= 100) {
            value.max = parseInt(this.fncl(value.max * (maximumval * 5) / 100));
        }
        else {
            value.max = false;
        }
        this.setState({
            pricecapfilter: false,
            priceplace: values
        });
        this.props.priceValue({ value })
    }

    pricedrop() {
        this.setState(prevState => ({
            pricedrop: !prevState.pricedrop
        }));
    }

    closeprice(priceVal) {
        if (priceVal.min === 0) {
            this.setState({
                pricedrop: false
            })
        }
        else {
            this.setState({
                pricecapfilter: false,
                pricedrop: false
            })
        }
    }
    
    clearprice(pricesval) {
        var value = {
            min: pricesval.min,
            max: pricesval.max
        }
        this.setState({
            pricecapfilter: true,
            pricedrop: false,
            priceplace: [this.props.prices.min, this.props.prices.max]
        })
        this.props.priceValue({ value })
    }
    setPriceRef(node) {
        this.PriceRef = node;
    }

    handleClickOutsidePrice(event) {
        if (this.PriceRef && !this.PriceRef.contains(event.target)) {
            this.setState({
                pricedrop: false
            });
        }
    }

    // Color Filter 
    
    
    setColorRef(node) {
        this.ColorRef = node;
    }

    handleClickOutsideColor(event) {
        if (this.ColorRef && !this.ColorRef.contains(event.target)) {
            this.setState({
                colordrop: false
            });
        }
    }

    colordrop() {
        this.setState(prevState => ({
            colordrop: !prevState.colordrop
        }));
    }

    onClickColorFilter = (event, colors) => {
        var index = colors.indexOf(event.target.value);
        if (event.target.checked) {
            colors.push(event.target.value);
        }
        else {
            colors.splice(index, 1);
        }

        if (colors.length > 0) {
            this.setState({
                removecolorlist: colors,
                colorfilter: false
            })
        }
        else {
            this.setState({
                colorfilter: true
            })
        }
        this.props.colorValue(colors)
    }

    closecolor() {
        this.setState({
            ...this.state,
            colordrop: false
        })
    }
    clearcolor() {
        var colors = [];
        this.setState({
            removecolorlist: colors,
            colorfilter: true
        })
        this.props.colorValue(colors);
    }

    // Category Filter 
    setCategoryRef(node) {
        this.CategoryRef = node;
    }

    handleClickOutsideCategory(event) {
        if (this.CategoryRef && !this.CategoryRef.contains(event.target)) {
            this.setState({
                categorydrop: false
            });
        }
    }

    categorydrop() {
        this.setState(prevState => ({
            categorydrop: !prevState.categorydrop
        }));
    }


    onClickCategoryFilter(event, categorys) {

        var index = categorys.indexOf(event.target.value);
        if (event.target.checked) {
            categorys.push(event.target.value);
        }
        else {
            categorys.splice(index, 1);
        }
        if (categorys.length > 0) {
            this.setState({
                removecategorylist: categorys,
                categoryfilter: false
            })
        }
        else {
            this.setState({
                categoryfilter: true
            })
        }
        this.props.categoryValue(categorys);
    }

    closecategory() {
        this.setState({
            ...this.state,
            categorydrop: false
        })
    }
    clearcategory() {
        var categorys = [];
        this.setState({
            removecategorylist: categorys,
            categoryfilter: true
        })
        this.props.categoryValue(categorys);
    }


    //Size Filter

    setSizeRef(node) {
        this.sizeRef = node;
    }

    handleClickOutsidesize(event) {
        if (this.sizeRef && !this.sizeRef.contains(event.target)) {
            this.setState({
                sizedrop: false
            });
        }
    }

    sizedrop() {
        this.setState(prevState => ({
            sizedrop: !prevState.sizedrop
        }));
    }

    onClickSizeFilter(event, sizes) {
        var index = sizes.indexOf(event.target.value);
        if (event.target.checked) {
            sizes.push(event.target.value);
        }
        else {
            sizes.splice(index, 1);
        }
        if (sizes.length > 0) {
            this.setState({
                removesizelist: sizes,
                sizefilter: false
            })
        }
        else {
            this.setState({
                sizefilter: true
            })
        }
        this.props.sizeValue(sizes);
    }

    closesize() {
        this.setState({
            ...this.state,
            sizedrop: false
        })
    }
    clearsize() {
        var sizes = [];
        this.setState({
            removesizelist: sizes,
            sizefilter: true
        })
        this.props.sizeValue(sizes);
    }

    Capitalize(str) {

        var i = 0;
        for (i; i < str.length; i++) {
            str = str.replace('-', ' ');
            str = str.replace(/\d+/g, '');
        }
        return str.charAt(0).toUpperCase() + str.slice(1);
    }


    render() {
        const { colorfilter, colordrop, removecolorlist, categoryfilter, categorydrop, removecategorylist, sizefilter, sizedrop, removesizelist,sidedrop } = this.state;
        const sizeFilterValues = this.props.filters.size;
        const categoryFilterValues = this.props.filters.category;
        const colorsFilterValues = this.props.filters.color;

        var max = this.props.prices.max;
        var maxdivide = max / 5;
        const marks = {
            0: 0,
            20: ((maxdivide * 1).toLocaleString(navigator.language, { minimumFractionDigits: 0 })),
            40: ((maxdivide * 2).toLocaleString(navigator.language, { minimumFractionDigits: 0 })),
            60: ((maxdivide * 3).toLocaleString(navigator.language, { minimumFractionDigits: 0 })),
            80: ((maxdivide * 4).toLocaleString(navigator.language, { minimumFractionDigits: 0 })),
            100: max.toLocaleString(navigator.language, { minimumFractionDigits: 0 })
        };
        if (removecategorylist && removecategorylist.length > 0) {
            var totalremovecategory = removecategorylist.length;
        }
        if (removecolorlist && removecolorlist.length > 0) {
            var totalremovecolor = removecolorlist.length;
        }
        if (removesizelist && removesizelist.length > 0) {
            var totalremovesize = removesizelist.length;
        }
        return (
            <div className="d-flex align-items-center filters-wrapper">
                <p class="mb-0 filter-title filter-by"><i className="fa fa-filter"></i> Filter by</p>

                <Button onClick={this.showfilter} className="btn-filter">
                    <i className="fa fa-filter"> </i> Filter by
                </Button>

                <div className="horizontal-filter-dropdown" ref={this.setPriceRef}>
                    {(this.state.pricecapfilter) ?
                        <Button className="btn-white dropdown-toggle btn btn-secondary" onClick={this.pricedrop}>Filter By Price</Button>
                        :
                        <p><Button className="btn-white dropdown-toggle bg-highlight" onClick={this.pricedrop}>Filter By Price : <b>{(this.props.filters.value.min).toLocaleString(navigator.language, { minimumFractionDigits: 0 })} - {(this.props.filters.value.max).toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</b></Button><a className="filter-close" onClick={() => this.clearprice(this.props.prices)} to=""></a></p>
                    }
                    {(this.state.pricedrop) ?
                        <div className="filter-wrapper zoomIn animated">
                            <div className="widget-title-header">
                                <h5 className="filter-title">Price Range <span className="btn-close" onClick={() => this.closeprice(this.props.filters.value)}></span></h5>
                            </div>
                            {(this.props.filters.value.max === this.props.prices.max && this.props.filters.value.min === this.props.prices.min) ?
                                <p>Between: <span>$ {(this.props.prices.min).toLocaleString(navigator.language, { minimumFractionDigits: 0 })} - $ {(this.props.prices.max).toLocaleString(navigator.language, { minimumFractionDigits: 0 })} </span> <span className="clear-filter" onClick={() => this.clearprice(this.props.prices)}>Clear</span></p>
                                :
                                <p>Between: <span>$ {(this.props.filters.value.min).toLocaleString(navigator.language, { minimumFractionDigits: 0 })} - $ {(this.props.filters.value.max).toLocaleString(navigator.language, { minimumFractionDigits: 0 })} </span> <span className="clear-filter" onClick={() => this.clearprice(this.props.prices)}>Clear</span></p>
                            }
                            <Slider
                                range
                                step={1}
                                min={0}
                                max={100}
                                tipFormatter={this.toolformatter}
                                defaultValue={this.state.priceplace}
                                onAfterChange={this.onChangePricePlace}
                                marks={marks}
                            />
                        </div>
                        : null}
                </div>

                <div className="horizontal-filter-dropdown" ref={this.setColorRef}>
                    {(colorfilter) ?
                        <Button caret className="btn-white dropdown-toggle" onClick={this.colordrop}>
                            <span className="mb-0">Filter by Color</span>
                        </Button>
                        :
                        <p><Button caret className="btn-white bg-highlight" onClick={this.colordrop}>Color: <b>{(removecolorlist.length === 1) ? this.Capitalize(removecolorlist[0]) : this.Capitalize(removecolorlist[0]) + '+' + (totalremovecolor - 1)}</b></Button><a  className="filter-close" onClick={() => this.clearcolor()} to=""></a></p>
                    }
                    {(colordrop) ?
                        <div className="widget widget_layered_nav widget-layered-nav pgs_widget-layered-nav zoomIn animated">
                            <div className="widget-title-header">
                                <h4 className="widget-title">Filter by Color <a  className="btn-close" onClick={() => this.closecolor()}></a></h4>
                             </div>
                            <div className="pgs-widget-layered-nav-list-container has-scrollbar" style={{ height: '210px' }}>
                                <ul className="pgs-widget-layered-nav-list" tabIndex={0} style={{ right: '-17px' }}>
                                    {this.props.colors.map((color, index) => {
                                        return (
                                            <div className="form-check pgs-filter-checkbox" key={index}>
                                                <input type="checkbox" onClick={(e) => this.onClickColorFilter(e, colorsFilterValues)} value={color} defaultChecked={colorsFilterValues.includes(color) ? true : false} className="form-check-input" id={color} />
                                                <label className="form-check-label"
                                                    htmlFor={color}>{color}</label>
                                            </div>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        : null}
                </div>

                <div className="horizontal-filter-dropdown" ref={this.setCategoryRef}>
                    {(categoryfilter) ?
                        <Button caret className="btn-white dropdown-toggle" onClick={this.categorydrop}>
                            <span className="mb-0">Product Categories</span>
                        </Button>
                        :
                        <p><Button caret className="btn-white bg-highlight" onClick={this.categorydrop}>Category: <b>{(removecategorylist.length === 1) ? this.Capitalize(removecategorylist[0]) : this.Capitalize(removecategorylist[0]) + '+' + (totalremovecategory - 1)}</b></Button><a  className="filter-close" onClick={() => this.clearcategory()} to=""></a></p>
                    }
                    {(categorydrop) ?
                        <div className="widget widget_layered_nav widget-layered-nav pgs_widget-layered-nav zoomIn animated">
                            <div className="widget-title-header">
                                <h4 className="widget-title">Product Categories<a  className="btn-close" onClick={() => this.closecategory()}></a></h4>
                            </div>
                           <div className="pgs-widget-layered-nav-list-container has-scrollbar" style={{ height: '210px' }}>
                                {this.props.categorys.map((category, index) => {
                                    return (
                                        <div className="form-check pgs-filter-checkbox" key={index}>
                                            <input type="checkbox" onClick={(e) => this.onClickCategoryFilter(e, categoryFilterValues)} value={category} defaultChecked={categoryFilterValues.includes(category) ? true : false} className="form-check-input" id={category} />
                                            <label className="form-check-label"
                                                htmlFor={category}>{category}</label>
                                        </div>)
                                })}
                            </div>
                        </div>
                        : null}
                </div>


                <div className="horizontal-filter-dropdown" ref={this.setSizeRef}>
                    {(sizefilter) ?
                        <Button caret className="btn-white dropdown-toggle" onClick={this.sizedrop}>
                            <span className="mb-0">Filter By Size</span>
                        </Button>
                        :
                        <p><Button caret className="btn-white bg-highlight" onClick={this.sizedrop}>Size: <b>{(removesizelist.length === 1) ? this.Capitalize(removesizelist[0]) : this.Capitalize(removesizelist[0]) + '+' + (totalremovesize - 1)}</b></Button><a  className="filter-close" onClick={() => this.clearsize()} ></a></p>
                    }
                    {(sizedrop) ?
                        <div className="widget widget_layered_nav widget-layered-nav pgs_widget-layered-nav zoomIn animated">
                            <div className="widget-title-header">
                                <h4 className="widget-title">Filter By Size<a  className="btn-close" onClick={() => this.closesize()}></a></h4>
                            </div>
                            <div className="pgs-widget-layered-nav-list-container has-scrollbar" style={{ height: '210px' }}>
                                {this.props.sizes.map((size, index) => {
                                    return (

                                        <div class="form-check pgs-filter-checkbox">
                                            <input type="checkbox" onClick={(e) => this.onClickSizeFilter(e, sizeFilterValues)} value={size} defaultChecked={sizeFilterValues.includes(size) ? true : false} class="form-check-input" id={size} />
                                            <label class="form-check-label" htmlFor={size}>{size}</label>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        : null}
                </div>


                <div className="site-header-row" id="site-header-row"></div>
                
                {/* Responsive Mobile */}
                <div className={"off-canvas-filter horizontal-mobile-filter"+ (sidedrop ? " filter-open" : " ")}   id="off-canvas-filter">
                    <div class="sidebar-widget-heading">
                        <button className="apply-filter-btn" onClick={this.closefilter} >Apply Filter</button>
                        <a  onClick={this.closefilter} class="close-sidebar-widget"></a>
                    </div>
                    <div className="horizontal-filter-dropdown" >
                
                        <div className="filter-wrapper">
                            <h5 className="filter-title">Price Range</h5>
                            {(this.props.filters.value.max === this.props.prices.max && this.props.filters.value.min === this.props.prices.min) ?
                                <p>Between: <span>$ {this.props.prices.min.toLocaleString(navigator.language, { minimumFractionDigits: 0 })} - $ {this.props.prices.max.toLocaleString(navigator.language, { minimumFractionDigits: 0 })} </span> <span className="clear-filter" onClick={() => this.clearprice(this.props.prices)}>Clear</span></p>
                                :
                                <p>Between: <span>$ {this.props.filters.value.min.toLocaleString(navigator.language, { minimumFractionDigits: 0 })} - $ {this.props.filters.value.max.toLocaleString(navigator.language, { minimumFractionDigits: 0 })} </span> <span className="clear-filter" onClick={() => this.clearprice(this.props.prices)}>Clear</span></p>
                            }
                            <Slider
                                 range
                                 step={1}
                                 min={0}
                                 max={100}
                                 tipFormatter={this.toolformatter}
                                 value={this.state.priceplace}
                                 onChange={this.onChangePricePlace}
                                 marks={marks}
                            />
                        </div>
                </div>
                    <div className="horizontal-filter-dropdown" >
                    
                            <div className="widget widget_layered_nav widget-layered-nav pgs_widget-layered-nav">
                                <div className="widget-title-header">
                                    <h4 className="widget-title">Filter by Color </h4>
                                </div>
                                <div className="pgs-widget-layered-nav-list-container has-scrollbar" style={{ height: '210px' }}>
                                    <ul className="pgs-widget-layered-nav-list" tabIndex={0} style={{ right: '-17px' }}>
                                        {this.props.colors.map((color, index) => {
                                            return (
                                                <div className="form-check pgs-filter-checkbox" key={index}>
                                                    <input type="checkbox" onClick={(e) => this.onClickColorFilter(e, colorsFilterValues)} value={color} defaultChecked={colorsFilterValues.includes(color) ? true : false} className="form-check-input" id={color} />
                                                    <label className="form-check-label"
                                                        htmlFor={color}>{color}</label>
                                                </div>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                    </div>
                    <div className="horizontal-filter-dropdown" >
                            <div className="widget widget_layered_nav widget-layered-nav pgs_widget-layered-nav">
                                <div className="widget-title-header">
                                    <h4 className="widget-title">Product Categories</h4>
                                </div>
                            <div className="pgs-widget-layered-nav-list-container has-scrollbar" style={{ height: '210px' }}>
                                    {this.props.categorys.map((category, index) => {
                                        return (
                                            <div className="form-check pgs-filter-checkbox" key={index}>
                                                <input type="checkbox" onClick={(e) => this.onClickCategoryFilter(e, categoryFilterValues)} value={category} defaultChecked={categoryFilterValues.includes(category) ? true : false} className="form-check-input" id={category} />
                                                <label className="form-check-label"
                                                    htmlFor={category}>{category}</label>
                                            </div>)
                                    })}
                                </div>
                            </div>
                            
                    </div>
                    <div className="horizontal-filter-dropdown">
                        <div className="widget widget_layered_nav widget-layered-nav pgs_widget-layered-nav">
                            <div className="widget-title-header">
                                <h4 className="widget-title">Filter By Size</h4>
                            </div>
                            <div className="pgs-widget-layered-nav-list-container has-scrollbar" style={{ height: '210px' }}>
                                {this.props.sizes.map((size, index) => {
                                    return (

                                        <div class="form-check pgs-filter-checkbox">
                                            <input type="checkbox" onClick={(e) => this.onClickSizeFilter(e, sizeFilterValues)} value={size} defaultChecked={sizeFilterValues.includes(size) ? true : false} class="form-check-input" id={size} />
                                            <label class="form-check-label" htmlFor={size}>{size}</label>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
           
            </div>

        )
    }
}

const mapDispatchToProps = state => ({
    categorys: uniqueCategory(state.data.products),
    sizes: uniqueSizes(state.data.products),
    colors: uniqueColors(state.data.products),
    prices: uniqueMinMaxPrice(state.data.products),
    filters: state.filters
})

export default connect(
    mapDispatchToProps,
    { categoryValue, sizeValue, colorValue, priceValue }
)(HorizontalFilter);