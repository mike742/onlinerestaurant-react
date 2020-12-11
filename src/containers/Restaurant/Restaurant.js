import { React, Component } from 'react';
import MenuItem from '../../components/MenuItem/MenuItem';
import axios from 'axios';
import CreateMenuItem from '../../components/MenuItem/CreateMenuItem'

class Restaurant extends Component {

    state = {
        menuItems: [],
        url: "https://localhost:5001/MenuItem/"
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

    render() {

        const menuItemsList = this.state.menuItems.map(mi => {
            return <MenuItem key={mi.id} 
                name={mi.name} 
                price={mi.price}
                photoPath={mi.photoPath}
                getByIdClicked={() => this.getMenuItemByIdHandler(mi.id)}
                />
        });


        return(
            <div>
                This is a Restaurant

                {menuItemsList}


                <CreateMenuItem />
            </div>
        );
    }
}

export default Restaurant;