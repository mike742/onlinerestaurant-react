import React, { Component } from 'react';

import { connect } from 'react-redux';

class Cart extends Component {

    state = {
        cartItems: []
    };

    componentDidMount = () => {

        const query = new URLSearchParams(this.props.location.search);
        const items = [];

        for(let param of query.entries()) {
            items.push({ id: param[0], qty: param[1] });
        }

        this.setState({ cartItems: items } );

        this.props.onStoreCartItems(items);
        console.log("Redux Cart Items: ", this.props.cartItems);
    };

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
        
        const menuItems = this.props.cartItems.map(mi => {
            return <li key={mi.id}
                onClick={ () => this.props.onDeleteCartItem(mi.id) }
                >{mi.id} : {mi.qty} </li>  
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