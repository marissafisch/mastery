import React, { Component } from 'react';
import * as products from '../../services/products';

class Stuff extends Component{
    constructor(props){
        super(props)

        this.state = {
            product: {}
        }
    }

componentDidMount(){
    products.get(this.props.match.params.id)
    .then(product => this.setState({product}))
}

render(){
    const {product} = this.state;
    return (
        <div>
            
            <img className="product__image" src={product.image} alt={product.title} />
            <h1>{product.title}</h1>
            
           </div>
    )
}



}

export default Stuff;