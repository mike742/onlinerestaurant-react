import React, { Component } from 'react';

import { connect } from 'react-redux';
import axios from 'axios';

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
            let ddd =  param[1].split("|");
            arr.push({ id: param[0], name: ddd[1], price: ddd[2], qty: ddd[0]})
        }
        this.setState({ menuItems: arr } );
        
        this.setState({ cartItems: items } );
        console.log("menuItems: ", this.state.menuItems);

        this.props.onStoreCartItems(items);
        console.log("Redux Cart Items: ", this.props.cartItems);
    };

    getMenuItemByIdHandler = (id) => {
        
    }

    cancelHandler = () => {
        this.props.history.goBack();
    }

    continueHandler = () => {
        //alert('Done')
        this.props.history.push({
            pathname: '/contact-info',
        })
    }

    render() {
        
        const menuItems = this.state.menuItems.map(mi => {
            //debugger
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
        onStoreCartItems: (items) => dispatch({ type: 'STORE_CART_ITEMS', cartItems: items }),
        onDeleteCartItem: (id) => dispatch( {type: 'DELETE_CART_ITEM', idForDelete: id } )
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(Cart);