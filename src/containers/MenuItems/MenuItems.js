import  { React, Component } from 'react';

import MenuItem from '../../components/MenuItem/MenuItem';
import axios from 'axios';
import CreateMenuItem from '../../components/MenuItem/CreateMenuItem.js'
import { Card, Button } from "semantic-ui-react";

class MenuItems extends Component {
    
    state = {
        menuItems: [],
        url: "https://localhost:5001/MenuItem/",
        cartItems: []
    }

    componentDidMount() {
        axios.get(this.state.url)
            .then(response => {
                this.setState({menuItems: response.data})
            });
    }

    getMenuItemByIdHandler = (id) => {
        axios.get(this.state.url + id)
            .then(response => {
                console.log(response)
            })
    }

    addToCartHandler = (id, q, name, price) => {
        let ci = this.state.cartItems;
        ci.push({ id: id, quantity: +q, name: name, price: +price });

        this.setState({ cartItems: ci });
    }

    orderNowHandler = () => {
        const queryParams = [];

        for(let i of this.state.cartItems) {
            if(i !== null) {
                queryParams.push(i.id + "=" + i.quantity + "|" + i.name + "|" + i.price);
            }
        }
        const queryStr = queryParams.join('&');

        this.props.history.push({
            pathname: '/cart',
            search: '?' + queryStr
        });
    }

    render() {
        const menuItemsList = this.state.menuItems.map(mi => {
            return <MenuItem key={mi.id} 
                id={mi.id}
                name={mi.name} 
                price={mi.price}
                photoPath={mi.photoPath}
                getByIdClicked={() => this.getMenuItemByIdHandler(mi.id)}
                addToCartClicked={this.addToCartHandler}
                /> 
        });

        return (
            <div style={{margin: '10px'}}>
                <Card.Group>
                    {menuItemsList}
                </Card.Group>
                <hr />
                <CreateMenuItem />
                <div style={{ textAlign: "right", 
                    top: "50px", right: "40px", position: "fixed" }}>
                    <Button basic color='orange' onClick={ this.orderNowHandler } >ORDER NOW!</Button>
                </div>
            </div>
        );
    }
}

export default MenuItems;