/**
 *  Admin Site Product Edit Page
 */
import React, { Component } from 'react';
import productdata from '../../../api/product';
import { Container } from 'reactstrap';
import ProductEditDetail from '../../../templates/product-edit-detail';


class Productedit extends Component{
    constructor(props)
    {
         super(props);
         this.state={
             AllProduct:productdata,
             ProductId:parseInt(this.props.match.params.id),
             CurrentProduct:null
         }
    }

    componentDidMount()
    {
        let CurrentProductId=this.state.ProductId;
        let allproductdata=this.state.AllProduct;
        if(allproductdata && allproductdata.length > 0)
        {
            for(let product of allproductdata)
            {
                if(product.id === CurrentProductId)
                {
                        this.setState({
                            ...this.state,
                            CurrentProduct:product
                        })
                }
            }
        }

    }
    render(){
        const Productedit = this.state.CurrentProduct;
        return(
                <div>
                    {Productedit !== null ?
                        <div className="site-content">
                        <div className="content-wrapper section-ptb">
                            <Container>
                                <ProductEditDetail product={Productedit} />
                            </Container>
                        </div>
                        </div>

                    :
                        null
                    }
                </div>
        )
    }
}
export default Productedit;
