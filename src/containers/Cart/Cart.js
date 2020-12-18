import React, { Component } from 'react';

import { connect } from 'react-redux';

class Cart extends Component {

    state = {
        cartItems: [],
        menuItems: [],
        url: "https://localhost:5001/MenuItem/",
        totalPrice: 0
    };

    componentDidMount = () => {

        const query = new URLSearchParams(this.props.location.search);
        const items = [];
        const arr = [];
        
        for(let param of query.entries()) {
            items.push({ id: param[0], qty: param[1] });
            let parsedArr =  param[1].split("|");
            arr.push({ id: param[0], name: parsedArr[1], price: parsedArr[2], qty: parsedArr[0]})
        }
        this.setState({ menuItems: arr } );
        
        this.setState({ cartItems: items } );

        this.props.onDDD(items);
    };

    cancelHandler = () => {
        this.props.history.goBack();
    }

    continueHandler = () => {

        alert('You have bought 777$');
        /*
        this.props.history.push({
            pathname: '/contact-info',
        })
        */
    }

    render() {
        
        const menuItems = this.state.menuItems.map(mi => {
            return <li key={mi.id}
                onClick={ () => this.props.onDeleteCartItem(mi.id) }
        >{mi.name} : {mi.qty} -{mi.price}</li>  
        });

        return (
            <div>
                <h2>Cart</h2>

                <ul>
                    {menuItems}
                </ul>
                <button onClick={this.cancelHandler}>Cancel</button>
                <button onClick={this.continueHandler}>Continue</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cartItems: state.cartItems
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDDD: (items) => dispatch({ type: 'STORE_CART_ITEMS', cartItems: items }),
        onDeleteCartItem: (id) => dispatch( {type: 'DELETE_CART_ITEM', idForDelete: id } )
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(Cart);