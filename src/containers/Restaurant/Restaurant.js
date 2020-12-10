import { React, Component } from 'react';
import MenuItem from '../../components/MenuItem/MenuItem';

class Restaurant extends Component {

    render() {
        return(
            <div>
                This is a Restaurant

                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </div>
        );
    }
}

export default Restaurant;