import { React, Component } from 'react';
import MenuItem from '../../components/MenuItem/MenuItem';
import axios from 'axios';


class Restaurant extends Component {

    state = {
        menuItems: [],
        url: "https://localhost:5001/MenuItem"
    }

    componentDidMount() {
        //console.log("componentDidMount");
        axios.get(this.state.url)
            .then(response => {
                console.log(response)
                this.setState({menuItems: response.data})
            });
    }

    render() {

        const menuItemsList = this.state.menuItems.map(mi => {
            return <MenuItem key={mi.id} 
                name={mi.name} 
                price={mi.price}
                photoPath={mi.photoPath}
                />
        });


        return(
            <div>
                This is a Restaurant

                {menuItemsList}

            </div>
        );
    }
}

export default Restaurant;