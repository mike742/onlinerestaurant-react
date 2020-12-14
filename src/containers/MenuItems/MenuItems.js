import React, { Component } from 'react';
import MenuItem from '../../components/MenuItem/MenuItem';
import axios from 'axios';
import CreateMenuItem from '../../components/MenuItem/CreateMenuItem.js'

class MenuItems extends Component {
    state = {
        menuItems: [],
        url: "https://localhost:5001/MenuItem/",
        cartItems: []
    }

    componentDidMount() {
        //console.log("componentDidMount");
        axios.get(this.state.url)
            .then(response => {
                // console.log(response)
                this.setState({menuItems: response.data})
            });
    }

    getMenuItemByIdHandler = (id) => {
        axios.get(this.state.url + id)
            .then(response => {
                console.log(response)
            })
    }

    addToCartHandler = (id, q) => {
        // console.log(" parent:  " + id + " " + q);

        let ci = this.state.cartItems;
        ci.push({ id: id, quantity: +q });

        this.setState({ cartItems: ci });

        console.log(this.state.cartItems);
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
            <div>
                {menuItemsList}
                <CreateMenuItem />
            </div>
        );
    }
}

export default MenuItems;