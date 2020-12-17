import  { React, Component } from 'react';

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

    addToCartHandler = (id, q, name, price) => {
        // console.log(" parent:  " + id + " " + q);

        let ci = this.state.cartItems;
        ci.push({ id: id, quantity: +q, name: name, price: +price });

        this.setState({ cartItems: ci });

        //console.log(this.state.cartItems);
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
        //console.log(this.props);

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
                <div style={{ textAlign: "right", 
                    top: "80px", right: "60px", position: "fixed" }}>
                    <button onClick={ this.orderNowHandler } >ORDER NOW!</button>
                </div>
            </div>
        );
    }
}

export default MenuItems;