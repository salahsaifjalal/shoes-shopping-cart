import React, { Component} from 'react';
import {DataContext} from '../Context';



export class Details extends Component {

    static contextType = DataContext;
    state = {
        product: []
    }

    getProduct = () => {
        if (this.props.match.params.id) {
            const res = this.context.products;
            const data = res.filter(item=> {
                return item._id === this.props.match.params.id
            })
            this.setState({product: data})
        }
    };

    componentDidMount() {
        this.getProduct();
    }



    render() {
        const {product} = this.state;
        return (
            <> {

                product.map(item =>( 
                    <div className="details" key={item._id}>
                        <img src = {item.src} alt=""/>
                        <div className = "box">
                            <div className = "row">
                                <h2> {item.title}</h2>
                                    <span> $ {item.price} </span>
                            
                        </div>
                        </div>


                    </div>

                ))



            }
                
            </>
        )
    }


}
export default Details;