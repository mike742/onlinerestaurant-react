import React, { Component } from 'react';

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
        console.log(items);

        this.setState({ cartItems: items } );
    };

    cancelHandler = () => {
        this.props.history.goBack();
    }

    cancelContinue = () => {
        alert('Done')
    }

    render() {
        const menuItems = this.state.cartItems.map(mi => {
            return <li key={mi.id}>{mi.id} : {mi.qty} </li>  
        });

        return (
            <div>
                <h2>Cart</h2>

                <ul>
                    {menuItems}
                </ul>
                <button onClick={this.cancelHandler}>Cancel</button>
                <button onClick={this.cancelContinue}>Continue</button>
            </div>
        );
    }
}

export default Cart;